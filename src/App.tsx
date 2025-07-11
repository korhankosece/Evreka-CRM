import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
