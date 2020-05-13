import React from 'react';
import './App.css';
import { lustria } from './fonts/lustria';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import MenuBar from './components/Menu';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import MyStories from './components/stories/PageYourStories';
import { Provider } from 'react-redux';
import store from './store';
import SignIn from './components/login/SignIn';

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
let isAuthenticated = false
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <MenuBar></MenuBar>
            <Switch>
              <Route exact path="/login" component={SignIn}></Route>
              <Route exact path="/stories" render={() => (
                isAuthenticated === true ? <MyStories/> : <Redirect to="/login"/>
              )}></Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
