import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "content";

import { Provider } from "react-redux";
import { AutoDiv } from "@change-my-story/component-library";
import { offlineAccessModule, reduxToyota } from "loaders";

const router = createBrowserRouter(routes);

offlineAccessModule.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={reduxToyota.store}>
    <AutoDiv width={"100dvw"} height={"100dvh"}>
      <RouterProvider router={router} />
    </AutoDiv>
  </Provider>
);
