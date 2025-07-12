import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
  height: 100dvh; /* Modern browsers - accounts for mobile browser chrome */
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const LogoText = styled.span<{ $variant?: 'primary' | 'contrast' }>`
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.success.main : theme.colors.primary.contrastText};
`;

export const MainContent = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
  overflow-y: auto; /* Allow content area to scroll independently */
  display: flex;
  flex-direction: column;
  min-height: 0; /* Important for proper flex behavior */
`;
