import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { AthRoutes } from './router';
import { CustomerProvider } from './common/firebase/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </React.StrictMode>
);

