import { useSelector } from "react-redux";
import SellingProductsItem from "./SellingProductsItem/SellingProductsItem";
import React from "react";

const SellingProducts = () => {
  const data = useSelector((state) => state.home.dataProductView);
  return (
    <div>
      <h2 className="mb-[15px] text-[18px] font-semibold text-[#2b3152] ">
        Sản phẩm bán chạy
      </h2>
      <div className="flex flex-col gap-5">
        {data?.length > 0
          ? data?.slice(0, 8)?.map((item) => (
              <React.Fragment key={item?._id}>
                <SellingProductsItem data={item} />
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  );
};

export default SellingProducts;
