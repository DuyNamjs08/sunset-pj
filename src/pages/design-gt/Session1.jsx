// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/stock-photo-wind-generator-turbines-on-sunset.jpeg";
import { useSelector } from "react-redux";

const Session1 = () => {
  const data = useSelector((state) => state.home.dataProfile);
  return (
    <Session1Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="logo-content">
              <img className="logo" src={data?.image} alt="" />
            </div>
            <div className="content-main">
              <div className="left">
                <h2>CÔNG TY TNHH NĂNG LƯỢNG XANH</h2>
                <h1>HẢI ĐĂNG SOLAR</h1>
                <h3>CÔNG TY TNHH DỊCH VỤ DU LỊCH - THƯƠNG MẠI CHỦ ĐỀ</h3>
              </div>
              <div className="right">
                <div className="content-right">
                  <h3>Năng lượng xanh</h3>
                  <h4>cho phát triển bền vững</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session1Style>
  );
};
const Session1Style = styled.div`
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
    padding-left: 50px;
  }
  .content {
    height: 100%;
    width: 100%;
    background: url(${(props) => props.bgSession1}) no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    border-top-left-radius: 70px;
  }
  .logo-content {
    width: 120px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 5%;
    background-color: #fff;
  }
  .logo-content img {
    width: 80%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .content-main {
    display: flex;
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #111d3d;
  }
  h1 {
    font-size: 60px;
    font-weight: bolder;
    color: #111d3d;
  }
  .left h3 {
    font-size: 18px;
    font-weight: 600;
    color: #17a15b;
  }
  .left {
    flex: 3;
    background-color: #cccc;
    padding: 60px 40px;
    background-color: #fff;
    border-top-right-radius: 100px;
  }
  .right {
    flex: 2;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  .right::before {
    position: absolute;
    content: "";
    width: 70%;
    height: 16px;
    background-color: #fff;
    right: 0;
    bottom: 170px;
  }
  .content-right {
    text-align: right;
    padding: 60px 100px 60px 0;
    color: #fff;
    width: 100%;
    background-color: #111d3d;
  }
  .right h3 {
    font-size: 24px;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 0.2px;
    line-height: 28px;
  }
  .right h4 {
    margin-top: 2px;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
  }
  @media (max-width: 768px) {
    .session1-style {
      padding: 0px;
      height: 60vh;
    }
    .left {
      flex: 3;
      padding: 30px 6px 40px;
    }
    h2 {
      font-size: 16px;
      font-weight: bold;
      color: #111d3d;
      margin-bottom: 6px;
      padding: 0 10px 0 0;
    }
    h1 {
      font-size: 20px;
      font-weight: bolder;
      color: #111d3d;
      margin-bottom: 6px;
    }
    .left h3 {
      font-size: 14px;
      font-weight: 600;
      color: #17a15b;
    }
    .right h3 {
      font-size: 12px;
      font-weight: 800;
    }
    .right h4 {
      margin-top: 2px;
      font-size: 10px;
      font-weight: 600;
    }
    .content-right {
      padding: 10px 10px 40px 0;
    }
    .right::before {
      display: none;
    }
    .logo-content {
      width: 100px;
      height: 80px;
    }
  }
`;
export default Session1;
