import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slide1 = () => {
  const reviews = [
    {
      text: "Năm nay nhà nước đang khuyến khích mọi người dùng Điện Mặt Trời để giảm hóa đơn tiền điện, lại được EVN mua lại nên tôi lắp ngay 20Kwp cho nhà sử dụng. Không mong bán lại nhưng mỗi tháng thấy tài khoản có thêm tiền bán điện, rất vui vì sử dụng điện không phải nghĩ như trước mà lại được thêm tiền.",
      name: "Ông Phan Văn Hạnh - Chủ biệt thự tại Vinhomes, Hà Nội",
    },
    {
      text: "Nhà tôi có Chung cư mini cho thuê, nên việc đầu tư Điện Mặt Trời đã được tôi cân nhắc tính toán từ rất lâu rồi. Nay lựa chọn Hải Đăng Solar Energy để triển khai với bộ sản phẩm đồng bộ thì rất yên tâm, khi có bất cứ vấn đề gì gọi Hải Đăng Solar Energy hỗ trợ, khỏi lo nghĩ nhà cung cấp này nhà sản xuất nọ, tất cả quy về một mối vẫn hơn.",
      name: "Ông Nguyễn Đức Vượng - Phạm Ngọc Thạch, Ba Đình, Hà Nội",
    },
    {
      text: "Mình lắp để trải nghiệm công nghệ mới, vừa tiết kiệm điện cho gia đình, hơn nữa để con cháu thấy mình vẫn còn ham học hỏi, tìm tòi với những thứ tốt cho gia đình, cho môi trường, xã hội",
      name: "Chú Độ (72 tuổi) - Kim Mã, Ba Đình, Hà Nội",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slide1Style>
      <section
        className="site-customer"
        style={{
          backgroundImage:
            "url(https://sunemit.com/wp-content/uploads/2020/10/sunemit-khach-hang.jpg)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
            zIndex: 1,
          }}
        />
        <div className="title" style={{ position: "relative", zIndex: 2 }}>
          {" "}
          {/* Đảm bảo nội dung nằm trên lớp phủ */}
          <span className="title__slogan">
            <span style={{ color: "#000000" }}>TRẢI NGHIỆM THỰC TẾ</span>
          </span>
          <h2 className="title__heading">
            <span style={{ color: "#000000" }}>Nhận Xét Của Khách Hàng</span>
          </h2>
        </div>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className="item" key={index}>
              <p>
                <span style={{ color: "#000000" }}>{review.text}</span>
              </p>
              <div className="customer">
                <h3>
                  <span style={{ color: "#000000" }}>{review.name}</span>
                </h3>
                <span>
                  <span style={{ color: "#000000" }}>Khách hàng</span>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Slide1Style>
  );
};
const Slide1Style = styled.div`
  .site-customer {
    overflow: hidden;
    padding: 160px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .site-customer .title {
    text-align: center;
  }
  .title {
    margin-bottom: 30px;
  }
  .site-customer .title span {
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
  .title__heading {
    font-size: 36px;
    font-weight: 700;
  }
  .site-customer .item {
    width: 80% !important;
    margin: 0 auto;
    text-align: center;
    display: block !important;
  }
  .site-customer .item p {
    font-size: 20px;
    line-height: 1.7;
    color: #fff;
    margin-bottom: 30px;
  }
  .site-customer .item .customer h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 3px;
    color: #fff;
  }
  .site-customer .item .customer span {
    display: block;
    font-size: 16px;
    color: #fff;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    border: 3px solid #fff;
    border-radius: 100px;
    content: "";
    text-align: center;
    opacity: 1;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    opacity: 0.9;
  }
  .slick-active button:before {
    background-color: #fff;
  }
  .slick-dots {
    bottom: -60px;
  }
`;

export default Slide1;
