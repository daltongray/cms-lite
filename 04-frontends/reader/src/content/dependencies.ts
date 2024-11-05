import * as storage from "firebase/storage";

import {
  clientStateManager,
  reduxToyota,
} from "loaders";

import { ClientDependencies } from "@change-my-story/client-goods";

const { store } = reduxToyota;

export const dependencies = {
  Error: Error,
  logger: {
    error: console.error,
    log: console.log,
    warn: console.warn,
  },
  clientStateManager,
  storage,
  store,
} as ClientDependencies;
