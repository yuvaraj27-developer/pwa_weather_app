import { Workbox } from 'workbox-window';

const serviceWorkerRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('Hey there!! There is a new version update available, please reload!!')) {
          window.location.reload();
        }
      }
    })
    wb.register();
  }
}

export default serviceWorkerRegister;