import React from 'react';
import { CssBaseline } from '@mui/material';

import { AppThemeProvider } from 'shared/contexts';
import { AppRoutes } from 'routes';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </>
  );
};
