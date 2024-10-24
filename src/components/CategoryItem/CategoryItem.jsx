/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/dist";
import "./style.css";
import logoImg from "../../assets/hải đăng.png";
const CategoryItem = ({ data }) => {
  return (
    <div className="item-category">
      <div className="">
        <div className="">
          <div className="images">
            <Link to={"/san-pham/" + data?._id}>
              <img
                className="w-100 d-block"
                src={
                  typeof data?.image === "string"
                    ? data?.image
                    : data?.image?.split(",")?.[0]
                    ? data?.image?.split(",")?.[0]
                    : logoImg
                }
                alt="img"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text">
            <h3>
              <Link to={"/san-pham/" + data?._id}>{data?.productName}</Link>
            </h3>
            <span className="price">
              <span className="amount">Liên hệ</span>
            </span>
            <Link className="btn-category" to={"/san-pham/" + data?._id}>
              <i className="fa fa-shopping-cart" aria-hidden="true" /> Xem chi
              tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
