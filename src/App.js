import React, { lazy } from 'react';
import { GlobalStyles, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const Layout = lazy(() => import('./Component/Layout'));
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          html: {
            fontFamily: 'sans-serif',
            fontSize: '10px',
            height: '100%',
          },
          body: {
            margin: 0,
            height: '100%',
            backgroundColor: '#0a1f44',
            color: '#ffffff',
          },
          '#app': {
            height: '100%',
          },
        }}
      />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
