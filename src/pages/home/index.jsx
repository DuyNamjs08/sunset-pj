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
import { useNavigate } from "react-router-dom";
import { useInformation } from "../../useQuery/useInformation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveDataProfile } from "../../feature/homeSlice";
import { CommonLoadingModal } from "../../components/model/LoadingModel";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading: isloadingProfile } = useInformation();
  useEffect(() => {
    if (data) {
      dispatch(saveDataProfile(data?.[0]));
    }
  }, [data]);
  return (
    <div>
      <Banner />
      <StyleBanner>
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
      </StyleBanner>
      <ListItem1 />
      <IntroSession1 />
      <Achivement />
      <ListPj1 />
      <Slide1 />
      <PartnerSlider />
      <SessionHilight />
      <Advance />
      <CommonLoadingModal isLoadingModalOpen={isloadingProfile} />
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

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
      color: #fff;
      font-weight: 700;
    }
    .btn-contact {
      min-width: 120px;
      height: 40px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Home;
