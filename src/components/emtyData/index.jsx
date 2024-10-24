import packageEmty from "../../assets/Package_empty_v2.png";

const EmtyData = () => {
  return (
    <div className="flex justify-center mt-[18%]">
      <div>
        <img src={packageEmty} alt="packageEmty" />
        <div className="text-[20px] font-semibold text-[#B6B6B6] ">
          Không có dữ liệu
        </div>
      </div>
    </div>
  );
};

export default EmtyData;
