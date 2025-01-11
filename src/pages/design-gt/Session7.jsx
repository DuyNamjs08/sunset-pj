// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/hai-dang-final-11.webp";
import icon from "./assets/Screenshot 2025-01-09 at 21.12.18.png";
import { FaDoorOpen } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import icon2 from "./assets/Screenshot 2025-01-09 at 21.46.23.png";
import icon3 from "./assets/icon.png";
import { FaCheck } from "react-icons/fa";

const Session7 = () => {
  return (
    <Session7Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="slide"></div>
            <div className="imag-slide">
              <img src={icon} alt="icon" />
            </div>
            <div className="main-content">
              <div className="left">
                <div className="main-left">
                  <div className="main-left__item">
                    <div className="icon">
                      <FaDoorOpen />
                    </div>
                    <div className="main-left__item__content">
                      <h2>GIẢI PHÁP NHÀ THÔNG MINH</h2>
                      <p>
                        Thiết bị cho nhà thông minh mang đến một giải pháp thực
                        tế nhất cho một gia đình Việt, vừa đảm bảo cuộc sống
                        tiện nghi, thoải mái, vừa tiết kiệm chi phí
                      </p>
                    </div>
                  </div>
                  <div className="main-left__item">
                    <div className="icon">
                      <FaLightbulb />
                    </div>
                    <div className="main-left__item__content">
                      <h2>TRẠM SẠC Ô TÔ ĐIỆN</h2>
                      <p>
                        Sử dụng ô tô điện phí 0đ Hải Đăng Solar mang đến một
                        giải pháp toàn diện, tối ưu cho việc sạc xe điện hàng
                        ngày tại nhà bằng năng lượng mặt trời đảm bảo an toàn,
                        hiệu quả cao.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="main__right">
                  <h4>NGHIÊN CỨU, SẢN XUẤT PIN LƯU TRỮ CHỐNG CHÁY</h4>
                  <div className="main__right__content">
                    <div className="item-main">
                      <div className="item">
                        <div className="item__icon">
                          <FaCheck />
                        </div>
                        <p className="text">
                          Pin lưu trữ chống cháy 100% cam kết bằng văn bản
                        </p>
                      </div>
                      <div className="item">
                        <div className="item__icon">
                          <FaCheck />
                        </div>
                        <p className="text">Bảo hành 5 năm</p>
                      </div>
                      <div className="item">
                        <div className="item__icon">
                          <FaCheck />
                        </div>
                        <p className="text">
                          Pin lưu trữ được đội ngũ kĩ sư, thạc sĩ chuyên về pin
                          năng lượng chế tạo, kiểm định với quy trình nghiêm
                          ngặt về an toàn và hiệu suất của pin
                        </p>
                      </div>
                    </div>
                    <div className="image">
                      <img src={icon2} alt="icon2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub--content">
              <h2 className="title">SẢN PHẨM DỊCH VỤ</h2>
              <div className="sub-image">
                <div className="sub-image-div">
                  <img src={icon3} alt="icon3" />
                </div>
                <h4>ĐIỆN NĂNG LƯỢNG MẶT TRỜI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session7Style>
  );
};
const Session7Style = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: #111d3d;
  }
  .slide {
    position: absolute;
    width: 100%;
    height: 60px;
    background: #17a15b;
    top: 0;
    right: 0;
  }
  .imag-slide {
    position: absolute;
    width: 500px;
    height: 260px;
    top: 0;
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
  .main-content {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    height: 60%;
  }
  .left {
    flex: 1.2;
    background: #fff;
    height: 90%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  .main-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .main-left {
    padding: 0 30px;
  }
  .main-left__item {
    display: flex;
    gap: 20px;
  }
  .icon {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #17a15b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fff;
  }
  .main-left__item__content {
    max-width: 80%;
  }
  .main-left__item__content h2 {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    color: #17a15b;
  }
  .right {
    flex: 1;
  }
  .main__right {
    margin-top: 100px;
  }
  .main__right__content {
    display: flex;
    gap: 16px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .item__icon {
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: #17a15b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    height: 160px;
    width: 120px;
  }
  .text {
    width: 90%;
    color: #dcd5d5;
  }
  .right h4 {
    color: #17a15b;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .item-main {
    width: calc(100% - 136px);
  }
  .sub--content {
    display: flex;
    gap: 20px;
  }
  .title {
    flex: 1;
  }
  .sub-image {
    flex: 1;
    display: flex;
    gap: 20px;
  }
  .sub-image-div {
    height: 32px;
    width: 80px;
    background-color: #17a15b;
  }
  .sub--content h4 {
    font-size: 30px;
    color: #17a15b;
    width: 70%;
    font-weight: 700;
  }
  .sub--content h2 {
    font-size: 36px;
    color: #fff;
    width: 70%;
    font-weight: 700;
    padding-left: 20px;
    border-left: 8px solid #fff;
    margin-left: 40px;
  }
  @media (max-width: 990px) {
    .session1-style {
      height: auto;
    }
    .main-content {
      margin-top: 260px;
    }
    .imag-slide {
      width: 100%;
    }
    .main-content {
      position: relative;
      z-index: 100;
      display: block;
    }
    .left {
      padding: 40px 0 20px;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
    }
    .main-left__item__content h2 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700;
      color: #17a15b;
    }
    .main-left {
      padding: 0 10px;
    }
    .icon {
      flex: 0 0 60px;
    }
    .main-left__item {
      gap: 10px;
    }
    .main__right {
      margin-top: 20px;
      padding: 0 10px;
    }
    .right h4 {
      font-size: 20px;
    }
    .sub--content {
      display: block;
    }
    .sub--content h2 {
      font-size: 20px;
      color: #fff;
      width: 100%;
      font-weight: 600;
      padding-left: 20px;
      border-left: 4px solid #fff;
      margin-left: 10px;
    }
    .sub-image {
      gap: 10px;
    }
    .sub--content h4 {
      font-size: 20px;
      color: #17a15b;
      width: 70%;
      font-weight: 700;
    }
    .slide {
      display: none;
    }
  }
`;
export default Session7;
