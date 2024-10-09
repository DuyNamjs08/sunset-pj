import BreadCum from "../../components/bread-cum/BreadCum";
import CalendarCustom from "../../components/Datepicker";

const LichKhaoSat = () => {
  const breadcrumbItems = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Đặt lịch khảo sát",
      path: "",
    },
  ];
  return (
    <div>
      <BreadCum data={breadcrumbItems} />
      <div className="max-w-xl mx-auto">
        <CalendarCustom />
      </div>
    </div>
  );
};

export default LichKhaoSat;
