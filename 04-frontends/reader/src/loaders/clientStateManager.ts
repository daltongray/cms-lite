import { ClientState, createStateManager } from "@change-my-story/client-goods";
import { reduxToyota } from "./reduxToyota";

export const clientStateManager = createStateManager<ClientState>({
  initialState: {
    isMobile: true,
    isLoaded: true,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    isDrawerOpen: false,
  },
  stateManagerId: "client-state-manager",
  store: reduxToyota.store,
});
