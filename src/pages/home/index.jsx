import styled from "styled-components";
import Banner from "../../components/banner/Banner";

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
            <a
              className="btn-custom border-white"
              href="https://sunemit.com/lien-he/"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </StyleBanner>
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
  a {
    width: max-content;
    height: 60px;
    min-width: 210px;
    font-size: 16px;
    color: #fff;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    border: 1px solid #fff;
    &:hover {
      background: #093;
    }
  }
`;

export default Home;
