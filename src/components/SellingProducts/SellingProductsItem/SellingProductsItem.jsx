import { Link } from "react-router-dom/dist";

const SellingProductsItem = (SellingProductsItem) => {
  return (
    <div className="flex gap-2.5">
      <div className="w-[30%]">
        <Link to="" title="Tấm pin năng lượng mặt trời SUNEMIT SU-01 370W">
          <img
            src="https://sunemit.com/wp-content/uploads/2021/07/tam-pin-nang-luong-mat-troi-sunemit-su-01-loai-p-270x250.jpg"
            alt="Tấm pin năng lượng mặt trời SUNEMIT SU-01 370W"
          />
        </Link>
      </div>
      <div className="w-[70%]">
        <div className="">
          <h3>
            <Link to="" className="text-[15px]  mb-1 text-[#757575]  ">
              Tấm pin năng lượng mặt trời SUNEMIT SU-01 370W
            </Link>
          </h3>
          <div className="">
            <span className="flex items-center gap-1">
              <span className="text-[10px]">
                <del>
                  3.350.000
                  <span className="">₫</span>
                </del>
              </span>

              <span className="text-[14px] text-[#093] ">
                <bdi>
                  3.150.000
                  <span className="">₫</span>
                </bdi>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProductsItem;
