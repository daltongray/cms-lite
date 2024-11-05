/**
 * Replaces the param string in a route with its value. ie: someRoute/:someParam becomes someRoute/value
 */
export const replaceRouteParams = (
  route: string,
  params: Record<string, string>
): string => {
  let newRoute = route;
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      newRoute = newRoute.replace(`:${key}`, params[key]);
    }
  }
  return newRoute;
};
