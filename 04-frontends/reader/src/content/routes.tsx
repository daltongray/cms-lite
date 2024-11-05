import { AboutPage } from "pages";
import { ResponsiveMUILayout } from "layouts";
import { ROUTE_KEYS } from "keys";
import { RouteType } from "@change-my-story/client-goods";

export const routes = [
  {
    element: (
      <ResponsiveMUILayout>
        <AboutPage />
      </ResponsiveMUILayout>
    ),
    path: ROUTE_KEYS.ROOT,
  },
] as RouteType[];
