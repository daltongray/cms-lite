import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./middleware";
import { ClientStore } from "../../types/stateManagement";

// Define the Reducers that will always be present in the application
const staticReducers = {
  rootReducer: (state) => state || {},
};

const createReducer = (asyncReducers) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

export const createStore = (): ClientStore => {
  const store: any = configureStore({
    // Add the listener middleware to the store.
    // NOTE: Since this can receive actions with functions inside,
    // it should go before the serializability check middleware
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),

    reducer: staticReducers,
  });

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    if (store.asyncReducers[key]) {
      console.log("attempted to inject duplicate reducer with key: " + key);
      return;
    }
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  store.removeReducer = (key) => {
    if (!store.asyncReducers[key]) {
      console.log(
        "attempted to remove a reducer that wasn't in the store with key: " +
          key
      );
      return;
    }
    delete store.asyncReducers[key];

    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};
