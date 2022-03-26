import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../pages/auth/loginScreen";
import { SingInScreen } from "../pages/auth/singInScreen";


export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={LoginScreen} />
      <Route exact path="/auth/singin" component={SingInScreen} />
      <Redirect to="/auth" />
    </Switch>
  );
};
