import React from "react";
import {Link} from 'react-router-dom'
import './index.less'
class SamplePage extends React.Component {
  render() {
    return (
      <div className="sample-page">
       <ul className="func-list">
           <li><Link to="/main/samples/table">表格</Link></li>
           <li><Link to="/main/samples/button">按钮</Link></li>
           {/* <li><Link to="/main/samples/table">表格</Link></li> */}
       </ul>
      </div>
    );
  }
}
export default SamplePage;
