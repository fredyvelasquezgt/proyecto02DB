import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { DashboardScreen } from "../pages/dashboard/dashboardScreen";


export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardScreen} />
      <Redirect to="/" />
    </Switch>
  );
};
