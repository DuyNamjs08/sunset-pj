import { useState } from "react";
import ProductViewed from "../../pages/category/components/ProductViewed/ProductViewed";
import SellingProducts from "../SellingProducts/SellingProducts";

const KhoiPhai = () => {
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = () => {};
  return (
    <>
      <div className=" bg-[#fafcff] pl-3 mb-10 flex justify-between border border-[#eff2f7]  h-[40px]">
        <input
          value={valueSearch}
          className=" flex w-full  rounded text-[12px] "
          placeholder="Tìm sản phẩm…"
          onChange={(e) => setValueSearch(e.target?.value)}
        />
        <button
          onClick={handleSearch}
          className="w-[60px] flex justify-end pr-3 items-center"
          value="Tìm kiếm"
        >
          <svg fill="none" viewBox="0 0 24 24" height="1.3em" width="1.3em">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ProductViewed />
      <SellingProducts />
    </>
  );
};

export default KhoiPhai;
