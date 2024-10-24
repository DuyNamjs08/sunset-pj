/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/dist";
import logoImg from "../../../../assets/hải đăng.png";

const ProductViewedItem = ({ data }) => {
  return (
    <li>
      <Link
        to={""}
        className="font-bold text-[15px] flex gap-1 text-[#757575] hover:text-[#093]  "
      >
        <span className="product-title">{data?.productName}</span>
        <img
          width={32}
          height={32}
          src={
            typeof data?.image === "string"
              ? data?.image
              : data?.image?.split(",")?.[0]
              ? data?.image?.split(",")?.[0]
              : logoImg
          }
          className="w-[32px] h-[32px]"
          alt="image"
        />
      </Link>
      <span className="amount text-[#b5b7c3] text-[14px] ">Liên hệ</span>
    </li>
  );
};

export default ProductViewedItem;
