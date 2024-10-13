import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Lienhe = () => {
  const data = useSelector((state) => state.home.dataProfile);
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
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className=" shadow-sm w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                  placeholder="Họ và tên"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="shadow-sm  w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                  placeholder="Địa chỉ email"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="shadow-sm  w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  rows={4}
                  className=" w-[80%] block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  placeholder="Leave a comment..."
                  defaultValue={""}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Gửi đi
              </button>
            </form>
          </div>
        </div>
      </div>
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
