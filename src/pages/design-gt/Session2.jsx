// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/hai dang final-16.jpg";

const Session2 = () => {
  return (
    <Session2Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="slide"></div>
            <div className="content-main">
              <div className="message">
                <p>Kính gửi Quý khách hàng</p>
                <p>
                  Là đơn vị tiên phong trong lĩnh vực năng lượng mặt trời và
                  giải pháp năng lượng xanh, Hải Đăng Solar cam kết mang đến các
                  sản phẩm và dịch vụ chất lượng cao như cung cấp vật tư, tư
                  vấn, thi công lắp đặt và bảo trì hệ thống. Chúng tôi tự hào
                  đồng hành cùng Quý khách hàng trong hành trình tối ưu hóa chi
                  phí, nâng cao hiệu quả sử dụng và bảo vệ môi trường.
                </p>
                <p>
                  Với đội ngũ kỹ thuật viên chuyên nghiệp và tận tâm, Hải Đăng
                  Solar mang đến những giải pháp tiết kiệm và bền vững, góp phần
                  xây dựng tương lai xanh cho cộng đồng. Hải Đăng Solar – Thắp
                  sáng tương lai bền vững!
                </p>
                <p>Trân trọng,</p>
                <p>Công ty TNHH Năng lượng xanh Hải Đăng Solar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session2Style>
  );
};
const Session2Style = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .session1-style {
    height: 80vh;
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
    width: 200px;
    height: 75vh;
    background: #17a15b;
    top: 0;
    right: 0;
    border-bottom-left-radius: 100px;
  }
  .content-main {
    display: flex;
  }
  .message {
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding: 80px 80px 120px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-right: 20px solid #111d3d;
    position: relative;
    z-index: 1;
  }
  .message p:first-child,
  .message p:last-child {
    font-style: italic;
    font-weight: 600;
  }
  .message p {
    margin-top: 10px;
    color: #111d3d;
  }
  @media (max-width: 768px) {
    .message {
      padding: 30px 10px 60px;
      width: 100%;
      border-radius: unset;
    }
    .message p {
      margin-top: 6px;
      font-size: 14px;
      color: #111d3d;
    }
  }
`;
export default Session2;
