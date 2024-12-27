// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/stock-photo-solar-power-station-photovoltaics.png";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

const Session5 = () => {
  return (
    <Session5Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="slide"></div>
            <div className="slide-2"></div>
            {/* phần đầu */}
            <div className="up">
              <div className="up-main">
                <div className="group">
                  <h2>CƠ CẤU TỔ CHỨC</h2>
                </div>
              </div>
            </div>
            {/* phần sau  */}
            <div className="down">
              <div className="down-main">
                <div className="org-chart">
                  <div className="level">
                    <div className="node">TỔNG GIÁM ĐỐC</div>
                  </div>
                  <div className="level">
                    <div className="connector" />
                    <div className="node">PHÓ TỔNG GIÁM ĐỐC</div>
                  </div>
                  <div className="level">
                    <div className="connector-1" />
                    <div className="row">
                      <div className="node">KHỐI VĂN PHÒNG & TÀI CHÍNH</div>
                      <div className="node">KHỐI DỰ ÁN</div>
                      <div className="node">KHỐI KINH DOANH</div>
                      <div className="node">PHÒNG R&amp;D</div>
                    </div>
                  </div>
                </div>
                {/* phần chart */}
                <div className="content-main">
                  <div className="content-down down-1">
                    <div className="down-des">
                      <div className="icon">
                        <FaRegSun />
                      </div>
                      <h3>Hệ thống quản lý chất lượng</h3>
                      <p>
                        Tại Hải Đăng Solar, Hệ thống quản lý chất lượng đã được
                        xây dựng, áp dụng, duy trì, cải tiến và thấm nhuần xuyên
                        suốt các quá trình làm việc.
                      </p>
                      <p>
                        Ngay từ những ngày đầu thành lập, chúng tôi đã định
                        hướng các chuẩn mực về chất lượng, trên mỗi công trường,
                        mỗi sản phẩm và dịch vụ, sự hài lòng của khách hàng
                        chính là phẩm giá cao nhất về chất lượng với chúng tôi.
                      </p>
                    </div>
                  </div>
                  <div className="content-down down-1">
                    <div className="down-des">
                      <div className="icon">
                        <FaScrewdriverWrench />
                      </div>
                      <h3>Hệ thống quản lý an toàn:</h3>
                      <p>
                        Người lao động là tài sản quý giá nhất, với tôn chỉ
                        trên, Hải Đăng Solar đã xây dựng Văn hóa An toàn thông
                        qua việc áp dụng hệ thống quản lý An toàn và sức khỏe
                        nghề nghiệp từ OHSAS 18001:2007 đến ISO 45001:2018.
                        Người Hải Đăng luôn suy nghĩ về An toàn, Sức khỏe và Môi
                        trường trong mỗi hoạt động
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session5Style>
  );
};
const Session5Style = styled.div`
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
    width: 40px;
    height: 100vh;
    background: #17a15b;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .slide-2 {
    position: absolute;
    width: 100%;
    height: 300px;
    background: #111d3d;
    bottom: 0;
    left: 0;
    z-index: 2;
    border-top-left-radius: 100px;
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
    color: #fff;
    background: #fff;
  }
  .up-main {
    padding: 50px 60px 0;
  }
  .up-main h2 {
    font-size: 40px;
    font-weight: bold;
    padding-left: 20px;
    border-left: solid 4px #17a15b;
    color: #17a15b;
  }
  .content-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    z-index: 2;
  }
  .content-main p {
    color: #fffafc;
  }
  .content-main strong {
  }
  .down {
    flex: 6;
    background-color: #fff;
  }
  .down {
    position: relative;
  }
  .down-main {
    padding: 50px 60px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .down-1 {
    flex: 1;
  }
  .down-des {
    padding: 30px 40px;
    background: #eeeff0;
    border-radius: 20px;
    position: relative;
  }
  .down-des p {
    color: #111d3d;
    margin-bottom: 10px;
  }
  .down-des h3 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #17a15b;
    margin-top: 8px;
  }
  .down-des .icon {
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    top: -12%;
    left: 45%;
    background: #17a15b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fff;
  }
  .org-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .level {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .row {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
  }
  .row::before {
    content: "";
    position: absolute;
    width: calc(83% - 2px);
    height: 2px;
    background-color: green;
    top: -18px;
    left: 73px;
  }

  .node {
    text-align: center;
    padding: 10px 20px;
    border: 2px solid green;
    border-radius: 5px;
    background-color: white;
    color: #111d3d; /* Navy blue text */
    font-weight: bold;
    position: relative;
    margin-bottom: 40px;
  }

  .connector {
    width: 2px;
    height: 40px;
    background-color: green;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .connector-1 {
    width: 2px;
    height: 25px;
    background-color: green;
    position: absolute;
    top: -42px;
    left: 50%;
    transform: translateX(-50%);
  }

  .level .row .node::before {
    content: "";
    width: 2px;
    height: 20px;
    background-color: green;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .level .row .node:first-child::before {
    content: "";
    left: 25%;
  }

  .level .row .node:last-child::before {
    content: "";
    right: 25%;
  }
  @media (max-width: 768px) {
    .session1-style {
      height: auto;
    }
    .slide {
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
    .content-down {
      margin-bottom: 20px;
    }
    .row::before {
      left: 0;
      width: 100%;
    }
    .down-des h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .down-des {
      padding: 20px;
    }
    .down-des p {
      font-size: 14px;
    }
    .row {
      gap: 5px;
    }
    .node {
      padding: 8px;
      font-size: 14px;
    }
    .org-chart {
      margin-bottom: 20px;
    }
  }
`;
export default Session5;
