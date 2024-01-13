import React from 'react';

import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import Theme from 'theme';

import { TAppProviderProps } from './types';

export const AppProvider = ({ children }: TAppProviderProps) => (
  <ThemeProvider theme={Theme}>
    <Router>{children}</Router>
  </ThemeProvider>
);
