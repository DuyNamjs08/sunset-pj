/* eslint-disable no-unused-vars */
import HTMLReactParser from "html-react-parser";
import { FaChevronRight } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Card1 = ({
  title,
  des,
  btnLabel = "Xem thêm",
  onclick,
  onLink,
  img,
  isBtn,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="img" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            {title}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-400">
          {des ? HTMLReactParser(des.substring(0, 40)) + " ..." : ""}
        </p> */}
        {isBtn ? (
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {btnLabel}
          </a>
        ) : (
          <a
            href="#"
            className=" flex items-center gap-1 underline text-[#093] uppercase text-[14px]"
          >
            {btnLabel} <FaChevronRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card1;
