import { useSelector } from "react-redux";
import ProductViewedItem from "../ProductViewedItem/ProductViewedItem";
import React from "react";

const ProductViewed = () => {
  const data = useSelector((state) => state.home.dataProductView);
  return (
    <div className="mb-10">
      <p className="mb-[15px] text-[18px] font-semibold text-[#2b3152] ">
        Sản phẩm vừa xem
      </p>
      <ul className="flex flex-col gap-2">
        {data?.length > 0
          ? data?.slice(0, 8)?.map((item) => (
              <React.Fragment key={item?._id}>
                <ProductViewedItem data={item} />
              </React.Fragment>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ProductViewed;
