import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashBoardPage from "../components/DashBoardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// If we use browser router behind the scenes react router is doing some work for us. like keeping track of history object but now we want to redirect to different locations directly so we are using history api
//browser history
// npm i history

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
