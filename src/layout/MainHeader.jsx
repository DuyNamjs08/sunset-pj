/* eslint-disable react/prop-types */
import {
  FaAngleDown,
  FaBars,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import logo from "../assets/hải đăng.png";
import { useEffect, useState } from "react";
// import logo from "../assets/hải đăng.png";
import { useSelector } from "react-redux";
import { useCategory } from "../useQuery/useUser";
// import slugify from "slugify";
import BadgeCmp from "../components/badge/BadgeCmp";
// const removeAccents = (str) => {
//   return str
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/đ/g, "d")
//     .replace(/Đ/g, "D");
// };
const MainHeader = ({ onclick }) => {
  const data = useSelector((state) => state.home.dataProfile);
  const { data: dataCategory } = useCategory();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerLinks = [
    { text: "Trang chủ", url: "/" },
    { text: "Giới thiệu", url: "/cong-ty-dien-mat-troi-uy-tin/" },
    {
      text: "Sản phẩm",
      url: "/san-pham/",
      subMenu:
        dataCategory?.data && dataCategory?.data?.length > 0
          ? dataCategory?.data?.map((item) => {
              // return {
              //   text: item.name,
              //   url: `/${slugify(removeAccents(item.name), {
              //     lower: true,
              //     replacement: "-",
              //     remove: /[*+~.()'"!:@]/g,
              //   })}?category_id=${item._id}`,
              // };
              return {
                text: item.name,
                url: `/san-pham?limit=5&offset=0&category_id=${item._id}`,
              };
            })
          : [],
    },
    {
      text: "Dịch vụ",
      url: "/dich-vu",
      subMenu: [
        {
          text: "Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói",
          url: "/dich-vu-lap-dat-he-thong-dien-nang-luong-mat-troi-tron-goi/",
        },
        {
          text: "Dịch vụ vận hành và bảo trì hệ thống điện mặt trời trọn gói",
          url: "/dich-vu-van-hanh-va-bao-tri-he-thong-dien-mat-troi-tron-goi/",
        },
        {
          text: "Dịch vụ vệ sinh tấm pin năng lượng mặt trời trọn gói",
          url: "/dich-vu-ve-sinh-tam-pin-nang-luong-mat-troi-tron-goi/",
        },
      ],
    },
    { text: "Dự án đã làm", url: "/du-an" },
    {
      text: "Câu hỏi thường gặp",
      url: "/nhung-cau-hoi-thuong-gap-ve-he-thong-dien-nang-luong-mat-troi/",
    },
    {
      text: "Tin tức",
      url: "/tin-tuc-dien-mat-troi/",
      subMenu: [
        { text: "Tin tức Điện mặt trời", url: "/tin-tuc-dien-mat-troi/" },
        { text: "Chuyên Mục Xe Điện", url: "/chuyen-muc-xe-dien/" },
        { text: "Kiến thức hữu ích", url: "/kien-thuc-huu-ich/" },
      ],
    },
    { text: "Liên hệ", url: "/lien-he/" },
    { text: "Đặt lịch khảo sát", url: "/dat-lich-khao-sat/" },
  ];
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
              <Link href="/">
                <img
                  className=" w-[100px] mb-4 md:mb-0 md:w-[230px]"
                  src={data?.image}
                  alt="logo"
                  title="logo"
                />
              </Link>
            </div>
            <div className="block md:hidden text-[20px] cursor-pointer">
              <BadgeCmp />
            </div>
          </div>
          <div className="hidden md:block w-[80%] ">
            <div className="flex gap-5 items-center">
              <div className="address">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[30px] text-[#093]" />
                  {data?.address}
                </span>
              </div>
              <div className="phone">
                <div className="text">
                  <a
                    className="flex items-center gap-2 text-[28px] text-[#abd660]"
                    href={`tel:${data?.phone}`}
                    title="phone"
                  >
                    <FaPhoneAlt className="" />
                    {data?.phone}
                  </a>
                </div>
              </div>
              <div className="phone">
                <div className="text">
                  <BadgeCmp />
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
