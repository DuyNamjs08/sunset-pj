// import styled from "styled-components";
import Banner from "../../components/banner/Banner";
// import ListItem1 from "../../components/danh-sach-san-pham/ListItem1";
// import IntroSession1 from "../../components/gioi-thieu/IntroSession1";
// import Button1 from "../../components/button/Button1";
import Achivement from "../../components/thanh-tuu";
import ListPj1 from "../../components/danh-sach-pj/ListPj1";
import Slide1 from "../../components/slide/Slide1";
import PartnerSlider from "../../components/slide/Slide2";
import SessionHilight from "../../components/hightLight/SessionHilight";
import Advance from "../../components/loi-khuyen/Advance";
// import { useNavigate } from "react-router-dom";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { useBanner } from "../../useQuery/useBanner";
import Session1 from "../design-gt/Session1";
import Session2 from "../design-gt/Session2";
import Session3 from "../design-gt/Session3";
import Session4 from "../design-gt/Session4";
import Session5 from "../design-gt/Session5";
import { useCategory } from "../../useQuery/useCategory";
import { useProduct1 } from "../../useQuery/useProducts";
import Slider from "react-slick";
import ProductItem from "../../components/productItem/ProductItem";
// import DropBlock from "../../components/drop/DropBlock";

const Home = () => {
  // const navigate = useNavigate();

  const { isLoading, data: dataBanner } = useBanner();
  const { data: dataCategory } = useCategory();
  const { data: dataListproduct } = useProduct1({
    offset: 0,
    limit: 20,
    productName: "",
    category_id: dataCategory?.data?.[0],
  });
  const { data: dataListproduct1 } = useProduct1({
    offset: 0,
    limit: 20,
    productName: "",
    category_id: dataCategory?.data?.[3],
  });
  console.log(dataCategory);
  console.log("dataListproduct", dataListproduct);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* <DropBlock /> */}
      <Banner data={dataBanner?.[0]?.image?.split(",")} />
      {/* <StyleBanner>
        <div className="container mx-auto">
          <div className="flex items-center gap-[30px]">
            <h2>
              Hải Đăng Solar Energy cung cấp Giải pháp Điện mặt trời hoàn hảo
              cho mọi công trình
            </h2>
            <Button1
              className={"btn-contact"}
              onClick={() => navigate("lien-he/")}
              label={"Liên hệ ngay"}
            />
          </div>
        </div>
      </StyleBanner> */}
      {/* <ListItem1 /> */}
      {/* <IntroSession1 /> */}
      <Session1 />
      <div className="md:py-[20px] container">
        <h3 className="mb-[10px] md:mb-[30px] text-[36px] font-bold text-[#2b3152] release-pd">
          {dataCategory?.data?.[0]?.name}
        </h3>
        <Slider {...settings}>
          {dataListproduct?.data &&
            dataListproduct?.data?.length > 0 &&
            dataListproduct?.data?.map((item) => (
              <div className="px-2 md:px-5" key={item._id}>
                <ProductItem data={item} />
              </div>
            ))}
        </Slider>
      </div>
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <div className="md:py-[20px] container">
        <h3 className="mb-[10px] md:mb-[30px] text-[36px] font-bold text-[#2b3152] release-pd">
          {dataCategory?.data?.[3]?.name}
        </h3>
        <Slider {...settings}>
          {dataListproduct1?.data &&
            dataListproduct1?.data?.length > 0 &&
            dataListproduct1?.data?.map((item) => (
              <div className="px-2 md:px-5" key={item._id}>
                <ProductItem data={item} />
              </div>
            ))}
        </Slider>
      </div>
      <Achivement />
      <ListPj1 />
      <Slide1 />
      <PartnerSlider />
      <SessionHilight />
      <Advance />
      <CommonLoadingModal isLoadingModalOpen={isLoading} />
    </div>
  );
};
// const StyleBanner = styled.div`
//   background: linear-gradient(45deg, #80cc99, #009933);
//   min-height: 180px;
//   display: flex;
//   align-items: center;

//   h2 {
//     font-size: 36px;
//     color: #fff;
//     font-weight: 700;
//   }

//   @media (max-width: 768px) {
//     h2 {
//       font-size: 20px;
//       color: #fff;
//       font-weight: 700;
//     }
//     .btn-contact {
//       min-width: 120px;
//       height: 40px;
//       padding: 0;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }
// `;

export default Home;
