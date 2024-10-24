/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const BannerDiDong = ({ data = [] }) => {
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

  return (
    <div className="banner-di-dong">
      <Slider {...settings} className="">
        {data?.map((item, index) => (
          <div key={index} className="item relative">
            <a href="#">
              <img src={item} alt="img" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BannerDiDong;
