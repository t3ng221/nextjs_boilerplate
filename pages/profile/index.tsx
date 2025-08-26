import styled from 'styled-components';

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProfileCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Avatar = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default function ProfilePage() {
  return (
    <Container>
      <Title>Profile</Title>
      <ProfileCard>
        <ProfileHeader>
          <Avatar />
          <UserInfo>
            <UserName>User Name</UserName>
            <UserEmail>user@example.com</UserEmail>
          </UserInfo>
        </ProfileHeader>
        {/* Profile content will go here */}
      </ProfileCard>
    </Container>
  );
}
