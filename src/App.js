import React from 'react';
import './App.css';
import { lustria } from './fonts/lustria';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import MenuBar from './components/Menu';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import MyStories from './components/stories/PageYourStories';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import PageStories from './components/stories/PageStories';

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

function MainApp() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <div>
      {isAuthenticated ? <MenuBar/> : null}
      <Switch>
        <Route exact path="/" component={PageStories}></Route>
        <Route exact path="/login" component={SignIn}></Route>
        <Route exact path="/register" component={SignUp}></Route>
        <Route exact path="/stories" render={() => (
          isAuthenticated === true ? <MyStories/> : <Redirect to="/login"/>
        )}></Route>
      </Switch>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainApp></MainApp>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
