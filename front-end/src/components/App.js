import React from "react";
import { ppx } from "@/api/api";
import Menu from "./layout/Menu";
import MyHeader from "./layout/Header";
import MainContent from "./layout/MainContent";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      height: 0
    };
  }
  componentDidMount() {
    let h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight - 54;
    this.setState({ height: h });
    ppx({}).then(data => {
      console.log(data);
    });
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    let height = this.state.height;
    return (
      <div className="App">
        {" "}
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu collapsed={this.state.collapsed} height={height}></Menu>
          </Sider>
          <div className="h-m-content">
            <Layout>
              <MyHeader
                toggleCollapsed={this.toggleCollapsed}
                collapsed={this.state.collapsed}
                height={height}
              ></MyHeader>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                <MainContent height={height}></MainContent>{" "}
              </Content>
            </Layout>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
