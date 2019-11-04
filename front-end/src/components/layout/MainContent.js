import React from "react";
import { Switch, Route } from "react-router-dom";
import {RouteWithSubRoutes} from "@/routes/helper.js"
class MainContent extends React.Component {
  render() {
      const routes = this.props.routes;
      console.log(routes);
      
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
