import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Dữ liệu danh sách tài khoản
const danhSachTaiKhoan = [
  { id: 1, hoTen: "Nguyễn Văn An", ngayMua: "10/08/2024" },
  { id: 2, hoTen: "Trần Thị Bích", ngayMua: "25/07/2024" },
  { id: 3, hoTen: "Lê Văn Chiến", ngayMua: "12/06/2024" },
  { id: 4, hoTen: "Phạm Thị Dung", ngayMua: "15/09/2024" },
  { id: 5, hoTen: "Hoàng Văn Đức", ngayMua: "02/11/2024" },
  { id: 6, hoTen: "Vũ Thị Hoa", ngayMua: "18/10/2024" },
  { id: 7, hoTen: "Bùi Văn Hùng", ngayMua: "05/12/2024" },
  { id: 8, hoTen: "Đặng Thị Mai", ngayMua: "20/09/2024" },
  { id: 9, hoTen: "Nguyễn Văn Nam", ngayMua: "30/08/2024" },
  { id: 10, hoTen: "Trần Thị Ngọc", ngayMua: "15/07/2024" },
];

const Marquee = () => {
  const [taiKhoanGanDay, setTaiKhoanGanDay] = useState([]);

  useEffect(() => {
    const ganDay = danhSachTaiKhoan.slice(0, 20);
    setTaiKhoanGanDay(ganDay);
  }, []);

  return (
    <MarqueeWrapper>
      <div className="content">
        {taiKhoanGanDay.map((taiKhoan) => (
          <span className="item" key={taiKhoan.id}>
            {taiKhoan.hoTen}: đã mua vào ngày {taiKhoan.ngayMua}
          </span>
        ))}
      </div>
    </MarqueeWrapper>
  );
};
const scrollAnimation = keyframes`
  0% { transform: translateX(10%); }
  100% { transform: translateX(-100%); }
`;
const MarqueeWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9f9;
  padding: 10px 0;
  overflow: hidden;
  border-top: 1px solid #ddd;
  z-index: 1000;

  .content {
    display: inline-block;
    white-space: nowrap;
    animation: ${scrollAnimation} 100s linear infinite;

    .item {
      margin-right: 50px;
      font-size: 16px;
      color: #333;
    }
  }
`;

export default Marquee;
