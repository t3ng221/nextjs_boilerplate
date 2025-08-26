import Image from "next/image";
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: 5rem;
  gap: 4rem;
  font-family: ${({ theme }) => theme.fontFamily?.sans || 'system-ui, sans-serif'};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 5rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-row-start: 2;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;

const LogoImage = styled(Image)`
  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
`;

const StepsList = styled.ol`
  font-family: monospace;
  list-style: decimal;
  list-style-position: inside;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
  }
`;

const StepItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.01em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlock = styled.code`
  background-color: rgba(0, 0, 0, 0.05);
  font-family: monospace;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  border-radius: 9999px;
  border: 1px solid transparent;
  transition: all ${({ theme }) => theme.transition.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-decoration: none;

  &:hover {
    background-color: #383838;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #ccc;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 3rem;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    width: auto;
  }
`;

const SecondaryButton = styled.a`
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all ${({ theme }) => theme.transition.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: #f2f2f2;
    border-color: transparent;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.145);
    
    &:hover {
      background-color: #1a1a1a;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 3rem;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    width: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 158px;
  }
`;

const Footer = styled.footer`
  grid-row-start: 3;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Main>
        <LogoImage
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <StepsList>
          <StepItem>
            Get started by editing{" "}
            <CodeBlock>
              pages/index.tsx
            </CodeBlock>
            .
          </StepItem>
          <StepItem>
            Save and see your changes instantly.
          </StepItem>
        </StepsList>

        <ButtonContainer>
          <PrimaryButton
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
              style={{ filter: 'invert(1)' }}
            />
            Deploy now
          </PrimaryButton>
          <SecondaryButton
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </SecondaryButton>
        </ButtonContainer>
      </Main>
      <Footer>
        <FooterLink
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </FooterLink>
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </FooterLink>
        <FooterLink
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </FooterLink>
      </Footer>
    </Container>
  );
}
