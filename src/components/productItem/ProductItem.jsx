import "./style.css";

const ProductItem = (ProductItem) => {
  const {} = ProductItem;
  return (
    <div className="item-products">
      <div className="">
        <div className="">
          <div className="images">
            <a
              href="https://sunemit.com/san-pham/inverter-hoa-luoi-1-pha-deye-sun-3-6-6k-g/"
              title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
            >
              <img
                className="w-100 d-block"
                src="https://sunemit.com/wp-content/uploads/2024/06/inverter-hoa-luoi-1-pha-deye-sun-3.6-6k-g4-270x250.jpg"
                alt="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              />
            </a>
          </div>
        </div>
        <div className="">
          <div className="text">
            <h3>
              <a
                href="https://sunemit.com/san-pham/inverter-hoa-luoi-1-pha-deye-sun-3-6-6k-g/"
                title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
              >
                Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G
              </a>
            </h3>
            <span className="price">
              <span className="amount">Liên hệ</span>
            </span>
            <a
              className="btn-products"
              href="https://sunemit.com/san-pham/inverter-hoa-luoi-1-pha-deye-sun-3-6-6k-g/"
              title="Inverter hòa lưới 1 pha DEYE 3,6-6KW | SUN-3,6/4/4,6/5/6K-G"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" /> Xem chi
              tiết
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
