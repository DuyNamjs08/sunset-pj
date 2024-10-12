import { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

const MucLuc = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      href: "#SUNEMIT",
      title:
        "SUNEMIT – Đơn vị lắp đặt hệ thống điện mặt trời uy tín chất lượng",
    },
    {
      href: "#Bao_gia_dich_vu",
      title: "Báo giá dịch vụ lắp đặt điện mặt trời hòa lưới mái nhà",
    },
    {
      href: "#Quy_trinh_dich_vu",
      title: "Quy trình dịch vụ lắp đặt hệ thống điện mặt trời hòa lưới áp mái",
    },
  ];

  return (
    <div
      className={`border border-gray-300 p-2 rounded-lg bg-gray-50 max-w-2/3`}
    >
      <p className="text-xl">Mục Lục</p>
      <label className="cursor-pointer flex my-2" onClick={toggleMenu}>
        <span className="flex items-center gap-1">
          <FaSliders color="#999" />
          <FaSort color="#999" />
        </span>
      </label>

      <ul className={`list-none pl-0 ${isOpen ? "block" : "hidden"}`}>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              className="text-gray-800 text-base hover:text-blue-600 transition-colors duration-300"
              href={item.href}
              title={item.title}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MucLuc;
