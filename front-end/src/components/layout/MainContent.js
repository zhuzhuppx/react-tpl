import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@/routes/index.js";
import {RouteWithSubRoutes} from "@/routes/helper.js"
class MainContent extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}
export default MainContent;
