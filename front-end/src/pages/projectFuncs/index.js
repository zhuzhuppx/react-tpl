import React from "react";
import { Anchor } from "antd";
import "./index.less";
import ProjectInfo from "./project";
import Schedule from "./schedule";
import Interviewer from "./interviewer";
import Feedback from "./feedback";
import Logistic from "./logistic";
import Nps from "./nps";
import Finance from "./finance";
import PDInvoice from "./pdinvoice";


const { Link } = Anchor;
const modules = [
  {
    title: "项目概述",
    component: ProjectInfo,
    id: "ProjectInfo"
  },
  {
    title: "场地预定",
    component: Schedule,
    id: "Schedule"
  },
  {
    title: "面试官预定",
    component: Interviewer,
    id: "Interviewer"
  },
  {
    title: "宣传反馈",
    component: Feedback,
    id: "Feedback"
  },
  {
    title: "物流查询",
    component: Logistic,
    id: ""
  },
  {
    title: "满意度/NPS",
    component: Nps,
    id: "Nps"
  },
  {
    title: "财务管理",
    component: Finance,
    id: "Finance"
  },
  {
    title: "PD报销费用",
    component: PDInvoice,
    id: "PDInvoice"
  }
];

const LoadComponent = MyCom=> {
    return <MyCom></MyCom>
}
class ProjectFunc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetOffset: undefined
    };
  }
  componentDidMount() {
    this.setState({
      targetOffset: window.innerHeight / 2
    });
  }
  render() {
    return (
      <div className="project-func-page">
        <div className="func-list">
          {modules.map(m => (
            <div key={m.id} id={m.id} className="func-list-item">
              <div className="func-card">
                <div className="title">
                  <span>{m.title}</span>
                </div>
                <div className="content">
                 {LoadComponent(m.component)}
                </div>
              </div>
            </div>
          ))}
         </div>
        <div className="navtor">
          <Anchor targetOffset={this.state.targetOffset}>
            <Link href="#ProjectInfo" title="项目概述" />
            <Link href="#Schedule" title="场地预定" />
            <Link href="#Interviewer" title="面试官预定" />
            <Link href="#Feedback" title="宣传反馈" />
            <Link href="#Logistic" title="物流查询" />
            <Link href="#Nps" title="满意度/NPS" />
            <Link href="#Finance" title="财务管理" />
            <Link href="#PDInvoice" title="PD报销费用" />
          </Anchor>
        </div>
      </div>
    );
  }
}
export default ProjectFunc;
