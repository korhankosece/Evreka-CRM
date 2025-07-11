import { Outlet } from 'react-router-dom';
import {
  LayoutContainer,
  Sidebar,
  NavList,
  NavLink,
  MainContent,
  LogoContainer,
  LogoTitle,
  LogoText,
} from './Layout.styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar>
        <LogoContainer>
          <LogoTitle>
            <LogoText $variant="primary">Evreka</LogoText>
            <LogoText>CRM</LogoText>
          </LogoTitle>
        </LogoContainer>
        <NavList>
          <li>
            <NavLink to="/" end>
              Users
            </NavLink>
          </li>
        </NavList>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
