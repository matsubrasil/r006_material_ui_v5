import React from 'react';
import { CssBaseline } from '@mui/material';

import { AppThemeProvider, DrawerProvider } from 'shared/contexts';
import { AppRoutes } from 'routes';
import { MenuLateral } from 'components';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <AppThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </DrawerProvider>
      </AppThemeProvider>
    </>
  );
};
