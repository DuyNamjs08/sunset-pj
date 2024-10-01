/* eslint-disable react/prop-types */

import { Drawer } from "antd";

const DrawerComponent = ({ onClose, open }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={open}
      key={"left"}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerComponent;
