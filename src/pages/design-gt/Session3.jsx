// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/stock-photo-solar-power-station-photovoltaics.png";
import bgSession2 from "./assets/stock-photo-chinese-workers-check-solar-panels-photovoltaic-power-plant-zaozhuang-city.jpeg";
const companyInfo = [
  {
    title: "Tên công ty",
    value: "Công ty TNHH Năng lượng xanh Hải Đăng Solar",
  },
  {
    title: "Mã số thuế",
    value: "0110863224",
  },
  {
    title: "Trụ sở công ty",
    value: "Số 10 Bà Triệu, quận Hà Đông, TP.Hà Nội",
  },
  {
    title: "Đại lý bảo hành 1",
    value: "77-79 Lê Quý Đôn, phường Chí Minh, TP.Chí Linh, tỉnh Hải Dương",
  },
  {
    title: "Đại lý bảo hành 2",
    value:
      "Số nhà 42, TDP Đông Bình, thị trấn Rạng Đông, huyện Nghĩa Hưng, tỉnh Nam Định",
  },
];
const contactInfo = [
  {
    title: "ĐT",
    value: "0928.199.686 - 034.330.6668",
  },
  {
    title: "Websites",
    value: "haidangsolar.vn",
  },
  {
    title: "Email",
    value: "Congtytnhhhaidangsolar@gmail.com",
  },
  {
    title: "Ngành nghề kinh doanh chính",
    value:
      "Cung cấp vật tư, tư vấn, thi công và bảo trì các hệ thống điện năng lượng mặt trời và giải pháp năng lượng xanh.",
  },
];

const Session3 = () => {
  return (
    <Session3Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="slide"></div>
            <div className="imag-slide">
              <img src={bgSession2} alt="bgSession2" />
            </div>
            {/* phần đầu */}
            <div className="up">
              <div className="up-main">
                <h2>THÔNG TIN PHÁP LÝ</h2>
                <div className="content-main">
                  <div className="content-left">
                    {companyInfo.map((item, index) => (
                      <p key={index}>
                        <strong>{item.title}:</strong> {item.value}
                      </p>
                    ))}
                  </div>
                  <div className="content-right">
                    {contactInfo.map((item, index) => (
                      <p key={index}>
                        <strong>{item.title}:</strong> {item.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* phần sau  */}
            <div className="down">
              <div className="down-main">
                <div className="group">
                  <h2>QUÁ TRÌNH HÌNH THÀNH</h2>
                  <h2>& PHÁT TRIỂN</h2>
                </div>
                <div className="content-main">
                  <div className="content-left">
                    <p>
                      Công ty TNHH Năng lượng xanh Hải Đăng Solar đã từng bước
                      khẳng định vị thế là một trong những đơn vị tiên phong
                      trong lĩnh vực năng lượng tái tạo tại Việt Nam
                    </p>
                  </div>
                  <div className="content-right">
                    <p>
                      Ban đầu, công ty tập trung cung cấp thiết bị và giải pháp
                      cho các dự án năng lượng mặt trời nhỏ lẻ.{" "}
                    </p>
                    <p>
                      Sau đó, với sự nỗ lực không ngừng, Hải Đăng Solar đã mở
                      rộng quy mô hoạt động, trở thành đối tác tin cậy của nhiều
                      khách hàng cá nhân, doanh nghiệp và các tổ chức lớn trên
                      toàn quốc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session3Style>
  );
};
const Session3Style = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .session1-style {
    height: 100vh;
    margin-top: 40px;
  }
  .content {
    height: 100%;
    width: 100%;
    background: url(${(props) => props.bgSession1}) no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .slide {
    position: absolute;
    width: 20px;
    height: 100vh;
    background: #17a15b;
    top: 0;
    right: 0;
  }
  .imag-slide {
    position: absolute;
    width: 400px;
    height: 200px;
    top: 45%;
    right: 0;
    z-index: 1;
  }
  .imag-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  .up {
    flex: 1;
    background-color: #111d3d;
    color: #fff;
  }
  .up-main {
    padding: 50px 60px 0;
  }
  .up-main h2 {
    font-size: 40px;
    font-weight: bold;
    padding-left: 20px;
    border-left: solid 4px #fff;
    margin-bottom: 20px;
  }
  .content-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
  .content-main p {
    color: #fffafc;
  }
  .content-main strong {
    color: #17a15b;
  }
  .down {
    flex: 1;
    background-color: #fff;
  }
  .down {
    position: relative;
  }
  .down::before {
    position: absolute;
    content: "";
    width: 50%;
    height: 20px;
    left: 25%;
    bottom: 0;
    bottom: 0;
    background: #111d3d;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .down-main {
    padding: 50px 60px 0;
  }
  .down-main h2 {
    font-size: 40px;
    font-weight: bold;
    padding-left: 20px;
    color: #17a15b;
    border-left: solid 4px #17a15b;
  }
  .down-main .content-main {
    margin-top: 40px;
  }
  .down-main .content-main p {
    color: #000;
  }
  .down-main .content-left {
    padding: 40px;
    background-color: #17a15b;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .down-main .content-left p {
    color: #fff;
  }
  .down-main .content-right p {
    margin-bottom: 10px;
    color: #111d3d;
  }
  @media (max-width: 768px) {
    .session1-style {
      height: auto;
    }
    .up-main {
      padding: 20px;
    }
    .down-main {
      padding: 20px;
    }
    .down-main h2 {
      font-size: 20px;
    }
    .up-main h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }
    .down::before {
      display: none;
    }
    .imag-slide img {
      display: none;
    }
    .content-main {
      display: block;
    }
    .content-left p {
      font-size: 14px;
    }
    .content-right p {
      font-size: 14px;
    }
    .content-right {
      margin-top: 10px;
    }
    .down-main .content-main {
      margin-top: 10px;
    }
  }
`;
export default Session3;
