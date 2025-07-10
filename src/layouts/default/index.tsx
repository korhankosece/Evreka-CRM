import { Outlet } from 'react-router-dom';

import { LayoutContainer, Sidebar, NavList, NavLink, MainContent } from './styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar>
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
