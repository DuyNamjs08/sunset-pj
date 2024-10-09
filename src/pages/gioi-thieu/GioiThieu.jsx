import styled from "styled-components";
import BreadCum from "../../components/bread-cum/BreadCum";
import GioiThieu2 from "../../components/gioi-thieu/GioiThieu2";
import Achivement from "../../components/thanh-tuu";
import GioiThieu3 from "../../components/gioi-thieu/GioiThieu3";
import Motion from "../../components/motion";

const GioiThieu = () => {
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "SUNEMIT – Giải pháp hàng đầu về Điện Mặt Trời",
      path: "",
    },
  ];
  return (
    <GioiThieuStyle>
      <BreadCum data={breadcrumbItems} />
      <GioiThieu2 />
      <Achivement />
      <GioiThieu3 />
      <Motion />
    </GioiThieuStyle>
  );
};
const GioiThieuStyle = styled.div``;
export default GioiThieu;
