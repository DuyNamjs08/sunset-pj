import styled from "styled-components";
import bg from "../../assets/bg_01.png";
import Button1 from "../button/Button1";
import { FaPlay } from "react-icons/fa";
import img from "../../assets/gioi-thieu01.png";
const IntroSession1 = () => {
  return (
    <IntroSession1Style bg={bg}>
      <section className="site-about">
        <div className="container">
          <div className="row max-md:flex-col-reverse">
            <div className="col-md-6">
              <div className="site-about__content">
                <div className="title">
                  <span className="title__slogan wow fadeInDown">
                    CHÚNG TÔI LÀ Hải Đăng Solar Energy - ĐIỆN NĂNG LƯỢNG MẶT
                    TRỜI
                  </span>
                  <h2
                    className="title__heading wow fadeInDown"
                    data-wow-delay=".1s"
                  >
                    Công Ty Điện Năng Lượng Mặt Trời Uy Tín
                  </h2>
                </div>
                <div className="des">
                  <p style={{ textAlign: "justify" }}>
                    <span className="text-[#fa9538]">
                      Hải Đăng Solar Energy
                    </span>{" "}
                    cung cấp Giải pháp Điện Năng lượng Mặt Trời có kinh nghiệm
                    và Uy tín lâu năm nhất kể từ 2012, đảm bảo cung cấp cho
                    Khách hàng trọn bộ giải pháp và sản phẩm điện mặt trời chất
                    lượng cao nhất (Tấm pin SU-Series, Panasonic, LG, SMA,…),
                    đội ngũ kỹ thuật chuyên nghiệp của chúng tôi luôn làm khách
                    hàng hài lòng bởi kết quả sản phẩm cuối cùng khi bàn giao đi
                    kèm với chế độ bảo hành sau bán hàng tốt nhất hiện nay.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      Chuyên gia tư vấn và lắp đặt Hệ thống Điện năng lượng Mặt
                      Trời hòa lưới áp mái hàng đầu Việt Nam
                    </strong>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Đội ngũ nhân sự và kỹ sư thông minh, giàu kinh nghiệm của
                    <span className="text-[#fa9538] ml-2">
                      Hải Đăng Solar Energy
                    </span>{" "}
                    đã trực tiếp tham gia rất nhiều công trình hộ gia đình và
                    doanh nghiệp với đa dạng phong cách kiến trúc, kết cấu và
                    hoàn cảnh thi công. Mỗi công trình chúng tôi luôn đặt mục
                    tiêu tối ưu hóa lợi ích sử dụng Điện mặt trời, thời gian
                    hoàn vốn nhanh chóng cũng như tăng hiệu quả thẩm mỹ cho công
                    trình bởi sự hiện đại, tiên tiến của những tấm pin năng
                    lượng mặt trời.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      Thêm bảo vệ cho Công trình của bạn – Thêm năng lượng tích
                      cực – Hãy liên hệ với chúng tôi
                      <em>&nbsp;ngay hôm nay !</em>
                    </strong>
                  </p>
                  <p>
                    Công ty Cổ phần{" "}
                    <span className="text-[#fa9538]">
                      Hải Đăng Solar Energy
                    </span>
                    :
                  </p>
                  <p>
                    Địa chỉ: 168/1 Hào Nam, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội
                  </p>
                  <p>Số điện thoại: 0946868498 – 0943968848 – 0826889489</p>
                  <p>
                    Email: dienmattroi@gmail.com / vietanh@gmail.com /
                    ngocnam@gmail.com
                  </p>
                  <p>Mã số thuế: 0105994863 cấp ngày 21/09/2012 tại Hà Nội.</p>
                </div>
                <Button1 className="border-blue" label="Xem thêm" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="site-about__images wow fadeInRight">
                <img className="w-100 d-block" src={img} alt="img" />
                <a
                  data-fancybox
                  className="play-video"
                  href="https://www.youtube.com/watch?v=x3_FFZUj_70"
                >
                  <span className="play">
                    <FaPlay />
                  </span>
                  <span>Xem chúng tôi làm việc</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IntroSession1Style>
  );
};
const IntroSession1Style = styled.div`
  .site-about {
    background: url(${(props) => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 60px 0;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .title {
    margin-bottom: 30px;
  }
  .title__slogan {
    display: inline-block;
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
    color: var(--color-gray);
  }
  .des {
    padding-bottom: 15px;
  }
  .site-about .des p {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 15px;
  }
  .site-about__images .play-video .play {
    width: 70px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
    color: #fff;
    background: #abd660;
  }
  .play-video {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    margin-top: -70px;
  }
  @media (max-width: 768px) {
    .col-md-6 {
      max-width: 100%;
    }
    .row {
      gap: 20px;
    }
    .play-video {
      margin-top: 25px;
    }
  }
`;

export default IntroSession1;
