import CategoryItem from "../../components/CategoryItem/CategoryItem";
import LayoutProduct from "../../layout/layoutProduct/LayoutProduct";

const breadcrumbItems = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Sản phẩm Điện Năng Lượng Mặt Trời",
    path: "/san-pham",
  },
];
const Products = () => {
  return (
    <div>
      <LayoutProduct breadcrumbData={breadcrumbItems}>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-x-3 gap-y-6 ">
            <CategoryItem />
          </div>
        </div>
      </LayoutProduct>
    </div>
  );
};

export default Products;
