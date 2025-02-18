import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthKitProvider } from '@workos-inc/authkit-react';

import App from './app';
import { getEnvSettings } from './utils/env-settings';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const settings = getEnvSettings();

root.render(
  <StrictMode>
    <AuthKitProvider 
      clientId={settings.workosClientId}
      apiHostname={settings.workosApiHostName}
      redirectUri={settings.redirectUri}
      devMode={Boolean(settings.devMode)}
    >
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </AuthKitProvider>
  </StrictMode>
);
