/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const sidebarItems = [
//   {
//     text: "Hướng dẫn cài đặt Wifi cho Inverter Deye qua App SolarMAN",
//     link: "/huong-dan-cai-dat-wifi",
//   },
//   {
//     text: "Giải pháp điện mặt trời cho các cơ sở phải kiểm kê khí nhà kính năm 2024 theo Quyết định 13/2024/QĐ-TTg",
//     link: "/giai-phap-dien-mat-troi",
//   },
//   {
//     text: "Những tính năng an toàn được tích hợp trong biến tần năng lượng mặt trời",
//     link: "/tinh-nang-an-toan",
//   },
//   {
//     text: "MPPT là gì trong hệ thống năng lượng mặt trời?",
//     link: "/mppt",
//   },
//   {
//     text: "Cách kết nối nhiều bộ biến tần năng lượng mặt trời với nhau",
//     link: "/ket-noi-bien-tan",
//   },
// ];

const Sidebar = ({ data, setId, id }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dự án liên quan</h2>
      <ul className="space-y-2">
        {data?.map((item, index) => (
          <li key={index} className="text-gray-700 cursor-pointer">
            <div
              onClick={() => setId(item._id)}
              className={`flex  hover:text-green-500 ${
                id === item._id ? "text-green-500" : ""
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
