import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import Sidebar from "../../components/sideBar/SideBar";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import { useEffect, useState } from "react";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
// import HTMLReactParser from "html-react-parser/lib/index";
import { useFinish, useFinishId } from "../../useQuery/useProject";
import { StylePost } from "../../components/style";
import { decodeHtml, getFirstValidImage } from "../../helpers/common";
import parse from "html-react-parser";
import logoImg from "../../assets/hải đăng.png";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollToTopOnMount from "../../hooks/useScrollToTopOnMount";
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
const DuAnDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    setIsFixed(window.scrollY > 208);
  };
  useScrollToTopOnMount();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { data, isLoading } = useFinish();
  const {
    data: dataPostId,
    isLoading: loadingFinish,
    refetch,
  } = useFinishId(location.pathname.split("/")[2]);
  const handleClick = (id) => {
    navigate("/du-an/" + id);
    refetch();
  };

  return (
    <ServiceStyle>
      <BreadCum data={breadcrumbItems} />
      <div className="container flex relative ">
        <div
          className={`w-1/4 p-4 bg-white transition-all duration-300 ease-in-out ${
            isFixed ? "sticky top-0 z-10 h-full" : ""
          }`}
        >
          <Sidebar
            onClick={handleClick}
            data={
              data && data?.length > 0
                ? data.map((item) => {
                    return { text: item?.name, ...item };
                  })
                : []
            }
          />
        </div>
        <div className="w-3/4 p-4">
          <Thumbnail
            img={
              getFirstValidImage(dataPostId?.description)
                ? getFirstValidImage(dataPostId?.description)
                : dataPostId?.image?.split(",")?.[0]
                ? dataPostId?.image?.split(",")?.[0]
                : logoImg
            }
          />
          <StylePost>
            <div className="title text-[24px] font-bold my-8 text-[#3a589d]">
              {dataPostId?.name}
            </div>
            <div className="mt-6 description">
              {parse(decodeHtml(dataPostId?.description))}
            </div>
          </StylePost>
        </div>
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoading || loadingFinish} />
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
export default DuAnDetails;
