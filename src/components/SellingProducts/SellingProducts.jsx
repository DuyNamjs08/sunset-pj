import SellingProductsItem from "./SellingProductsItem/SellingProductsItem";

const SellingProducts = (SellingProducts) => {
  return (
    <div>
      <h2 className="mb-[15px] text-[18px] font-semibold text-[#2b3152] ">
        Sản phẩm bán chạy
      </h2>
      <div className="flex flex-col gap-5">
        <SellingProductsItem />
      </div>
    </div>
  );
};

export default SellingProducts;
