import { Link, useParams } from "react-router-dom/dist";
import BreadCum from "../../components/bread-cum/BreadCum";
import { useState } from "react";

import "./style.css";
import Slider from "react-slick";

import SliderProduct from "./Slider";
import ProductItem from "../../components/productItem/ProductItem";
const DetailProduct = () => {
  const a = useParams();
  console.log(a);
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Sản phẩm Điện Năng Lượng Mặt Trời",
      path: "/san-pham/",
    },
    {
      title: "Tấm pin năng lượng mặt trời ",
      path: "/san-pham",
    },
    {
      title: "Sản phẩm Điện Năng Lượng Mặt Trời",
      path: "/san-pham",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <BreadCum data={breadcrumbItems} />
      <div className="container ">
        <div className="my-[30px] ">
          <div className="md:flex   gap-[30px]">
            <div className="md:w-[40%]">
              <SliderProduct />
            </div>
            <div className="md:w-[60%]">
              <h2 className="text-[30px] mb-3 text-[#2b3152] font-bold ">
                Inverter năng lượng mặt trời hòa lưới 3 pha SMA STP-25000 xuất
                xứ Đức
              </h2>
              <p className="mb-4 text-[24px] text-[#093] leading-6 ">
                <span className="">
                  <bdi>
                    80.500.000
                    <span className="">₫</span>
                  </bdi>
                </span>
                <span className=" ml-2 text-[18px] ">
                  <del>
                    3.630.000
                    <span className="">₫</span>
                  </del>
                </span>
              </p>
              <div className="mb-[15px] desc-detail-product">
                <div className="">
                  <p>
                    Tấm Pin Năng lượng Mặt Trời SU-03 Ntype 580W là Thế hệ tấm
                    pin hiệu suất cao tiếp theo được cung cấp bởi SUNEMIT với
                    hiệu suất mạnh mẽ, độ bền tăng ~20% so với các sản phẩm thế
                    hệ trước cùng loại trên thị trường.
                  </p>
                  <p>
                    <strong>
                      Ưu điểm của Tấm Pin Mặt Trời SU-03 580W N-type:
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Hiệu suất cực cao 22.5% nhờ được sản xuất theo công nghệ
                      Ntype mới kết hợp với công nghệ 2 mặt kính, cho phép tấm
                      pin hấp thụ năng lượng ở cả 2 mặt..
                    </li>
                    <li>
                      Kích thước tiêu chuẩn vàng: (2278 x 1134 x 30)mm, giúp
                      tăng độ chắc chắn, đảm bảo tấm pin được lắp đặt an toàn và
                      bền vững trên mái công trình.
                    </li>
                    <li>
                      Công nghệ SU-03 sử dụng là Ntype TOPCON Mono Halfcells
                      100%, cho hiệu quả tốt nhất hiện nay đối với các tấm pin
                      mặt trời sử dụng tại Việt Nam.
                    </li>
                    <li>
                      Bảo hành vật lý tấm pin tới 15 năm. Bảo hành hiệu suất 30
                      năm cho kết quả đạt trên 80% so với hiệu suất sử dụng năm
                      đầu tiên.
                    </li>
                    <li>
                      Thương hiệu tấm Pin SU-03 được phát triển và làm chủ hoàn
                      toàn bởi SUNEMIT, thương hiệu Việt 100%. Điều này giúp
                      SUNEMIT chủ động cung cấp cho khách hàng dịch vụ Bảo hành
                      và Bảo trì sau bán hàng tốt nhất trên thị trường.
                    </li>
                  </ul>
                </div>
              </div>
              {/* số lượng */}
              <div className="flex gap-4">
                <div className="flex h-[50px] border border-[#093] ">
                  <div
                    onClick={() => {
                      if (+quantity > 1) setQuantity(+quantity + -1);
                    }}
                    className="w-10 leading-[50px] text-center cursor-pointer"
                  >
                    -
                  </div>
                  <input
                    value={quantity}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d*$/.test(value)) {
                        setQuantity(value);
                      }
                    }}
                    maxLength={4}
                    className="w-[60px] focus:outline-none border-none text-center"
                  />
                  <div
                    onClick={() => setQuantity(+quantity + 1)}
                    className="w-10 leading-[50px] text-center cursor-pointer"
                  >
                    +
                  </div>
                </div>
                <div className="border border-[#093] min-w-[180px] font-semibold rounded leading-[50px] text-center  ">
                  Thêm vào giỏ hàng
                </div>
              </div>
              {/* danh mục */}
              <div className="mt-5">
                <ul>
                  <li className="leading-[1.5] text-[14px] mb-1 ">
                    <span className="font-bold">Mã sản phẩm:</span> SU-03
                  </li>
                  <li className="leading-[1.5] text-[14px] mb-1 ">
                    <span className="font-bold">Danh mục:</span>
                    <Link
                      className="ml-1 text-[#777b93] "
                      to="/tam-pin-nang-luong-mat-troi/"
                    >
                      Tấm pin năng lượng mặt trời
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}
            </div>
          </div>
          {/* khối mô tả */}
          <div>
            <div className="border-b border-[#ccc]  mt-10 ">
              <div className="  w-[200px] h-[40px] text-center leading-[40px] mb-[-2px] bg-[#093] text-[#fff]  ">
                Mô tả
              </div>
            </div>
          </div>
          {/* sản phẩm cùng loại */}
          <div className="py-[30px] ">
            <h3 className="mb-[30px] text-[36px] font-bold text-[#2b3152] ">
              Sản phẩm cùng loại
            </h3>
            <Slider {...settings}>
              <div className="px-5">
                <ProductItem />
              </div>
              <div className="px-5">
                <ProductItem />
              </div>
              <div className="px-5">
                <ProductItem />
              </div>
              <div className="px-5">
                <ProductItem />
              </div>

              <div className="px-5">
                <ProductItem />
              </div>
              <div className="px-5">
                <ProductItem />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
