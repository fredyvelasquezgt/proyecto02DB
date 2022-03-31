import React, { useState } from "react";

import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { CreateAccount } from "../pages/auth/createAccount";
import { HomeScreen } from "../pages/auth/homeScreen";
import { LoginScreen } from "../pages/auth/loginScreen";
import { SignInScreen } from "../pages/auth/signInScreen";
import { DashboardScreen } from "../pages/dashboard/dashboardScreen";


export const RootRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Switch>

          {/* Public routes */}
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/auth" component={LoginScreen} />
          <Route exact path="/auth/signin" component={SignInScreen} />
          <Route exact path="/auth/accounts" component={CreateAccount} />

          {/* Private routes */}

          <Route exact path="/app" component={DashboardScreen} />
          <Redirect to="/" />

        </Switch>
      </div>
    </BrowserRouter>
  );
};
