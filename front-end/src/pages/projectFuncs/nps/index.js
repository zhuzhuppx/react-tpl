import React from "react";
import { Tabs } from "antd";
import "./index.less";
const { TabPane } = Tabs;
class Nps extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="NPS" key="1">
            NPS
          </TabPane>       
          <TabPane tab="满意度" key="2">
            满意度
          </TabPane>
        </Tabs>        
      </div>
    );
  }
}
export default Nps;
