import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../pages/ui/layout";

export const PrivateRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Layout>
      <Route
        {...rest}
        component={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/auth" />
        }
      />
    </Layout>
  );
};
