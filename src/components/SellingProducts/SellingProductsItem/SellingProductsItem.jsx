/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/dist";
import logoImg from "../../../assets/hải đăng.png";
import { addDot } from "../../../helpers/changeNumber";

const SellingProductsItem = ({ data }) => {
  return (
    <div className="flex gap-2.5">
      <div className="w-[30%]">
        <Link to="">
          <img
            src={
              typeof data?.image === "string"
                ? data?.image
                : data?.image?.split(",")?.[0]
                ? data?.image?.split(",")?.[0]
                : logoImg
            }
            alt="Tấm pin năng lượng mặt trời"
          />
        </Link>
      </div>
      <div className="w-[70%]">
        <div className="">
          <h3>
            <Link to="" className="text-[15px]  mb-1 text-[#757575]  ">
              {data?.productName}
            </Link>
          </h3>
          <div className="">
            <span className="flex items-center gap-1 text-green-400 hover:text-green-600 cursor-pointer">
              {Number(data?.price) ? addDot(data?.price) : data?.price}
              <span className="woocommerce-Price-currencySymbol">
                {Number(data?.price) ? "đ" : ""}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProductsItem;
