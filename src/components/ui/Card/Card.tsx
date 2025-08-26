import React from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const StyledCard = styled.div<{ cardPadding: 'none' | 'sm' | 'md' | 'lg'; cardShadow: 'none' | 'sm' | 'md' | 'lg' }>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  /* Padding variants */
  ${({ cardPadding }) => {
    switch (cardPadding) {
      case 'none':
        return css`
          padding: 0;
        `;
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing.md};
        `;
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing.xxl};
        `;
      default:
        return css`
          padding: ${({ theme }) => theme.spacing.xl};
        `;
    }
  }}

  /* Shadow variants */
  ${({ cardShadow }) => {
    switch (cardShadow) {
      case 'none':
        return css`
          box-shadow: none;
        `;
      case 'sm':
        return css`
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        `;
      case 'lg':
        return css`
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        `;
      default:
        return css`
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        `;
    }
  }}
`;

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  shadow = 'md',
}) => {
  return (
    <StyledCard cardPadding={padding} cardShadow={shadow}>
      {children}
    </StyledCard>
  );
};
