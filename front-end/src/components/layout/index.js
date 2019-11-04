import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, Icon } from "antd";
import Menu from "./Menu";
import Message from "./Message";
import Avatar from "./Avatar";
import { RouteWithSubRoutes } from "@/routes/helper.js";

const { Header, Sider, Content } = Layout;

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.routes);

    this.state = {
      collapsed: false,
      height: 0
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    let h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight - 54;
    this.setState({ height: h });
  }
  render() {
    let height = this.state.height;
    const routes = this.props.routes;
    return (
      <Layout className="App">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu></Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              style={{ paddingLeft: 16 }}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <span style={{ float: "right", marginRight: 16 }}>
              <span style={{ marginRight: 16 }}>
                <Message></Message>
              </span>
              <span>
                <Avatar></Avatar>
              </span>
            </span>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: height
            }}
          >
            <div className="main">
              <Switch>
                {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))}
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
