import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100%;
  height: 100vh;
  height: 100dvh; /* Modern browsers - accounts for mobile browser chrome */
`;

export const Sidebar = styled.nav`
  width: 180px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow-y: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
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

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.colors.primary.contrastText};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2.5)};
  background-color: ${({ theme }) => theme.colors.background.default};
  overflow-y: auto; /* Allow content area to scroll independently */
  height: 100%; /* Take full height of container */
`;
