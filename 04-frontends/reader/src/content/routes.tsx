import {  SplashPage } from "pages";
import {  ResponsiveMUILayout } from "layouts";
import { ROUTE_KEYS } from "keys";
import { RouteType } from "types";

export const routes = [
  {
    element: (
      <ResponsiveMUILayout>
        <SplashPage />
      </ResponsiveMUILayout>
    ),
    path: ROUTE_KEYS.ROOT,
  },

] as RouteType[];
