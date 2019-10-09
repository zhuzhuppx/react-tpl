import React from "react";
import { Avatar } from "antd";

class MyAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: { name: "ppx" } };
  }
  render() {
    return (
      <Avatar
        style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
        size="large"
      >
        {this.state.user.name}
      </Avatar>
    );
  }
}
export default MyAvatar;
