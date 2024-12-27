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
import iconDownload from "./assets/download.png";
import pdfIcon from "./assets/pdf-icon-png-pdf-zum-download-2.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import zaloIcon from "../../assets/zalo.svg";
import styled from "styled-components";
import lightBluricon from "./assets/light-blur.png";
import giftIcon from "./assets/ico-gift.png";
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
  const params = useParams();
  // const [quantity, setQuantity] = useState(1);
  const { data, isLoading } = useProductId(params.id);
  const { data: dataCategory, isLoading: isisLoadingCategory } = useCategory();
  const { data: dataListproduct, isLoading: isLoadingListproduct } = useProduct(
    {
      offset: 0,
      limit: 20,
      productName: "",
      category_id: location.search.split("=")[1],
    }
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
      <StyleContainer
        className="container "
        lightBluricon={lightBluricon}
        giftIcon={giftIcon}
      >
        <div className="my-[30px] ">
          <div className="md:flex gap-[30px]">
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
            <div className="md:w-[60%] main-content">
              <h2 className="text-[24px] mb-3 text-[#2b3152] font-bold ">
                {data?.productName}
              </h2>
              {/* <h4 className="mb-2">
                <span className="text-[18px] font-bold"> Sku:</span>
                <span className="ml-2 text-[#999]">SUN-5K-SG04LP1-EU-SM2</span>
              </h4> */}
              <p className="mb-4 text-[24px] text-[#ff0000] leading-6 ">
                <span className="">
                  <b>
                    {data?.price}
                    {Number(data?.price) ? "đ" : ""}
                  </b>
                </span>
                <img
                  className="w-[236px] h-[50px]"
                  src={iconDownload}
                  alt="iconDownload"
                />
                <div className="my-3 ">
                  <a
                    href="uploads/source/datasheet-sun-5k-sg04lp1-sm2.pdf"
                    target="_blank"
                    className="flex text-[#212529] items-center"
                  >
                    <span className="w-[30px] mr-[10px]">
                      <img
                        src={pdfIcon}
                        alt="Datasheet [Thông số kỹ thuật]"
                        title="Datasheet [Thông số kỹ thuật]"
                        loading="lazy"
                      />{" "}
                    </span>
                    <span className="text-[16px] hover:underline">
                      Datasheet [Thông số kỹ thuật]
                    </span>
                  </a>
                  <a
                    href="uploads/source/manual-5k.pdf"
                    target="_blank"
                    className="flex text-[#212529] items-center"
                  >
                    <span className="w-[30px] mr-[10px]">
                      <img
                        src={pdfIcon}
                        alt="User Manual [Hướng dẫn sử dụng]"
                        title="User Manual [Hướng dẫn sử dụng]"
                        loading="lazy"
                      />{" "}
                    </span>
                    <span className="text-[16px] hover:underline">
                      User Manual [Hướng dẫn sử dụng]
                    </span>
                  </a>
                </div>
                <div className="social-btns">
                  <a href="#" className="btn facebook">
                    <FaFacebookF className="icon" />
                  </a>
                  <a href="#" className="btn message">
                    <FaFacebookMessenger className="icon" />
                  </a>
                  <a href="#" className="btn zalo">
                    <img className="icon" src={zaloIcon} alt="zaloIcon" />
                  </a>
                </div>

                {/* <span className=" ml-2 text-[18px] ">
                  <del>
                    3.630.000
                    <span className="">₫</span>
                  </del>
                </span> */}
              </p>
              {/* số lượng */}
              <div className="flex items-center gap-4 group-button">
                <div className="addtocart_quantity">
                  <div className="btn-and-quantity">
                    <div className="spinner">
                      <span
                        onClick={() => {
                          dispatch(
                            handleRemoveFromCart({
                              ...data,
                            })
                          );
                        }}
                        className="quantity-btn minus quantity-down"
                      />
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={
                          cartItems?.find((cart) => cart._id === data?._id)
                            ?.quantity || 0
                        }
                        className="quantity-selector"
                      />
                      <span
                        onClick={() => {
                          dispatch(
                            handleAddToCart({
                              ...data,
                            })
                          );
                        }}
                        className="quantity-btn plus quantity-up"
                      />
                    </div>
                  </div>
                </div>
                <div className="addtocart_button">
                  <button className="btn btn-effect-default btn-red button_cart product_add_to_cart">
                    <span className="button_cart__heading">Thêm vào giỏ</span>
                    <span className="button_cart__desc">
                      và mua sản phẩm khác
                    </span>
                  </button>
                  <button className="btn btn-effect-default btn-green button_cart_now product_add_to_cart_now">
                    <span className="button_cart__heading">Mua Ngay</span>
                    <span className="button_cart__desc">Thanh toán ngay</span>
                  </button>
                </div>
              </div>

              {/* <div className="flex gap-4">
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
                    onChange={(e) => {}}
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
              </div> */}
              <div className="pre-box-sale">
                <section className="pre-box-sale-block animated">
                  <h3>
                    <span className="icon">
                      <i className="ico-star left" />
                      <i className="ico-star right" />
                      <i className="ico-triangle right-1" />
                      <i className="ico-triangle right-2" />
                      <i className="ico-triangle right-3" />
                      <i className="ico-triangle left-1" />
                      <i className="ico-triangle left-2" />
                      <i className="ico-triangle left-3" />
                      <i className="ico-line line-1" />
                      <i className="ico-line line-2" />
                      <i className="ico-line line-3" />
                      <i className="ico-gift" />
                    </span>
                    <span className="ttl">QUÀ TẶNG &amp; KHUYẾN MÃI</span>
                  </h3>
                  <section className="pre-box-sale__content">
                    <p>
                      <br />
                    </p>
                  </section>
                </section>
              </div>
              {/* danh mục */}
              <div className="mt-5">
                <ul>
                  <li className="leading-[1.5] text-[14px] mb-1 ">
                    <span className="font-bold">Mã sản phẩm:</span>{" "}
                    {data?.productName}
                  </li>
                  <li className="leading-[1.5] text-[14px] mb-1 flex items-center">
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
              <div className=" des-sp w-[200px] h-[40px] text-center leading-[40px] mb-[-2px] bg-[#093] text-[#fff]  ">
                Mô tả sản phẩm
              </div>
            </div>
            <div className="my-[15px] desc-detail-product">
              <div
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            </div>
          </div>
          {/* sản phẩm cùng loại */}
          <div className="md:py-[20px] ">
            <h3 className="mb-[10px] md:mb-[30px] text-[36px] font-bold text-[#2b3152] release-pd">
              Sản phẩm cùng loại
            </h3>
            <Slider {...settings}>
              {dataListproduct?.data &&
                dataListproduct?.data?.length > 0 &&
                dataListproduct?.data?.map((item) => (
                  <div className="px-2 md:px-5" key={item._id}>
                    <ProductItem data={item} />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <Lienhe />
      </StyleContainer>
      <CommonLoadingModal
        isLoadingModalOpen={
          isLoading || isisLoadingCategory || isLoadingListproduct
        }
      />
    </div>
  );
};
const StyleContainer = styled.div`
  .social-btns {
    display: flex;
    gap: 6px;
  }
  .social-btns a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 40px;
    height: 40px;
    line-height: 30px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
    opacity: 0.99;
    padding: 5px;
    border: 1px solid #f0f1f4;
    transition: all 350ms cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }
  .social-btns .btn.facebook:before {
    background-color: #3b5998;
    color: #fff;
  }
  .social-btns .btn.message:before {
    background: linear-gradient(45deg, #006aff, #00c6ff, #a901ff);
    color: #3cf;
  }
  .social-btns .btn.zalo:before {
    background: #3cf;
    color: #3cf;
  }
  .social-btns .btn:before {
    content: "";
    width: 150%;
    height: 150%;
    position: absolute;
    transform: rotate(45deg);
    top: 90%;
    left: -120%;
    transition: all 350ms cubic-bezier(0.31, -0.105, 0.43, 1.59);
    z-index: 1;
  }
  .social-btns .btn:hover:before {
    top: -25%;
    left: -25%;
  }
  .icon {
    color: #3b5998;
    font-size: 20px;
    transition: color 350ms;
    z-index: 2;
    position: relative;
  }
  .message .icon {
    color: #3cf;
    font-size: 20px;
    transition: color 350ms;
    z-index: 2;
    position: relative;
  }
  .zalo .icon {
    color: #3cf;
    font-size: 20px;
    transition: color 350ms;
    z-index: 2;
    position: relative;
  }
  .btn:hover .icon {
    color: #fff;
  }
  .message:hover .icon {
    color: #fff;
  }
  .addtocart_quantity {
    width: 110px;
  }
  .addtocart_quantity .spinner {
    border-radius: 5px;
    background-color: #f7f8fa;
    border: 1px solid #f7f8fa;
    height: 50px;
    padding: 10px 12px 0;
    position: relative;
    display: flex;
  }
  .addtocart_quantity .spinner .quantity-btn {
    display: block;
    cursor: pointer;
    float: left;
    height: 10px;
    margin-top: 10px;
    position: relative;
    width: 10px;
    margin-right: 6px;
  }
  .addtocart_quantity .spinner .quantity-btn:before {
    transition: all 0.3s ease-in-out;
    background-color: #086fcf;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .addtocart_quantity .spinner input {
    border: 0 none;
    color: #16161a;
    font-size: 14px;
    height: 30px !important;
    line-height: 20px !important;
    margin-left: 1px;
    padding-bottom: 0;
    padding-top: 0;
    width: 50px;
    padding-left: 10px;
    outline: none;
    background-color: #f7f8fa;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .addtocart_quantity .spinner .quantity-btn {
    cursor: pointer;
    float: left;
    height: 10px;
    margin-top: 10px;
    position: relative;
    width: 10px;
  }
  .spinner .quantity-btn.plus:after {
    transition: all 0.3s ease-in-out;
    background-color: #086fcf;
    bottom: 0;
    content: "";
    display: block;
    height: 100%;
    left: 50%;
    margin-left: -1px;
    position: absolute;
    top: 0;
    width: 2px;
  }
  .addtocart_button {
    position: relative;
    width: 100%;
  }
  .button_cart {
    width: calc(55% - 5px);
  }
  .button_cart_now {
    width: calc(45% - 5px);
  }
  .btn-effect-default {
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    letter-spacing: 1px;
    transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
      border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 1;
    overflow: hidden;
  }
  .addtocart_button .btn {
    outline: none;
    height: 50px;
    line-height: 50px;
    background-color: #f94e3f;
    border: 1px solid #f94e3f;
    color: #fff;
    text-transform: inherit;
    font-weight: 700;
    font-size: 12px;
    margin: 0;
    padding: 0 5px;
    border-radius: 5px;
  }
  .addtocart_button .btn:not(:last-child) {
    margin-right: 10px;
  }
  .btn-effect-default:before {
    position: absolute;
    content: "";
    display: block;
    left: -2px;
    top: 0;
    right: -2px;
    bottom: 0;
    transform: scale(1, 1);
    transform-origin: left center;
    z-index: -1;
    transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  .btn-effect-default.btn-danger:before,
  .btn-effect-default.btn-red:before {
    background-color: #ff0000;
  }
  .button_cart:hover {
    background-color: #fff;
    color: #f94e3f;
  }
  .btn-effect-default:hover:before {
    transform-origin: right center;
    transform: scale(0, 1);
  }
  .btn span.button_cart__heading {
    font-size: 12px;
  }
  .btn span {
    display: block;
    line-height: 20px;
  }
  .btn span.button_cart__desc {
    font-weight: 400;
    font-size: 9px;
  }
  .btn span {
    display: block;
    line-height: 20px;
  }
  .button_cart_now.btn-green {
    background-color: #02ab65;
    border: 1px solid #02ab65;
  }
  .button_cart_now.btn-green:before {
    background-color: #02ab65;
  }
  .btn-effect-default:hover:before {
    transform-origin: right center;
    transform: scale(0, 1);
  }
  .button_cart_now.btn-green:hover {
    background-color: #fff;
    color: #02ab65;
  }
  /* phần quà tặng */
  .pre-box-sale-block {
    margin: 20px 0 10px 0;
    overflow: visible;
    border-radius: 0 0 4px 4px;
    background-clip: padding-box;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .pre-box-sale-block > h3 {
    height: 42px;
    line-height: 42px;
    background-color: #1c8add;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.31);
    border-radius: 4px 4px 0 0;
    background-clip: padding-box;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    margin-bottom: 0;
  }
  .pre-box-sale-block > h3 span {
    border-radius: 50%;
    text-align: center;
    background: none;
    width: auto;
    height: 42px;
    line-height: 42px;
    position: relative;
    margin: 0;
    font-weight: bold;
    color: #fff;
  }
  .pre-box-sale-block > h3 span.icon::before {
    border-radius: 50%;
    background-clip: padding-box;
    margin: 8px 10px 0;
    background-color: #00f3bb;
    width: 40px;
    height: 40px;
    content: "";
    position: absolute;
    bottom: 5px;
    left: 3px;
    z-index: 1;
  }
  .pre-box-sale-block > h3 span {
    float: left;
    border-radius: 50%;
    text-align: center;
    background: none;
    width: auto;
    height: 42px;
    line-height: 42px;
    position: relative;
    margin: 0;
    font-weight: bold;
    color: #fff;
  }
  .pre-box-sale-block > h3 span.ttl::before {
    display: inline-block;
    content: "";
    width: 40px;
    background-image: ${({ lightBluricon }) =>
      lightBluricon ? `url(${lightBluricon})` : "none"};
    background-repeat: no-repeat;
    background-size: 40px auto;
    top: 0;
    bottom: 1px;
    position: absolute;
    z-index: 2;
    animation: light-ttl 3s infinite;
  }
  .pre-box-sale-block > h3 span i.ico-gift {
    margin-top: -28px;
    margin-right: 5px;
    position: relative;
    z-index: 10;
    display: inline-block;
    width: 60px;
    height: 69px;
    background-size: contain;
    background-image: ${({ giftIcon }) =>
      giftIcon ? `url(${giftIcon})` : "none"};
    background-repeat: no-repeat;
    background-position: center 19px;
    margin-left: 3px;
  }
  .des-sp {
    background: #1c8add;
    border-radius: 50px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  @keyframes light-ttl {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
  .tab-content {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    overflow: hidden;
  }
  .tab-content {
    padding: 10px 10px 50px;
    position: relative;
  }
  .tab-content > .tab-pane {
    border: 0 solid #ccc !important;
    padding: 10px;
  }
  p,
  span {
    line-height: 25px;
  }
  table,
  table tr,
  table td {
    display: flex;
    width: 100% !important;
    height: auto !important;
  }
  table {
    overflow: auto;
  }
  table tbody {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    width: auto !important;
  }
  table,
  table tr,
  table td {
    display: flex;
    width: 100% !important;
    height: auto !important;
  }
  tr td {
    border: 1px solid #999;
    padding: 5px;
  }
  @media (max-width: 768px) {
    .ant-breadcrumb {
      padding: 10px 20px;
    }
    h2 {
      font-size: 20px;
      margin-top: 20px;
    }
    .main-content b {
      font-size: 14px;
    }
    .group-button {
      display: block;
    }
    .group-button .spinner {
      margin-bottom: 10px;
    }
    h3 {
      font-size: 20px;
    }
    .desc-detail-product {
      strong {
        font-size: 14px;
      }
    }
  }
`;

export default DetailProduct;
