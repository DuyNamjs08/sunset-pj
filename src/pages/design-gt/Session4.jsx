// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/stock-photo-solar-power-station-photovoltaics.png";
import bgSession2 from "./assets/stock-photo-chinese-workers-check-solar-panels-photovoltaic-power-plant-zaozhuang-city.jpeg";

const services = [
  {
    title: "",
    description:
      "Hải Đăng Solar chuyên cung cấp các dịch vụ và giải pháp toàn diện trong lĩnh vực năng lượng mặt trời:",
  },
  {
    title: "Cung cấp vật tư, thiết bị năng lượng mặt trời",
    description:
      "Tấm pin năng lượng mặt trời, biến tần, khung giá đỡ và các phụ kiện đi kèm.",
  },
  {
    title: "Tư vấn và thiết kế hệ thống",
    description:
      "Đưa ra các giải pháp phù hợp với nhu cầu của từng khách hàng, tối ưu hóa chi phí và hiệu quả sử dụng.",
  },
  {
    title: "Thi công và lắp đặt",
    description:
      "Triển khai lắp đặt các hệ thống năng lượng mặt trời từ quy mô hộ gia đình đến các dự án lớn.",
  },
  {
    title: "Bảo hành và bảo trì",
    description:
      "Cung cấp dịch vụ hậu mãi uy tín, đảm bảo hệ thống vận hành ổn định và lâu dài.",
  },
];
const coreValues = [
  {
    title: "Chất lượng",
    description:
      "Cam kết mang đến sản phẩm và dịch vụ đạt tiêu chuẩn cao nhất.",
  },
  {
    title: "Đổi mới",
    description:
      "Không ngừng cải tiến công nghệ và giải pháp để đáp ứng nhu cầu thị trường.",
  },
  {
    title: "Tận tâm",
    description: "Lấy sự hài lòng của khách hàng làm mục tiêu hàng đầu.",
  },
  {
    title: "Bền vững",
    description: "Góp phần bảo vệ môi trường và phát triển cộng đồng.",
  },
];
const Session4 = () => {
  return (
    <Session4Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            {/* <div className="slide"></div> */}
            <div className="image-slide">
              <img src={bgSession2} alt="bgSession2" />
            </div>
            {/* phần đầu */}
            <div className="up">
              <div className="up-main">
                <div className="group">
                  <h2>LĨNH VỰC HOẠT ĐỘNG</h2>
                  <h2>TẦM NHÌN & GIÁ TRỊ CỐT LÕI</h2>
                </div>
              </div>
            </div>
            {/* phần sau  */}
            <div className="down">
              <div className="down-main">
                <div className="content-main">
                  <div className="content-down down-1">
                    <div className="down-title">
                      <div className="cirle">01</div>
                      <div>
                        <h3>LĨNH VỰC HOẠT ĐỘNG</h3>
                      </div>
                    </div>
                    <div className="down-des">
                      {services.map((item, index) => (
                        <p key={index}>
                          <strong>
                            {item.title}
                            {index === 0 ? `` : ":"}
                          </strong>{" "}
                          {item.description}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="content-down down-2">
                    <div className="down-title">
                      <div className="cirle">02</div>
                      <div>
                        <h3>TẦM NHÌN</h3>
                      </div>
                    </div>
                    <div className="down-des">
                      <p>
                        Hải Đăng Solar hướng đến trở thành doanh nghiệp hàng đầu
                        trong lĩnh vực năng lượng tái tạo tại Việt Nam, đóng góp
                        vào việc xây dựng một tương lai xanh, bền vững và thân
                        thiện với môi trường.
                      </p>
                    </div>
                  </div>
                  <div className="content-down down-2">
                    <div className="down-title">
                      <div className="cirle">03</div>
                      <div>
                        <h3>GIÁ TRỊ CỐT LÕI</h3>
                      </div>
                    </div>
                    <div className="down-des">
                      {coreValues.map((item, index) => (
                        <p key={index}>
                          <strong>{item.title}</strong> {item.description}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session4Style>
  );
};
const Session4Style = styled.div`
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
  .image-slide {
    position: absolute;
    width: 240px;
    height: 260px;
    top: 0;
    right: 8%;
    z-index: 1;
  }
  .image-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
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
  }
  .content-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .content-main p {
    color: #fffafc;
  }
  .content-main strong {
  }
  .down {
    flex: 3;
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
    padding: 50px 60px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  .down-1 {
    flex: 3;
  }
  .down-2 {
    flex: 2;
  }
  .down-title {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  .down-title .cirle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid #17a15b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #17a15b;
  }
  .down-title h3 {
    font-size: 30px;
    color: #17a15b;
    font-weight: bold;
  }
  .down-des {
    padding: 30px 40px;
    color: #fff;
    background: #17a15b;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    .session1-style {
      height: auto;
    }
    .image-slide img {
      display: none;
    }
    .up-main {
      padding: 20px;
    }
    .down-main {
      padding: 20px;
    }
    .up-main h2 {
      font-size: 20px;
    }
    .content-main {
      display: block;
    }
    .down-title {
      margin-bottom: 10px;
    }
    .down-title h3 {
      font-size: 18px;
    }
    .down-title .cirle {
      height: 30px;
      width: 30px;
      font-size: 14px;
    }
    .down-des {
      padding: 20px;
      margin-bottom: 10px;
    }
    .down-des p {
      font-size: 14px;
    }
    .down::before {
      width: 80%;
      height: 10px;
      left: 8%;
    }
  }
`;
export default Session4;
