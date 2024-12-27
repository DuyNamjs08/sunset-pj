/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import DropBlock from "../drop/DropBlock";

const BannerDiDong = ({ data = [] }) => {
  //   const [banners, setBanners] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    afterChange: () => setUpdateCount((prev) => prev + 1),
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
        {/* {data?.map((item, index) => (
          <div key={index} className="item relative">
            <a href="#">
              <img src={item} alt="img" />
            </a>
          </div>
        ))} */}
        {data?.map((item, index) => {
          return (
            <div key={index} className="item relative">
              <a href="#">
                <DropBlock
                  updateCount={updateCount}
                  img1={item}
                  img2={data[(index + 2) % data.length]}
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default BannerDiDong;
