import ProductViewedItem from "../ProductViewedItem/ProductViewedItem";

const ProductViewed = () => {
  return (
    <div className="mb-10">
      <p className="mb-[15px] text-[18px] font-semibold text-[#2b3152] ">
        Sản phẩm vừa xem
      </p>
      <ul className="flex flex-col gap-2">
        <ProductViewedItem />
      </ul>
    </div>
  );
};

export default ProductViewed;
