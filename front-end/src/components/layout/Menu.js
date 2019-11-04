import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import menuItems from "./menuItems";
const { SubMenu } = Menu;
const renderMenuItem = (item, key) => {
  if (item.hasChildren) {
    return (
      <SubMenu
        key={key}
        title={
          <span>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </span>
        }
      >
        {item.children.map((subItem, indexSub) => {
            return renderMenuItem(subItem,key+indexSub)
        })}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={key}>
      <Icon type={item.icon} />
      <span>
        <Link to={item.path}>{item.name}</Link>
      </span>
    </Menu.Item>
  );
};
class MyMenu extends React.Component {
  render() {
    let height = this.props.height;
    const style = {
      height: `${height}px`
    };
    return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        className="app-menu"
        style={style}
      >
        {menuItems.map((item, index) => {
          return renderMenuItem(item, index);
        })}      
      </Menu>
    );
  }
}
export default MyMenu;
