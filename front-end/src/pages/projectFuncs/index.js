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
// import Loadable from 'react-loadable';
import loadable from "@loadable/component";

const { Link } = Anchor;
const modules = [
  {
    title: "项目概述",
    component: './project',
    id: "ProjectInfo"
  },
  {
    title: "场地预定",
    component: './schedule',
    id: "Schedule"
  },
  {
    title: "面试官预定",
    component: './interviewer',
    id: "Interviewer"
  },
  {
    title: "宣传反馈",
    component: './feedback',
    id: "Feedback"
  },
  {
    title: "物流查询",
    component: './logistic',
    id: ""
  },
  {
    title: "满意度/NPS",
    component: './nps',
    id: "Nps"
  },
  {
    title: "财务管理",
    component: './finance',
    id: "Finance"
  },
  {
    title: "PD报销费用",
    component: './pdinvoice',
    id: "PDInvoice"
  }
];
const ErrorDisplay = ({ error }) => <div>Oups! {error.message}</div>

const LoadableComponent = path=> loadable(() => import(path), {
    ErrorComponent: ErrorDisplay,
  })
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
            <div id={m.id} className="func-list-item">
              <div className="func-card">
                <div className="title">
                  <span>{m.title}</span>
                </div>
                <div className="content">
                  {/* <ProjectInfo></ProjectInfo> */}
                  <LoadableComponent path={m.component}></LoadableComponent>
                </div>
              </div>
            </div>
          ))}
          <div id="ProjectInfo" className="func-list-item">
            <div className="func-card">
              <div className="title">
                <span>项目概述</span>
              </div>
              <div className="content">
                <ProjectInfo></ProjectInfo>
              </div>
            </div>
          </div>
          <div id="Schedule" className="func-list-item">
            <div className="func-card">
              <div className="title">场地预定</div>
              <div className="content">
                <Schedule></Schedule>
              </div>
            </div>
          </div>
          <div id="Interviewer" className="func-list-item">
            <div className="func-card">
              <div className="title">面试官预定</div>
              <div className="content">
                <Interviewer></Interviewer>
              </div>
            </div>
          </div>
          <div id="Feedback" className="func-list-item">
            <div className="func-card">
              <div className="title">宣传反馈</div>
              <div className="content">
                <Feedback></Feedback>
              </div>
            </div>
          </div>
          <div id="Logistic" className="func-list-item">
            <div className="func-card">
              <div className="title">物流查询</div>
              <div className="content">
                <Logistic></Logistic>
              </div>
            </div>
          </div>
          <div id="Nps" className="func-list-item">
            <div className="func-card">
              <div className="title">满意度/NPS</div>
              <div className="content">
                <Nps></Nps>
              </div>
            </div>
          </div>
          <div id="Finance" className="func-list-item">
            <div className="func-card">
              <div className="title">财务管理</div>
              <div className="content">
                <Finance></Finance>
              </div>
            </div>
          </div>
          <div id="PDInvoice" className="func-list-item">
            <div className="func-card">
              <div className="title">PD报销费用</div>
              <div className="content">
                <PDInvoice></PDInvoice>
              </div>
            </div>
          </div>
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
