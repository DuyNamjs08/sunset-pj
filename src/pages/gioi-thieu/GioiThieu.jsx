import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
// import GioiThieu2 from "../../components/gioi-thieu/GioiThieu2";
import Achivement from "../../components/thanh-tuu";
import GioiThieu3 from "../../components/gioi-thieu/GioiThieu3";
import GioiThieu4 from "../../components/gioi-thieu/GioiThieu4";
import { ProjectStyle } from "../du-an";
import ListPj2 from "../../components/danh-sach-pj/ListPj2";
import PartnerSlider from "../../components/slide/Slide2";
import Advance from "../../components/loi-khuyen/Advance";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { useFinish } from "../../useQuery/useProject";
import Session1 from "../design-gt/Session1";
import Session2 from "../design-gt/Session2";
import Session3 from "../design-gt/Session3";
import Session4 from "../design-gt/Session4";
import Session5 from "../design-gt/Session5";
// import Motion from "../../components/motion";

const GioiThieu = () => {
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Hải Đăng Solar Energy – Giải pháp hàng đầu về Điện Mặt Trời",
      path: "",
    },
  ];
  const { data, isLoading } = useFinish();
  return (
    <GioiThieuStyle>
      <BreadCum data={breadcrumbItems} />
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      {/* <GioiThieu2 /> */}
      <Achivement />
      <GioiThieu3 />
      <GioiThieu4 />
      <ProjectStyle>
        <div className="title container">
          <span className="title__slogan" />
          <h2 className="title__heading">Dự án mới cập nhật</h2>
          <p className="title__des">
            Hải Đăng Solar Energy luôn cam kết tạo ra giá trị cao nhất cho khách
            hàng từ những sản phẩm với chất lượng tốt nhất. Mỗi công trình Hải
            Đăng Solar Energy thi công luôn đáp ứng mọi yêu cầu kỹ thuật cao
            nhất, đạt hiệu quả thẩm mỹ ấn tượng từ dân dụng (&lt;200Kwp) tới Quy
            mô công nghiệp (&gt;1Mwp) .
          </p>
        </div>
        <ListPj2 data={data?.slice(0, 4)} />
      </ProjectStyle>
      <Advance />
      <PartnerSlider />
      <CommonLoadingModal isLoadingModalOpen={isLoading} />
    </GioiThieuStyle>
  );
};
const GioiThieuStyle = styled.div`
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
export default GioiThieu;
// const listIten = [
//   {
//     id: 1,
//     imageSrc: "https://Hải Đăng Solar Energy.com/wp-content/uploads/2020/09/da3.jpg",
//     title: "Tấm Pin Mặt Trời Hiệu Suất Cao",
//     description:
//       "Những tấm pin mặt trời hiệu suất cao là xương sống của một Hệ thống Điện Mặt Trời. Nó quyết định sự hoạt động bền bỉ, sinh điện liên tục trong 30 năm, phục vụ bạn và gia đình bằng nguồn năng lượng sạch từ thiên nhiên.",
//   },
//   {
//     id: 2,
//     imageSrc:
//       "https://Hải Đăng Solar Energy.com/wp-content/uploads/2018/05/sunny-boy-wall-e1603188446349.jpg",
//     title: "Inverter - Trái tim của Hệ thống",
//     description:
//       "Inverter Điện Mặt Trời do Hải Đăng Solar Energy cung cấp luôn được đánh giá cao bởi hiệu suất chuyển đổi điện tuyệt vời, cấu hình mạnh mẽ, hoạt động êm ái, thiết kế sang trọng làm tăng thêm thẩm mỹ cho những ngôi nhà sở hữu Hệ thống Điện Mặt Trời Cao Cấp.",
//   },
//   {
//     id: 3,
//     imageSrc:
//       "https://Hải Đăng Solar Energy.com/wp-content/uploads/2020/09/22222-1-scaled-1-e1603188143839.jpg",
//     title: "Giải pháp đồng bộ",
//     description:
//       "Hải Đăng Solar Energy là Chuyên gia Uy tín hàng đầu về Điện Mặt Trời trong việc cung cấp các giải pháp đồng bộ đến Khách hàng sử dụng cuối...",
//   },
//   {
//     id: 4,
//     imageSrc:
//       "https://Hải Đăng Solar Energy.com/wp-content/uploads/2020/09/dien-mat-troi-noi-luoi-1.png",
//     title: "Điện Mặt Trời Hòa lưới",
//     description:
//       "Giải pháp Điện Mặt Trời Hòa lưới là tối ưu về chi phí và hiệu quả hoạt động cho những hộ gia đình tại Việt Nam hiện nay.",
//   },
//   {
//     id: 5,
//     imageSrc:
//       "https://Hải Đăng Solar Energy.com/wp-content/uploads/2020/09/giai-phap-dien-mat-troi-luu-tru-vietcotek-energy-1-840x424-1.png",
//     title: "Điện Mặt Trời Hòa lưới có Lưu trữ",
//     description:
//       "Điện mặt trời hòa lưới có lưu trữ thích hợp sử dụng cho khu vực thường xuyên mất điện lưới, hoặc điện lưới không ổn định...",
//   },
// ];
