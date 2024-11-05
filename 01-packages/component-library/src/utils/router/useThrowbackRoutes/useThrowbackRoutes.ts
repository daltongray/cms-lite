import {
  createBrowserRouter,
  RouteObject,
  RouterProviderProps,
} from "react-router-dom";
import { replaceRouteParams } from "./replaceRouteParams";

type ObjectWithKeys<T extends string[]> = {
  [K in T[number]]: string;
};

type AssemblerRouteObject = Omit<RouteObject, "path"> & { pathBits: string[] };

type UseThrowbackRoutes = <
  P extends string[],
  S extends string[],
  R extends string
>(
  params: P,
  segments: S,
  assembler: (options: {
    params: ObjectWithKeys<P>;
    segments: ObjectWithKeys<S>;
  }) => Record<R, AssemblerRouteObject>,
  navigator?: (string) => any
) => {
  goTo: (route: R, params?: Record<string, string>) => void;
  router: RouterProviderProps["router"];
};

type GetThrowbackRouteOptions = <
  P extends string[],
  S extends string[],
  R extends string
>(
  params: P,
  segments: S,
  assembler: (options: {
    params: ObjectWithKeys<P>;
    segments: ObjectWithKeys<S>;
  }) => Record<R, AssemblerRouteObject>
) => [
  params: P,
  segments: S,
  assembler: (options: {
    params: ObjectWithKeys<P>;
    segments: ObjectWithKeys<S>;
  }) => Record<R, AssemblerRouteObject>
];

export const getThrowbackRouteOptions: GetThrowbackRouteOptions = (
  params,
  segments,
  assembler
) => {
  return [params, segments, assembler];
};
export const useThrowbackRoutes: UseThrowbackRoutes = (
  rawParams,
  rawSegments,
  assembler,
  navigator
) => {
  const params = rawParams.reduce((paramMap, param) => {
    return { ...paramMap, [param]: `/:${param}` };
  }, {} as any);

  const segments = rawSegments.reduce(
    (segmentMap, segment) => {
      return { ...segmentMap, [segment]: `/${segment}` };
    },
    { home: "/" } as any
  );

  const assemblerOutput = assembler({ params, segments });

  const routes = [] as any[];
  const routeMap = {} as any[];

  for (const routeKey in assemblerOutput) {
    const { pathBits, ...routeObject } = assemblerOutput[routeKey];

    const path = pathBits.join().replace(/,/g, "");

    routes.push({ ...routeObject, path });
    routeMap[routeKey as string] = path;
  }

  const goTo = (route, params = {}) => {
    if (!navigator) return;
    navigator(replaceRouteParams(routeMap[route], params));
  };

  const router = createBrowserRouter(routes);

  return { goTo, router };
};
