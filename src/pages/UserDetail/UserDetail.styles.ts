import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.default};
`;

export const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const LoadingMessage = styled.div`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ErrorContainer = styled.div`
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0 0 2rem;
  }

  button {
    min-width: 200px;
  }
`;
