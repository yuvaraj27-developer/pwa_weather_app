import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

clientsClaim();

self.skipWaiting();

precacheAndRoute([...self.__WB_MANIFEST, './background_weather_app.jpg'], {
  // Increase the maximum file size allowed for precaching (e.g., 4 MB)
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 4 MB
});