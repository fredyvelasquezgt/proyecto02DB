import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { AuthRouter } from "./authRouter";
import { DashboardRouter } from "./dashboardRouter";
import { PrivateRouter } from "./privateRouter";
import { PublicRouter } from "./publicRouter";

export const RootRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRouter
            exact
            path={"/auth"}
            isAuth={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRouter
            path={"/"}
            isAuth={isLoggedIn}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
