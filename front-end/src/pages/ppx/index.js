import React from "react";
import { Switch, Route ,Link} from "react-router-dom";
import { RouteWithSubRoutes } from "@/routes/helper.js";

class PpxPage extends React.Component {
  render() {
    const routes = this.props.routes;
    console.log(this.props.routes);
    
    return (
      <div className="index-page">
        PpxPage
        <ul>
        <li>
          <Link to="/ppx/p01">ppx01</Link>
        </li>       
      </ul>
       
      </div>
    );
  }
}
export default PpxPage;