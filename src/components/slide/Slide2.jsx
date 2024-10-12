import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partners = [
    {
      imgSrc: "https://sunemit.com/wp-content/uploads/2018/08/enphase-logo.png",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "Enphase Logo",
    },
    {
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2018/08/Panasonic_logo_Bluepng.png",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "Panasonic Logo",
    },
    {
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2018/08/sharp-logo-vector.png",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "Sharp Logo",
    },
    {
      imgSrc: "https://sunemit.com/wp-content/uploads/2018/08/Sma_logo.jpg",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "Sma Logo",
    },
    {
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2018/08/ABB-Logo-scaled-1.jpg",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "ABB Logo",
    },
    {
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2018/08/Sunpower-logo-scaled-1.jpeg",
      link: "https://sunemit.com/he-thong-dien-mat-troi/",
      alt: "Sunpower Logo",
    },
  ];

  return (
    <PartnerSliderStyle>
      <div className="site-custumer pt-5 pb-5">
        <div className="container">
          <div className="title">
            <span className="title__slogan"></span>
            <h2 className="title__heading">
              Đối tác của Hải Đăng Solar Energy
            </h2>
          </div>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="item item-parnert wow fadeInDown">
                <a href={partner.link}>
                  <img
                    src={partner.imgSrc}
                    alt={partner.alt}
                    className="attachment-full size-full"
                    decoding="async"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </PartnerSliderStyle>
  );
};
const PartnerSliderStyle = styled.div`
  .site-custumer {
    padding: 60px 0;
  }
  .site-custumer .item-parnert {
    border: 1px solid #ccc;
    padding: 10px;
  }
  .site-custumer .item-parnert img {
    width: auto;
    height: 100px;
    margin: auto;
    object-fit: contain;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .title {
    margin-bottom: 30px;
  }
  .title__slogan {
    /* display: inline-block; */
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
  .title__des {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 0;
    margin-top: 20px;
    width: 80%;
  }
  .slick-slide > div {
    padding: 0 10px; /* Thêm khoảng cách bằng padding */
  }

  .slick-list {
    margin: 0 -10px; /* Bù lại padding để không bị thừa khoảng trống */
  }
`;
export default PartnerSlider;
