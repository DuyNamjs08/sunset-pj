/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./style.css";
import { addDot } from "../../helpers/changeNumber";

const ProductItem = (data) => {
  const urlDispatch = `/san-pham/${data?.data?._id}?category_id=${data?.data?.category_id}`;
  return (
    <div className="item-products">
      <div className="">
        <div className="">
          <div className="images">
            <Link
              to={urlDispatch}
              title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
            >
              <img
                className=" w-full sm:w-100 d-block"
                src={data?.data?.image?.split(",")?.[0]}
                alt="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text">
            <h3>
              <Link
                to={urlDispatch}
                title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              >
                {data?.data?.productName}
              </Link>
            </h3>
            <span className="price">
              {/* <span className="amount">Liên hệ</span> */}
              <span className="flex gap-2">
                {/* <del aria-hidden="true">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      3.630.000
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>
                </del> */}

                <ins aria-hidden="true">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {addDot(data?.data?.price)}
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>
                </ins>
              </span>
            </span>

            <Link
              className="btn-products"
              to={urlDispatch}
              title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" /> Xem chi
              tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
