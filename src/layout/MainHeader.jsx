/* eslint-disable react/prop-types */
import {
  FaAngleDown,
  FaBars,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { headerLinks } from "../constant/header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/hải đăng.png";
import { useEffect, useState } from "react";

const MainHeader = ({ onclick }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`header ${
        isFixed ? "fixed w-full bg-[#fff] shadow-lg top-0 z-[10] " : ""
      }`}
    >
      <div className="container  mx-[auto]">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex justify-between items-center w-full px-4 md:px-0">
            <div
              onClick={onclick}
              className="block md:hidden text-[20px] cursor-pointer"
            >
              <FaBars />
            </div>
            <div className="logo">
              <Link
                href="/"
                title="Điện năng lượng mặt trời, điện mặt trời, sunemit"
              >
                <img
                  className=" w-[80px] h-[60px] mb-4 md:mb-0 md:w-[230px]"
                  src={logo}
                  alt="logo"
                  title="logo"
                />
              </Link>
            </div>
            <div className="block md:hidden text-[20px] cursor-pointer">
              <FaCartShopping />
            </div>
          </div>
          <div className="hidden md:block w-[80%] ">
            <div className="flex gap-5 items-center">
              <div className="address">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[30px] text-[#093]" />
                  168/1 Hào Nam, P. Ô Chợ Dừa,
                  <br /> Q. Đống Đa, Hà Nội
                </span>
              </div>
              <div className="phone">
                <div className="text">
                  <a
                    className="flex items-center gap-2 text-[28px] text-[#abd660]"
                    href="tel:094 6868 498"
                    title="phone"
                  >
                    <FaPhoneAlt className="" />
                    <div>
                      <div className=" leading-6 ">094 6868 498</div>
                      <span className="block text-[14px] text-[#000]">
                        Hotline
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav className="hidden md:block">
          <MenuList>
            {headerLinks.map((link, index) => (
              <MenuItem key={index + 10}>
                <StyledLink to={link.url}>
                  {link.text} {link.subMenu && <FaAngleDown />}
                </StyledLink>
                {link.subMenu && (
                  <ul className="submenu">
                    {link.subMenu.map((subLink, subIndex) => (
                      <SubMenuItem key={subIndex}>
                        <StyledLink to={subLink.url}>{subLink.text}</StyledLink>
                      </SubMenuItem>
                    ))}
                  </ul>
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Nav>
      </div>
    </section>
  );
};
const Nav = styled.nav``;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  &:hover {
    color: #093;
  }
  ul {
    width: 300px;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    color: white;
    background-color: #444;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 1;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 0 5px #ccc;
  }
  ul:after {
    content: "";
    position: absolute;
    top: -12px;
    left: 20px;
    z-index: 1;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #444;
    transform: rotate(180deg);
  }

  &:hover ul {
    display: block;
  }
`;
const SubMenuItem = styled.li`
  padding: 10px;
  &:hover {
    background-color: #555;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 2px;
  &:hover {
  }
`;

export default MainHeader;
