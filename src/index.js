import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import serviceWorkerRegister from './serviceWorkerRegister';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

serviceWorkerRegister();