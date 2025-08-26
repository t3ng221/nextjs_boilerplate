import styled from 'styled-components';

const Container = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
`;

const SettingsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export default function SettingsPage() {
  return (
    <Container>
      <Title>Settings</Title>
      <SettingsGrid>
        <Card>
          <CardTitle>Account Settings</CardTitle>
          {/* Account settings will go here */}
        </Card>
        
        <Card>
          <CardTitle>Privacy Settings</CardTitle>
          {/* Privacy settings will go here */}
        </Card>
        
        <Card>
          <CardTitle>Notification Settings</CardTitle>
          {/* Notification settings will go here */}
        </Card>
      </SettingsGrid>
    </Container>
  );
}
