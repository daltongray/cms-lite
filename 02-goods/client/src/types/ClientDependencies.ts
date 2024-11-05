import {
  Dependencies,
  FirebaseClientAppIntegration,
  FirebaseClientStorageIntegration,
  ReduxStoreIntegration,
} from "./integrations";
import { StateManager } from "@change-my-story/client-goods/types/stateManagement";
import {
  ClientState,
} from "@change-my-story/client-goods/types/state";

export type ClientDependencies = Dependencies &
  FirebaseClientAppIntegration &
  FirebaseClientStorageIntegration &
  ReduxStoreIntegration & {
    clientStateManager: StateManager<ClientState>;
  };
