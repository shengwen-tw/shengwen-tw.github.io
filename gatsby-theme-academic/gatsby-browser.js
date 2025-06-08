import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

export const wrapPageElement = _wrapPageElement;

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      reg.update();
    });
  }
};

/*export const onRouteUpdate = () => {
  window.navigator.serviceWorker.register('/sw.js').then((reg) => {
    reg.update();
  });
};*/

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => {
  console.log('update found, reload the page');
  window.location.reload(true);
};
