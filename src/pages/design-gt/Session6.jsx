// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/hai-dang-final-11.webp";

const Session6 = () => {
  return (
    <Session6Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content">
            <div className="up">
              <div className="up-main">
                <div className="group">
                  <h2>CAM KẾT VỀ SẢN PHẨM</h2>
                  <h4>VÀ LÝ DO LỰA CHỌN HẢI ĐĂNG SOLAR</h4>
                </div>
              </div>
            </div>
            <div className="down">
              <div className="content-down">
                <div className="down-des">
                  <p>
                    Công ty TNHH Năng lượng xanh Hải Đăng Solar cam kết mang đến
                    các sản phẩm chính hãng, đạt tiêu chuẩn quốc tế, đảm bảo
                    hiệu suất cao, tuổi thọ bền bỉ và thân thiện với môi trường.
                  </p>
                  <p>
                    Chúng tôi thiết kế các giải pháp năng lượng mặt trời tối ưu,
                    phù hợp với nhu cầu và ngân sách của từng khách hàng, đồng
                    thời cung cấp dịch vụ bảo hành và bảo trì uy tín, đảm bảo hệ
                    thống vận hành ổn định và an toàn lâu dài.
                  </p>
                  <p>
                    Với đội ngũ kỹ sư giàu kinh nghiệm và chuyên môn cao, Hải
                    Đăng Solar là đối tác đáng tin cậy trong việc triển khai các
                    dự án năng lượng xanh trên toàn quốc. Chúng tôi mang đến các
                    giải pháp toàn diện từ tư vấn, thiết kế, thi công đến bảo
                    trì, với dịch vụ tận tâm, phản hồi nhanh chóng và mức giá
                    cạnh tranh.
                  </p>
                  <p>
                    Lựa chọn Hải Đăng Solar, Quý khách không chỉ nhận được sản
                    phẩm chất lượng mà còn góp phần vào việc bảo vệ môi trường
                    và xây dựng một tương lai bền vững.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Session6Style>
  );
};
const Session6Style = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .up {
    height: 20%;
    background: #fff;
  }
  .up-main {
    padding: 20px 60px 0;
  }
  .up-main h2 {
    font-size: 40px;
    font-weight: bold;
    padding-left: 20px;
    border-left: solid 4px #17a15b;
    color: #17a15b;
  }
  .up-main h4 {
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    border-left: solid 4px #17a15b;
    color: #111d3d;
  }
  .down {
    width: 100%;
    height: 80%;
    background: url(${(props) => props.bgSession1}) no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
  }
  .content-down {
    background-color: #111d3d;
    height: 80%;
    width: 60%;
    position: absolute;
    top: 10%;
    right: 0%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .down-des p {
    color: #dad5d5;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    .session1-style {
      height: auto;
    }
    .content-down {
      width: 100%;
    }
    .up-main h2 {
      font-size: 20px;
    }
    .content-down {
      height: auto;
    }
    .up-main {
      padding: 0;
    }
    .up {
      height: auto;
      background: #fff;
      margin-bottom: 20px;
    }
    .content-down {
      position: unset;
    }
    .down {
      background: unset;
      height: auto;
    }
  }
`;
export default Session6;
