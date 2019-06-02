import React from "react";
import Index from "./pages/Index";

import { Route, Switch } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" render={() => <Index />} />
  </Switch>
);
