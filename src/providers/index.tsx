'use client';

import React from 'react';
import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';
import { StyledComponentsProvider } from './StyledComponentsProvider';
import { ThemeProvider } from './ThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryProvider>
      <StyledComponentsProvider>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </StyledComponentsProvider>
    </QueryProvider>
  );
};
