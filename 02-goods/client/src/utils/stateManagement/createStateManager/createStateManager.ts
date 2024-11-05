import { createSlice } from "@reduxjs/toolkit";
import { ClientStore, StateManager } from "@change-my-story/client-goods";

export const createStateManager = <State extends Record<string, any>>({
  initialState,
  stateManagerId,
  store,
}: {
  initialState: State;
  store: ClientStore;
  stateManagerId: string;
}): StateManager<State> => {
  const sliceKey = `${stateManagerId || "unnamed"}__stateManager`;

  const connectionManagerSlice = createSlice({
    initialState,
    name: sliceKey,
    reducers: {
      update(state, action) {
        return { ...state, ...action.payload };
      },
    },
  });

  const connectionManagerReducer = connectionManagerSlice.reducer;

  store.injectReducer(sliceKey, connectionManagerReducer);

  const { update: updateAction } = connectionManagerSlice.actions;

  const get = (): State => store.getState()[sliceKey];
  const getSelector = (state) => state[sliceKey] as State;

  const update = (updates: Partial<State> = {}) => {
    store.dispatch(updateAction(updates));
  };

  return { get, getSelector, sliceKey, update, updateAction };
};
