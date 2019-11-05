import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "@/routes/index.js";
import PageLayout from "./layout/index";
import LoginPage from "@/pages/login/index.js";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends React.Component {
  render() {
    const { loginPage, mainPage } = router;
    return (
        <Router history={history}>
          <Switch>
            <Route
              path={mainPage.path}
              component={() => <PageLayout routes={mainPage.routes} />}
            />
            } />
            <Route path={loginPage.path} component={LoginPage} />} />
          </Switch>
        </Router>
    );
  }
}

export default App;
