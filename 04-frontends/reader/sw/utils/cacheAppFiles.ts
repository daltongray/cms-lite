/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { APP_FILES_CACHE_NAME } from "../SWConsts";
import { alertSWFlow, logSWFlow } from "./logSWFlow";
// todo item 2 - allow us to clear in dev, and upon new version
export const cacheAppFiles = (event: ExtendableEvent) => {
  logSWFlow("appFilesCaching", "cacheAppFiles start");

  // @ts-expect-error - import.meta.env.VITE_SW_ENV
  if (import.meta.env.VITE_SW_ENV === "DEV") {
    logSWFlow("appFilesCaching", "VITE_SW_ENV is set to DEV, skipping cache");
    return;
  }

  event.waitUntil(
    fetch("./.vite/manifest.json")
      .then((response) => {
        try {
          return response.json();
        } catch (reason) {
          alertSWFlow("appFilesCaching", "Unable to process manifest", reason);
        }
      })
      .catch((reason) => {
        alertSWFlow("appFilesCaching", "Unable to fetch manifest", reason);
      })
      .then((manifest) => {
        const filesToCache = Object.values(manifest).map(
          (entry: any) => `/${entry.file}`
        );
        logSWFlow("appFilesCaching", "added to cache from manifest", {
          filesToCache,
          manifest,
        });
        return caches.open(APP_FILES_CACHE_NAME).then((cache) => {
          return cache.addAll(["/", ...filesToCache]);
        });
      })
  );
};
