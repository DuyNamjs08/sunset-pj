/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const BannerDiDong = (props) => {
  //   const [banners, setBanners] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    prevArrow: (
      <div className="owl-nav">
        <button type="button" className="owl-prev" aria-label="prev">
          <FaAngleLeft className="text-[40px]" />
        </button>
      </div>
    ),
    nextArrow: (
      <div className="owl-nav">
        <button type="button" className="owl-next" aria-label="next">
          <FaAngleRight className="text-[40px]" />
        </button>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const banners = [
    {
      id: 1,
      link: "https://sunemit.com/wp-content/uploads/2021/10/He-thong-dien-mat-troi-hoa-luoi-1.png",
      image:
        "https://sunemit.com/wp-content/uploads/2021/10/He-thong-dien-mat-troi-hoa-luoi-1.png",
    },
    {
      id: 2,
      link: "https://sunemit.com/wp-content/uploads/2021/10/He-thong-dien-mat-troi-hoa-luoi-1.png",
      image:
        "https://sunemit.com/wp-content/uploads/2021/10/He-thong-dien-mat-troi-hoa-luoi-1.png",
    },
    {
      id: 3,
      link: "https://sunemit.com/wp-content/uploads/2021/10/bo-luu-tru-dien-cho-gia-dinh-1.png",
      image:
        "https://sunemit.com/wp-content/uploads/2021/10/bo-luu-tru-dien-cho-gia-dinh-1.png",
    },
  ];

  return (
    <div className="banner-di-dong">
      <Slider {...settings} className="">
        {banners?.map((item) => (
          <div key={item.id} className="item relative">
            <a href={item?.link}>
              <img
                src={
                  item?.image?.startsWith("http://")
                    ? item.image.replace("http://", "https://")
                    : item?.image
                }
                alt="img"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BannerDiDong;
