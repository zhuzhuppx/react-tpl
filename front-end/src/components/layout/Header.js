import React from "react";
import { Icon, Button, Layout } from "antd";
const { Header } = Layout;
class MyHeader extends React.Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.props.toggleCollapsed}
        />
      </Header>
    );
  }
}
export default MyHeader;
