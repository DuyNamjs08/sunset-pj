import { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
const SliderProduct = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const data = [
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/hinh-gai-dep-819x1024.jpg",
    },
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/anh-gai-xinh-03.jpg",
    },
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/hinh-gai-dep-819x1024.jpg",
    },
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/anh-gai-xinh-03.jpg",
    },
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/hinh-gai-dep-819x1024.jpg",
    },
    {
      image:
        "https://anhgaixinh.fan/wp-content/uploads/2023/12/anh-gai-xinh-03.jpg",
    },
  ];
  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveIndex(newIndex); // Cập nhật index của slide active
  };

  return (
    <>
      <Slider
        beforeChange={handleBeforeChange}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {data.map((item, index) => (
          <img className=" h-[400px]" key={index} src={item.image} alt="" />
        ))}
      </Slider>

      <div className="mt-20">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {data.map((item, index) => (
            <div key={index + 20} className="h-full">
              <div
                className={`p-2 border mx-2 ${
                  index === activeIndex ? " border-[#093]" : "border-[#ececec]"
                }`}
              >
                <img
                  className=" max-h-[80px] md:max-h-[100px]  w-full "
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderProduct;
