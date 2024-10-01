import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import ListItem1 from "../../components/danh-sach-san-pham/ListItem1";
import IntroSession1 from "../../components/gioi-thieu/IntroSession1";
import Button1 from "../../components/button/Button1";
import Achivement from "../../components/thanh-tuu";
import ListPj1 from "../../components/danh-sach-pj/ListPj1";
import Slide1 from "../../components/slide/Slide1";
import PartnerSlider from "../../components/slide/Slide2";
import SessionHilight from "../../components/hightLight/SessionHilight";
import Advance from "../../components/loi-khuyen/Advance";

const Home = () => {
  return (
    <div>
      <Banner />
      <StyleBanner>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[30px]">
            <h2>
              SUNEMIT cung cấp Giải pháp Điện mặt trời hoàn hảo cho mọi công
              trình
            </h2>
            <Button1 label={"Liên hệ ngay"} />
          </div>
        </div>
      </StyleBanner>
      <ListItem1 />
      <IntroSession1 />
      <Achivement />
      <ListPj1 />
      <Slide1 />
      <PartnerSlider />
      <SessionHilight />
      <Advance />
    </div>
  );
};
const StyleBanner = styled.div`
  background: linear-gradient(45deg, #80cc99, #009933);
  min-height: 180px;
  display: flex;
  align-items: center;
  h2 {
    font-size: 36px;
    color: #fff;
    font-weight: 700;
  }
`;

export default Home;
