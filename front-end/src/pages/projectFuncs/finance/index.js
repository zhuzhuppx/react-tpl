import React from "react";
import { Tabs } from "antd";
import "./index.less";
const { TabPane } = Tabs;
class Finance extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="兼职劳务费" key="1">
            兼职劳务费
          </TabPane>
          <TabPane tab="面试官" key="2">
            面试官
          </TabPane>
          <TabPane tab="邀约话务员" key="3">
            邀约话务员
          </TabPane>
          <TabPane tab="线下宣传" key="4">
            线下宣传
          </TabPane>
          <TabPane tab="其他劳务费" key="5">
            其他劳务费
          </TabPane>
          <TabPane tab="智享转发" key="6">
            智享转发
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Finance;
