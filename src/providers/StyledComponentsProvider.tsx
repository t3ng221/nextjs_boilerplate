'use client';


import { GlobalStyle, lightTheme } from '@/styles';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface StyledComponentsProviderProps {
  children: React.ReactNode;
}

export const StyledComponentsProvider: React.FC<StyledComponentsProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
