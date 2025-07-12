import { Outlet } from 'react-router-dom';
import {
  LayoutContainer,
  Header,
  MainContent,
  LogoContainer,
  LogoTitle,
  LogoText,
} from './Layout.styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <LogoContainer>
          <LogoTitle>
            <LogoText $variant="primary">Evreka</LogoText>
            <LogoText>CRM</LogoText>
          </LogoTitle>
        </LogoContainer>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
