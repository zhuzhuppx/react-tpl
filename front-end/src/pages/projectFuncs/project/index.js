import React from "react";
import { Descriptions, Badge } from "antd";
import "./index.less";
class ProjectInfo extends React.Component {
  render() {
    return (
      <div>
        <Descriptions title="" size="small" bordered>
          <Descriptions.Item label="项目名称">
            中国电信2020夏季招聘
          </Descriptions.Item>
          <Descriptions.Item label="项目编号">CX201808160008</Descriptions.Item>
          <Descriptions.Item label="项目状态">立项提交</Descriptions.Item>

          <Descriptions.Item label="合同编号">CX201808160008</Descriptions.Item>
          <Descriptions.Item label="SO合同编号">
            CX201808160008
          </Descriptions.Item>
          <Descriptions.Item label="SO财务编号">
            CX201808160008
          </Descriptions.Item>
          <Descriptions.Item label="财务编号">CX201808160008</Descriptions.Item>
          <Descriptions.Item label="是否是海外项目">否</Descriptions.Item>
          <Descriptions.Item label="合同日期">
            2018-04-24 18:00:00~2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="客户名称">
            中国电信2020夏季招聘
          </Descriptions.Item>
          <Descriptions.Item label="入账分公司">
            网聘咨询北京分公司
          </Descriptions.Item>
          <Descriptions.Item label="销售姓名">朱思远</Descriptions.Item>
          <Descriptions.Item label="项目经理">王立军</Descriptions.Item>
          <Descriptions.Item label="签约金额(元)">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="预算利润率">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="预借款(元) ">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="已结项金额(元)">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="未结项金额(元)">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="预算金额(元)">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="剩余预算(元)">
            ￥60,000,000.00
          </Descriptions.Item>
          <Descriptions.Item label="已使用预算(元)">
            ￥60,000,000.00
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}
export default ProjectInfo;
