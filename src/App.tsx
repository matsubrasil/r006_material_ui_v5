import React from 'react';
import { CssBaseline } from '@mui/material';
import { AppRoutes } from 'routes';
import { ThemeProvider } from '@mui/system';
import { LightTheme } from 'shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};
