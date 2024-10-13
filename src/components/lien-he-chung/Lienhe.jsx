import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useMails } from "../../useQuery/useMails";
import { Form, Input, Button } from "antd";
import { showMessageError, showMessageSuccesss } from "../../feature/homeSlice";
import { useEffect, useState } from "react";
import { CommonLoadingModal } from "../model/LoadingModel";

const Lienhe = () => {
  const data = useSelector((state) => state.home.dataProfile);
  const dispatch = useDispatch();
  const { mutate, status } = useMails();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    console.log("Received values:", values);
    mutate(
      { ...values, subject: "Hỏi về sản phẩm" },
      {
        onSuccess: () => {
          dispatch(showMessageSuccesss("Tạo thành công!"));
        },
        onError: () => {
          dispatch(showMessageError("Tạo thất bại!"));
        },
      }
    );
    form.resetFields();
  };
  useEffect(() => {
    if (status === "pending") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [status]);
  return (
    <ContactStyle>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-md-6">
            <div className="page-contact__content">
              <div className="title">
                <span className="title__slogan">LIÊN HỆ VỚI CHÚNG TÔI</span>
                <p className="title__heading">Văn phòng Giao dịch</p>
              </div>
              <div className="the_content">
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        {` ${data?.address || ""}` +
                          ` - ${data?.sub_address || ""}`}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        Phone:{" "}
                        {` ${data?.phone || ""}` +
                          ` - ${data?.sub_phone || ""}`}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        Hotline 24/7:{" "}
                        {` ${data?.phone || ""}` +
                          ` - ${data?.sub_phone || ""}`}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        Email:{" "}
                        {` ${data?.mail || ""}` + ` - ${data?.sub_mail || ""}`}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mxh">
                <ul>
                  <li>
                    <a href={data?.facebook} title="mxh">
                      <FaFacebook aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href={data?.message} title="mxh">
                      <FaFacebookMessenger aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* phan form */}
          <div className="mt-4">
            <div className="title">
              <span className="title__slogan">GỬI TIN NHẮN</span>
              <p className="title__heading">Yêu Cầu Khảo Sát Trực Tiếp</p>
            </div>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                label="Họ và tên"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
              >
                <Input placeholder="Họ và tên" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Địa chỉ email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Địa chỉ email" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Leave a comment"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Leave a comment..." />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-[100px]">
                  Gửi đi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <CommonLoadingModal isLoadingModalOpen={isLoading} />
    </ContactStyle>
  );
};
const ContactStyle = styled.div`
  .page-contact__content {
    padding-top: 50px;
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
    color: #2b3152;
  }
  .page-contact__content .the_content {
    margin-bottom: 10px;
  }
  .the_content ul li {
    color: #333;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .page-contact__content .the_content ul li a {
    color: #2b3152;
    font-weight: 600;
  }
  .page-contact__content .mxh {
    padding-top: 10px;
  }
  .page-contact__content .mxh ul li {
    display: inline-block;
    padding-right: 20px;
  }
  .page-contact__content .mxh ul li a {
    font-size: 17px;
    font-weight: 600;
    color: #2b3152;
  }
`;
export default Lienhe;
