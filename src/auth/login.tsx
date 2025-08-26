'use client';

import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export default function LoginPage() {
  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>
            Sign in to your account
          </Title>
        </Header>
        {/* Login form will go here */}
      </FormWrapper>
    </Container>
  );
}
