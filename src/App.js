import React from "react";
import {BrowserRouter as Router, Switch } from "react-router-dom";
import {authProtectedRoutes, publicRoutes} from "./routes";
import AuthMiddleware from "./routes/route";
import Layout from "./components/Layout";
import {connect} from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AuthMiddleware
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
                exact
              />
            ))}
            
            {authProtectedRoutes.map((route, idx) => (
              <AuthMiddleware
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={true}
                exact
              />
            ))}
          </Switch>
        </Router>
      </StyledEngineProvider>
    </React.Fragment>
  )
};

export default connect(null, null)(App);