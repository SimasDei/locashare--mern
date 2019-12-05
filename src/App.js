import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./user/pages/Users.page";
import NewPlace from "./places/pages/NewPlace.page";

const App = () => (
  <Router>
    <Switch>
      <Route path={"/"} exact>
        <Users />
      </Route>
      <Route path={"/places/new"} exact>
        <NewPlace />
      </Route>
      <Redirect to={"/"} />
    </Switch>
  </Router>
);
export default App;
