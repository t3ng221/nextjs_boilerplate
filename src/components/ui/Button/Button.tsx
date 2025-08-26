import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonComponentProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: all ${({ theme }) => theme.transition.fast};
  cursor: pointer;
  border: none;
  text-decoration: none;
  position: relative;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Size variants */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
          font-size: ${({ theme }) => theme.fontSize.sm};
        `;
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
          font-size: ${({ theme }) => theme.fontSize.lg};
        `;
      default:
        return css`
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
          font-size: ${({ theme }) => theme.fontSize.base};
        `;
    }
  }}

  /* Color variants */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.secondary};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.secondaryDark};
          }
        `;
      case 'outline':
        return css`
          border: 1px solid ${({ theme }) => theme.colors.border};
          background-color: ${({ theme }) => theme.colors.background};
          color: ${({ theme }) => theme.colors.text};
          
          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.surface};
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.text};
          
          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.surface};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.primaryDark};
          }
        `;
    }
  }}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: ${({ theme }) => theme.spacing.xs};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonComponentProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};
