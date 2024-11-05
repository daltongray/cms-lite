import { register } from "register-service-worker";
import { offlineAccessStateManager } from "loaders";

const SW_SCOPE = "/";

export class OfflineAccessModule {
  installPrompt: any;

  init() {
    console.log("attempted registration");
    register(`/service-worker.js`, {
      registrationOptions: { scope: SW_SCOPE, type: "module" },
    });

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      this.installPrompt = event;
      offlineAccessStateManager.update({ isOfflineAccessLoaded: true });
    });
    window.addEventListener("appinstalled", () => {
      offlineAccessStateManager.update({ isInstalled: true });
    });
  }

  async install() {
    if (!this.installPrompt) {
      return;
    }
    const result = await this.installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    offlineAccessStateManager.update({ isInstalled: true });
  }

  postMessage(messagePayload: Record<string, any>) {
    navigator.serviceWorker.getRegistration(SW_SCOPE).then((registration) => {
      if (registration && registration.active) {
        registration.active.postMessage(messagePayload);
      } else {
        console.log("No active service worker found for scope.");
      }
    });
  }
}
