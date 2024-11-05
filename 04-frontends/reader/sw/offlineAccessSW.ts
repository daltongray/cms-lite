/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { cacheAppFiles } from "./utils/cacheAppFiles";
import { interceptFetch } from "./utils/interceptFetch";
import { logSWFlow } from "./utils/logSWFlow";
import { shouldIntercept } from "./utils/shouldIntercept";

const sw = self as unknown as ServiceWorker &
  typeof globalThis &
  Record<string, any>;

const version = 5;
const CACHE_NAME = "game-assets-cache";

sw.addEventListener("install", (event: ExtendableEvent) => {
  logSWFlow("swRoot", `Install started with version: ${version}`);

  event.waitUntil(caches.open(CACHE_NAME));
  cacheAppFiles(event);
  sw.skipWaiting();

  logSWFlow("swRoot", `Install complete`);
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  logSWFlow("swRoot", `Activate with version: ${version}`);
  // @ts-expect-error - global scope lacks clients namespace
  event.waitUntil(clients.claim());
});

self.addEventListener("message", (event) => {
  if (!(event instanceof ExtendableMessageEvent)) return;
  if (!(event.data && event.data.type === "customEvent")) return;

  logSWFlow("swMessages", `message received`, event);
});

// Intercept fetch requests
self.addEventListener("fetch", (event: FetchEvent) => {
  const shouldFetch = shouldIntercept(event.request);

  if (!shouldFetch) return event.respondWith(fetch(event.request));

  logSWFlow("swFetches", `Fetch intercepted`, event.request.url);

  event.respondWith(interceptFetch(event.request));
});
