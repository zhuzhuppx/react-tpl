import React from "react";
import { Tabs } from "antd";
import "./index.less";
const { TabPane } = Tabs;
class Feedback extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="智享转发" key="1">
            智享转发
          </TabPane>
          <TabPane tab="公众号资源" key="2">
            公众号资源
          </TabPane>
          <TabPane tab="KOL" key="3">
            KOL
          </TabPane>
          <TabPane tab="微信社群资源" key="4">
            微信社群资源
          </TabPane>
          <TabPane tab="QQ空间" key="5">
            QQ空间
          </TabPane>
          <TabPane tab="QQ社群资源" key="6">
            QQ社群资源
          </TabPane>
          <TabPane tab="校园微博" key="7">
            校园微博
          </TabPane>
          <TabPane tab="校园BBS" key="8">
            校园BBS
          </TabPane>
          <TabPane tab="就业网" key="9">
            就业网
          </TabPane>
          <TabPane tab="朋友圈广告" key="10">
            朋友圈广告
          </TabPane>
          <TabPane tab="线下宣传" key="11">
            线下宣传
          </TabPane>
          <TabPane tab="灯箱" key="12">
            灯箱
          </TabPane>
          <TabPane tab="围栏" key="13">
            围栏
          </TabPane>
          <TabPane tab="桌贴" key="14">
            桌贴
          </TabPane>
          <TabPane tab="框架" key="15">
            框架
          </TabPane>
          <TabPane tab="终端机" key="16">
            终端机
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Feedback;
