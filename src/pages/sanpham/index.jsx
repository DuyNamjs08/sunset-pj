import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import LayoutProduct from "../../layout/layoutProduct/LayoutProduct";
import { useProductSearch } from "../../useQuery/useProducts";

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
  const { data: dataProduct, isLoading: isLoadingProduct } = useProductSearch({
    offset: 0,
    productName: "",
  });
  console.log(dataProduct, isLoadingProduct);
  return (
    <div>
      <LayoutProduct breadcrumbData={breadcrumbItems}>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-x-3 gap-y-6 ">
            <CategoryItem />
          </div>
        </div>
      </LayoutProduct>
      <CommonLoadingModal isLoadingModalOpen={false} />
    </div>
  );
};

export default Products;
