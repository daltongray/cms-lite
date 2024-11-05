import {
  OfflineAccessState,
  createStateManager,
} from "@change-my-story/client-goods";
import { reduxToyota } from "./reduxToyota";

export const offlineAccessStateManager = createStateManager<OfflineAccessState>(
  {
    initialState: {
      isInstalled: false,
      isOfflineAccessLoaded: false,
    },
    stateManagerId: "offline-access-state-manager",
    store: reduxToyota.store,
  }
);
