'use client';

import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: #6b7280;
`;

export default function DashboardPage() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Grid>
        <Card>
          <CardTitle>Welcome to Dashboard</CardTitle>
          <CardText>Your dashboard content goes here.</CardText>
        </Card>
      </Grid>
    </Container>
  );
}
