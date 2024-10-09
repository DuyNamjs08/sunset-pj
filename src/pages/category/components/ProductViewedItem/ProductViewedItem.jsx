import { Link } from "react-router-dom/dist";

const ProductViewedItem = (ProductViewedItem) => {
  return (
    <li>
      <Link
        to={""}
        className="font-bold text-[15px] flex gap-1 text-[#757575] hover:text-[#093]  "
      >
        <span className="product-title">
          Tấm pin năng lượng mặt trời SUNEMIT 560W N-type (Hàng xuất khẩu)
        </span>
        <img
          width={32}
          height={32}
          src="https://sunemit.com/wp-content/uploads/2024/06/tam-pin-nang-luong-mat-troi-sunemit-560w-300x300.jpg"
          className="w-[32px] h-[32px]"
          alt=""
          decoding="async"
          loading="lazy"
          srcSet="https://sunemit.com/wp-content/uploads/2024/06/tam-pin-nang-luong-mat-troi-sunemit-560w-300x300.jpg 300w, https://sunemit.com/wp-content/uploads/2024/06/tam-pin-nang-luong-mat-troi-sunemit-560w-100x100.jpg 100w"
        />
      </Link>
      <span className="amount text-[#b5b7c3] text-[14px] ">Liên hệ</span>
    </li>
  );
};

export default ProductViewedItem;
