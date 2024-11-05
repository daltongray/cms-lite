const l = "cms-app-files", a = {
  swRoot: !0,
  appFilesCaching: !0,
  swFetches: !0,
  swMessages: !0,
  any: !1
}, t = (e, ...s) => {
  if (e && a[e])
    return console.log(`SW:[${String(e)}]`, ...s);
  !e && !a.any || console.log("SW:[INFO]", ...s);
}, h = (e) => {
  t("appFilesCaching", "cacheAppFiles start");
  {
    t("appFilesCaching", "VITE_SW_ENV is set to DEV, skipping cache");
    return;
  }
}, p = async (e) => {
  var i;
  if (e.url.includes(".vite/deps"))
    return t(
      "swFetches",
      "ignored vite chunk",
      ((i = e.url.split(".vite")) == null ? void 0 : i[1]) || ""
    ), fetch(e);
  const s = await caches.open(l), n = await s.match(e);
  if (n)
    return console.log("[CHECK]: Serving_From_Cache:", e.url), n;
  console.log("[CHECK]: Cache_Miss! Fetching_From_Network:", e.url);
  const c = await fetch(e);
  return s.put(e, c.clone()), c;
}, u = (e) => !(e.url.includes(".vite/deps") || e.url.includes("/src/")), o = self, r = 5, d = "game-assets-cache";
o.addEventListener("install", (e) => {
  t("swRoot", `Install started with version: ${r}`), e.waitUntil(caches.open(d)), h(), o.skipWaiting(), t("swRoot", "Install complete");
});
self.addEventListener("activate", (e) => {
  t("swRoot", `Activate with version: ${r}`), e.waitUntil(clients.claim());
});
self.addEventListener("message", (e) => {
  e instanceof ExtendableMessageEvent && e.data && e.data.type === "customEvent" && t("swMessages", "message received", e);
});
self.addEventListener("fetch", (e) => {
  if (!u(e.request))
    return e.respondWith(fetch(e.request));
  t("swFetches", "Fetch intercepted", e.request.url), e.respondWith(p(e.request));
});
