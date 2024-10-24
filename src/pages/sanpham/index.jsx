import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { CommonLoadingModal } from "../../components/model/LoadingModel";
import { usePaginate } from "../../hooks/usePaginate";
import LayoutProduct from "../../layout/layoutProduct/LayoutProduct";
import { useProduct } from "../../useQuery/useProducts";
import { Pagination } from "@mui/material";
import { useLocation } from "react-router-dom";
import EmtyData from "../../components/emtyData";
import { useEffect } from "react";
import { handleProductView } from "../../feature/homeSlice";
import { useDispatch } from "react-redux";

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
  const location = useLocation();
  const dispatch = useDispatch();
  const { offset, page, handleChange, limit } = usePaginate();
  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    totalPage,
  } = useProduct({
    offset,
    limit,
    productName: "",
    category_id: location.search.split("=")[1],
  });
  useEffect(() => {
    if (dataProduct?.data) {
      dispatch(handleProductView(dataProduct?.data));
    }
  }, [dataProduct?.data]);
  return (
    <div>
      <LayoutProduct breadcrumbData={breadcrumbItems}>
        <div>
          {dataProduct?.data?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6">
              {dataProduct.data.map((item) => (
                <CategoryItem key={item._id} data={item} />
              ))}
            </div>
          ) : (
            <EmtyData />
          )}
        </div>
        {dataProduct?.data?.length > 0 && (
          <div className="mt-4 flex justify-center">
            <Pagination
              count={totalPage ?? 0}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          </div>
        )}
      </LayoutProduct>
      <CommonLoadingModal isLoadingModalOpen={isLoadingProduct} />
    </div>
  );
};

export default Products;
