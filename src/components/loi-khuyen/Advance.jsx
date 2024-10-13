import styled from "styled-components";
import gradientImage from "../../assets/single_img.jpg";
import gradientImage1 from "../../assets/gradient-1.png";
import { Form, Input, Select } from "antd";
import logo from "../../assets/hải đăng.png";
import { useSelector } from "react-redux";

const { Option } = Select;

const Advance = () => {
  const data = useSelector((state) => state.home.dataProfile);
  return (
    <AdvanceStyle>
      <section className="site-advisory">
        <div className="row m-0">
          <div className="col-lg-6 p-0 wow fadeInLeft">
            <div className="form-advisory">
              <div className="col-xl-9 p-0">
                <div className="title">
                  <span className="title__slogan">
                    Hải Đăng Solar Energy sẵn sàng lắng nghe
                  </span>
                  <h2 className="title__heading">Tư vấn kỹ thuật</h2>
                  <p className="title__des">
                    Hải Đăng Solar Energy sẽ cung cấp cho Quý Khách giải pháp
                    thiết kế và lắp đặt Điện năng lượng mặt trời trọn gói phù
                    hợp nhất với đặc thù công trình của mình. Chỉ cần để lại
                    thông tin liên hệ của bạn cho các chuyên viên của chúng tôi
                  </p>
                </div>
                <div className="wpcf7 js" id="wpcf7-f6-o1" lang="vi" dir="ltr">
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                    <ul />
                  </div>
                  <Form
                    layout="vertical"
                    name="customForm"
                    initialValues={{ remember: true }}
                    style={{
                      maxWidth: 600,
                      padding: "20px",
                      background: "#4CAF50",
                      borderRadius: "8px",
                    }}
                  >
                    <Form.Item
                      label="Họ và tên (*)"
                      name="fullName"
                      rules={[
                        { required: true, message: "Vui lòng nhập họ và tên!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Email (*)"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Vui lòng nhập email hợp lệ!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Địa chỉ của bạn (*)"
                      name="address"
                      rules={[
                        { required: true, message: "Vui lòng nhập địa chỉ!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Số điện thoại của bạn (*)"
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Diện tích mái nhà (m2) (*)"
                      name="roofArea"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập diện tích mái nhà!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Lựa chọn mức hóa đơn tiền điện của bạn"
                      name="electricBill"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng chọn mức hóa đơn!",
                        },
                      ]}
                    >
                      <Select placeholder="Lựa chọn mức hóa đơn tiền điện của bạn">
                        <Option value="level1">Dưới 500.000 VNĐ</Option>
                        <Option value="level2">500.000 - 1.000.000 VNĐ</Option>
                        <Option value="level3">Trên 1.000.000 VNĐ</Option>
                      </Select>
                    </Form.Item>
                    <input
                      className="wpcf7-form-control wpcf7-submit has-spinner btn-nh"
                      type="submit"
                      value="Gửi Yêu Cầu"
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0 wow fadeInRight">
            <div className="site-advisory__contact">
              <div>
                <p>
                  Liên Hệ ngay để lắp đặt Điện Mặt Trời cho công trình của mình
                </p>
                <h2>Hotline 24/7</h2>
                <a
                  href="https://Hải Đăng Solar Energy.com"
                  title="Điện năng lượng mặt trời, điện mặt trời, Hải Đăng Solar Energy"
                >
                  <img
                    className="rounded-lg"
                    src={logo}
                    title="logo"
                    alt="logo"
                  />
                </a>{" "}
                <a href={`tel:${data?.phone}`}> {data?.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdvanceStyle>
  );
};
const AdvanceStyle = styled.div`
  .row {
    display: flex;
  }
  .col-lg-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  .site-advisory__contact {
    background-image: url(${gradientImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 0 95px;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
  }
  .site-advisory__contact p {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 10px;
  }
  .site-advisory__contact h2 {
    font-size: 36px;
    font-weight: 700;
    color: #2b3152;
  }
  .site-advisory__contact img {
    width: 200px;
    margin: 20px auto;
    display: block;
  }
  .site-advisory__contact a {
    font-size: 60px;
    color: #093;
    display: block;
  }
  .site-advisory .form-advisory {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: space-around;
    background: #093 url(${gradientImage1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 80px 80px;
  }
  .title {
    margin-bottom: 30px;
  }
  .site-advisory .title span {
    color: #fff;
    padding: 0;
  }
  .title__slogan {
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 10px;
    position: relative;
  }
  .site-advisory .title h2 {
    color: #fff;
  }
  .title__heading {
    font-size: 36px;
    font-weight: 700;
  }
  .site-advisory .title p {
    color: #fff;
  }
  .title__des {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    margin-top: 20px;
    width: 80%;
  }
  .ant-input,
  .ant-select-selector {
    border-radius: 5px;
  }

  .ant-input:focus,
  .ant-select-selector:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 5px rgba(64, 169, 255, 0.5);
  }
  .site-advisory form .btn-nh {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 60px;
    min-width: 210px;
    font-size: 16px;
    color: #2b3152;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    margin-top: 20px;
  }
  .site-advisory form .btn-nh:hover {
    background: #093;
    color: #fff;
  }
  @media (max-width: 768px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      position: relative;
      width: 100%;
      min-height: 1px;
    }
    .site-advisory .form-advisory {
      padding: 12px;
    }
    .site-advisory__contact h2 {
      font-size: 25px;
    }
    .site-advisory__contact img {
      width: 150px;
      height: 150px;
    }
    .site-advisory__contact a {
      font-size: 25px;
    }
    .site-advisory__contact {
      padding: 20px 95px;
    }
    .site-advisory .title h2 {
      font-size: 25px;
    }
    .site-advisory form .btn-nh {
      min-width: 150px;
      height: 40px;
      line-height: 40px;
    }
  }
`;
export default Advance;
