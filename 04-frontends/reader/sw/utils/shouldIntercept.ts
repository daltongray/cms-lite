/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

export const shouldIntercept = (request: Request) => {
  if (request.url.includes(".vite/deps")) {
    return false;
  }

  if (request.url.includes("/src/")) {
    return false;
  }
  return true;
};
