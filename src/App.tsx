import React from 'react';
import { CssBaseline } from '@mui/material';

import { AppThemeProvider } from 'shared/contexts';
import { AppRoutes } from 'routes';
import { MenuLateral } from 'components';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <AppThemeProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
};
