/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
const SliderProduct = ({ data }) => {
  console.log(data);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveIndex(newIndex);
  };
  const setting2 = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      {data?.length !== 1 ? (
        <Slider
          beforeChange={handleBeforeChange}
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
        >
          {data?.map((item, index) => (
            <img className=" h-[400px]" key={index} src={item.image} alt="" />
          ))}
        </Slider>
      ) : (
        <img className=" h-[400px]" src={data?.[0]?.image} alt="" />
      )}
      {data?.length !== 1 && (
        <div className="mt-20">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            {...setting2}
          >
            {data?.map((item, index) => (
              <div key={index + 20} className="h-full">
                <div
                  className={`p-2 border mx-2 ${
                    index === activeIndex
                      ? " border-[#093]"
                      : "border-[#ececec]"
                  }`}
                >
                  <img
                    className=" min-h-[80px] max-h-[80px] md:max-h-[100px]  w-full "
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderProduct;
