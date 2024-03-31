import { Workbox } from "workbox-window";

export const serviceWorkerRegistration = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if(confirm('New update is available. Please refresh!!')) {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
}
