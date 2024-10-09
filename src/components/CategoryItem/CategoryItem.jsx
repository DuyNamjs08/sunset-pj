import { Link } from "react-router-dom/dist";
import "./style.css";
const CategoryItem = (CategoryItem) => {
  return (
    <div className="item-category">
      <div className="">
        <div className="">
          <div className="images">
            <Link
              to={"/tam-pin-mat-troi/"}
              title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
            >
              <img
                className="w-100 d-block"
                src="https://sunemit.com/wp-content/uploads/2024/06/inverter-hoa-luoi-1-pha-deye-sun-3.6-6k-g4-270x250.jpg"
                alt="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="text">
            <h3>
              <Link
                to={"/tam-pin-mat-troi/"}
                title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              >
                Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G
              </Link>
            </h3>
            <span className="price">
              <span className="amount">Liên hệ</span>
            </span>
            <Link
              className="btn-category"
              to={"/tam-pin-mat-troi/"}
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

export default CategoryItem;
