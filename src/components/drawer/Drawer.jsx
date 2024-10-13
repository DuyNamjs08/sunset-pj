/* eslint-disable react/prop-types */

import { Drawer } from "antd";
import IconClose from "../../Icon/Close";
import DrawerItem from "./DrawerItem";
import { useEffect, useState } from "react";
import { headerLinks } from "../../constant/header";
import IconChevronLeft from "../../Icon/Left";
import { useLocation } from "react-router-dom";
const DrawerComponent = ({ onClose, open, width = 280 }) => {
  const [OpenChildren, setOpenChildren] = useState(false);
  const [indexChildren, setIndexChildren] = useState(null);
  const location = useLocation();
  useEffect(() => {
    onClose();
    setIndexChildren(null);
    setOpenChildren(false);
  }, [location.pathname]);
  return (
    <>
      <Drawer
        title={
          <div className="flex justify-end  ">
            <IconClose color="#fff" />
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        width={width}
        key={"left"}
      >
        {headerLinks.map((item, index) => (
          <DrawerItem
            key={index}
            active={indexChildren === index ? true : false}
            showIcon={item?.subMenu?.length ? true : false}
            linkUrl={item.url}
            onClickShowChildren={() => {
              setOpenChildren(true);
              setIndexChildren(index);
            }}
            // onClick={() => onClose()}
          >
            {item.text}
          </DrawerItem>
        ))}
      </Drawer>
      <Drawer
        title={<div>Sản phẩm</div>}
        placement={"left"}
        closable={false}
        onClose={() => setOpenChildren(false)}
        open={OpenChildren}
        width={230}
        key={"left"}
      >
        <DrawerItem
          onClick={() => setOpenChildren(false)}
          key={100}
          icon={<IconChevronLeft />}
        >
          <div className="">Quay lại</div>
        </DrawerItem>
        {headerLinks[indexChildren]?.subMenu?.map(
          (itemChildren, indexChildren) => (
            <DrawerItem
              key={indexChildren}
              showIcon={false}
              linkUrl={itemChildren.url}
              // onClick={() => {
              //   setOpenChildren(false);
              //   onClose();
              //   setIndexChildren(null);
              // }}
            >
              {itemChildren.text}
            </DrawerItem>
          )
        )}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
