import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { serviceWorkerRegistration } from './serviceWorkerRegistration';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

serviceWorkerRegistration();
