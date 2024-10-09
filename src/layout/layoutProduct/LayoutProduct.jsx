import BreadCum from "../../components/bread-cum/BreadCum";
import KhoiPhai from "../../components/KhoiPhai/KhoiPhai";
import Lienhe from "../../components/lien-he-chung/Lienhe";

const LayoutProduct = (LayoutProduct) => {
  const { breadcrumbData = [], children } = LayoutProduct;
  return (
    <div className="mb-[30px]">
      <BreadCum data={breadcrumbData} />
      <div className="container">
        <div className="my-[30px]  flex max-md:flex-wrap gap-[30px] ">
          <div className="w-full md:w-[75%]">{children}</div>
          {/* bên phải */}
          <div className="w-full md:w-[25%]">
            <KhoiPhai />
          </div>
        </div>
        <Lienhe />
      </div>
    </div>
  );
};

export default LayoutProduct;
