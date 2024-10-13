/* eslint-disable no-unused-vars */
import { useLocation, useParams } from "react-router-dom/dist";
import BreadCum from "../../components/bread-cum/BreadCum";
import { useState } from "react";

import "./style.css";
import Slider from "react-slick";

import SliderProduct from "./Slider";
import ProductItem from "../../components/productItem/ProductItem";
import { useProduct, useProductId } from "../../useQuery/useProducts";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { useCategory } from "../../useQuery/useCategory";
import Lienhe from "../../components/lien-he-chung/Lienhe";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddToCart,
  handleRemoveFromCart,
  increment,
} from "../../feature/homeSlice";
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
const DetailProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItems = useSelector((state) => state.home.cartItems);
  console.log(
    "home state",
    useSelector((state) => state.home)
  );
  const params = useParams();
  // const [quantity, setQuantity] = useState(1);
  const { data, isLoading } = useProductId(params.id);
  const { data: dataCategory, isLoading: isisLoadingCategory } = useCategory();
  const { data: dataListproduct, isLoading: isLoadingListproduct } = useProduct(
    location.search.split("=")[1]
  );
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <BreadCum data={breadcrumbItems} />
      <div className="container ">
        <div className="my-[30px] ">
          <div className="md:flex   gap-[30px]">
            <div className="md:w-[40%]">
              <SliderProduct
                data={
                  typeof data?.image.split(",") === "string"
                    ? [
                        {
                          image: data?.image.split(","),
                        },
                      ]
                    : data?.image.split(",")?.map((item) => {
                        return {
                          image: item,
                        };
                      })
                }
              />
            </div>
            <div className="md:w-[60%]">
              <h2 className="text-[30px] mb-3 text-[#2b3152] font-bold ">
                {data?.productName}
              </h2>
              <p className="mb-4 text-[24px] text-[#093] leading-6 ">
                <span className="">
                  <bdi>
                    {data?.price}
                    <span className="">₫</span>
                  </bdi>
                </span>
                {/* <span className=" ml-2 text-[18px] ">
                  <del>
                    3.630.000
                    <span className="">₫</span>
                  </del>
                </span> */}
              </p>
              <div className="mb-[15px] desc-detail-product">
                <div className="">
                  <p>{data?.description}</p>
                </div>
              </div>
              {/* số lượng */}
              <div className="flex gap-4">
                <div className="flex h-[50px] border border-[#093] ">
                  <div
                    onClick={() => {
                      dispatch(
                        handleRemoveFromCart({
                          ...data,
                        })
                      );
                    }}
                    className="w-10 leading-[50px] text-center cursor-pointer"
                  >
                    -
                  </div>
                  <input
                    value={
                      cartItems?.find((cart) => cart._id === data?._id)
                        ?.quantity || 0
                    }
                    onChange={(e) => {
                      // const value = e.target.value;
                      // if (/^\d*$/.test(value)) {
                      //   setQuantity(value);
                      // }
                    }}
                    maxLength={4}
                    className="w-[60px] focus:outline-none border-none text-center"
                  />
                  <div
                    onClick={() => {
                      dispatch(
                        handleAddToCart({
                          ...data,
                        })
                      );
                    }}
                    className="w-10 leading-[50px] text-center cursor-pointer"
                  >
                    +
                  </div>
                </div>
                <div className="border cursor-pointer border-[#093] min-w-[180px] font-semibold rounded leading-[50px] text-center  ">
                  Thêm vào giỏ hàng
                </div>
              </div>
              {/* danh mục */}
              <div className="mt-5">
                <ul>
                  <li className="leading-[1.5] text-[14px] mb-1 ">
                    <span className="font-bold">Mã sản phẩm:</span> SU-03
                  </li>
                  <li className="leading-[1.5] text-[14px] mb-1 flex ">
                    <span className="font-bold">Danh mục:</span>
                    <div className="ml-1 text-[#777b93] ">
                      {data && dataCategory
                        ? dataCategory?.data?.find(
                            (item) => item._id === data.category_id
                          )?.name
                        : ""}
                    </div>
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
              {dataListproduct?.data &&
                dataListproduct?.data?.length > 0 &&
                dataListproduct?.data?.map((item) => (
                  <div className="px-5" key={item._id}>
                    <ProductItem data={item} />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <Lienhe />
      </div>
      <CommonLoadingModal
        isLoadingModalOpen={
          isLoading || isLoadingListproduct || isisLoadingCategory
        }
      />
    </div>
  );
};

export default DetailProduct;
