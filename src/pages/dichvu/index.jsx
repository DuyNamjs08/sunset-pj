import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import Sidebar from "../../components/sideBar/SideBar";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import MucLuc from "../../components/menu/Menu";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const breadcrumbItems = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói",
    path: "",
  },
];
const Service = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    setIsFixed(window.scrollY > 208);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const markdownText = `
  Trong thời đại công nghệ số 4.0, việc học không còn bó buộc trong những cuốn sách truyền thống. Giờ đây, trí tuệ nhân tạo (AI) đang dần trở thành một trợ thủ đắc lực, giúp việc học trở nên hiệu quả và thú vị hơn.

  ![MG_0813.jpg](https://files.fullstack.edu.vn/f8-prod/blog_posts/11503/66fd03291e58f.jpg)
  *Đội thi đã xuất sắc giành giải Nhì trong cuộc thi Grand Final of Best Web Design 2024.*
  `;
  return (
    <ServiceStyle>
      <BreadCum data={breadcrumbItems} />
      <div className="container flex relative ">
        <div
          className={`w-1/4 p-4 bg-white transition-all duration-300 ease-in-out ${
            isFixed ? "sticky top-0 z-10 h-full" : ""
          }`}
        >
          <Sidebar />
        </div>
        <div className="w-3/4 p-4">
          <Thumbnail />
          <div className="title">
            <h1 className="title__heading">
              Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói
            </h1>
          </div>
          <MucLuc />
        </div>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
    </ServiceStyle>
  );
};

const ServiceStyle = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .title {
    margin-bottom: 30px;
  }
  .title__slogan {
    /* display: inline-block; */
    font-size: 14px;
    text-transform: uppercase;
    color: #2b3152;
    margin-bottom: 10px;
    padding-left: 60px;
    position: relative;
  }
  .title__slogan:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 1px;
    background: #093;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  .title__heading {
    font-size: 36px;
    font-weight: 700;
    color: #2b3152;
  }
  .title__des {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 0;
    margin-top: 20px;
    width: 80%;
  }
`;
export default Service;
