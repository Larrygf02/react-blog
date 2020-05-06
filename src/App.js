import React from 'react';
import './App.css';
import { lustria } from './fonts/lustria';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PrimarySearchAppBar from './components/Menu';
//import MenuBar from './components/MenuMaterial';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lustria',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [lustria],
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
