/* eslint-disable no-unused-vars */
import { Pagination } from "antd";

import { useState } from "react";

import LayoutProduct from "../../layout/layoutProduct/LayoutProduct";
import ProductItem from "../../components/productItem/ProductItem";
import "./style.css";
import { useProduct } from "../../useQuery/useProducts";
import { usePaginate } from "../../hooks/usePaginate";

const breadcrumbItems = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Sản phẩm Điện Năng Lượng Mặt Trời",
    path: "/san-pham",
  },
  {
    title: "Tấm pin năng lượng mặt trời",
    path: "",
  },
];
const ListProduct = (ListProduct) => {
  const { type } = ListProduct;
  const {
    offset,
    page,
    handleChange,
    limit,
    setOffset,
    setPage,
    setSearchParams,
    searchParams,
  } = usePaginate();
  const { data, isLoading, refetch, totalPage } = useProduct({
    limit,
    offset,
    category_id: searchParams.get("category_id") ?? "",
  });
  console.log(data);
  return (
    <LayoutProduct breadcrumbData={breadcrumbItems}>
      <div>
        <div className="mb-[30px] max-md:flex-col max-md:gap-3 bg-[#fafafa] pl-[38px] pr-[19px] flex justify-between  items-center py-3 min-h-[67px]">
          <Pagination
            page={page}
            onChange={(page) => setPage(page)}
            align="start"
            defaultCurrent={1}
            total={50}
          />

          <select
            name="orderby"
            className="h-10 border border-[#f4f4f4] text-[16px] rounded-md"
            aria-label="Đơn hàng của cửa hàng"
          >
            <option value="menu_order" selected="selected">
              Thứ tự mặc định
            </option>
            <option value="popularity">Thứ tự theo mức độ phổ biến</option>
            <option value="date">Mới nhất</option>
            <option value="price">Thứ tự theo giá: thấp đến cao</option>
            <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
          </select>
        </div>
        <h1 className="text-[30px] my-[30px] font-bold text-center ">
          Inverter năng lượng mặt trời
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6">
          {data?.data &&
            data?.data?.length > 0 &&
            data?.data?.map((item) => (
              <ProductItem key={item._id} data={item} />
            ))}
        </div>
        <div className="mb-[30px] bg-[#fafafa] pl-[38px] pr-[19px] my-2 flex justify-center  items-center h-[50px]">
          <Pagination
            current={page}
            onChange={(page) => setPage(page)}
            align="start"
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>
    </LayoutProduct>
  );
};

export default ListProduct;
