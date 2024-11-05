/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { logSWFlow } from "./logSWFlow";
import { APP_FILES_CACHE_NAME } from "../SWConsts";

export const interceptFetch = async (request: Request) => {
  if (request.url.includes(".vite/deps")) {
    logSWFlow(
      "swFetches",
      "ignored vite chunk",
      request.url.split(".vite")?.[1] || ""
    );
    return fetch(request);
  }
  // Define the name for the cache related to GeoServer requests
  // Open or create the cache
  const cache = await caches.open(APP_FILES_CACHE_NAME);

  // Try to find the response in the cache
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    console.log("[CHECK]: Serving_From_Cache:", request.url);
    return cachedResponse; // If found in cache, return the cached response
  }

  console.log("[CHECK]: Cache_Miss! Fetching_From_Network:", request.url);
  // If not in cache, fetch from the network
  const networkResponse = await fetch(request);
  // Save the fetched response in the cache for future use
  cache.put(request, networkResponse.clone());
  return networkResponse; // Return the fetched response
};
