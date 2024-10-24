/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

const Sidebar = ({ data, onClick = () => {} }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dự án liên quan</h2>
      <ul className="space-y-2">
        {data?.map((item, index) => (
          <li key={index} className="text-gray-700 cursor-pointer">
            <div
              onClick={() => onClick(item?._id)}
              className={`flex  hover:text-green-500 ${
                location.pathname.split("/")[2] === item._id
                  ? "text-green-500"
                  : ""
              }`}
            >
              <span className="font-semibold">{item.text}</span>{" "}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
