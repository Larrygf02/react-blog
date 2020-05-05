import React from 'react';
import './App.css';
import { lustria } from './fonts/lustria';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PrimarySearchAppBar from './components/Menu';

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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
