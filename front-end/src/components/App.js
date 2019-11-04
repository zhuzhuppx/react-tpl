import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "@/routes/index.js";
import PageLayout from "./layout/index";
class App extends React.Component {
  render() {
    const { loginPage, mainPage } = router;
    return (
      <Router>
        <Switch>
          <Route
            path={loginPage.path}
            render={props => <loginPage.component {...props} />}
          />
          <Route
            path={mainPage.path}
            render={props => <PageLayout {...props} routes={mainPage.routes} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
