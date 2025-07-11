import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100%;
  height: 100vh;
  height: 100dvh; /* Modern browsers - accounts for mobile browser chrome */
`;

export const Sidebar = styled.nav`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow-y: auto;
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
