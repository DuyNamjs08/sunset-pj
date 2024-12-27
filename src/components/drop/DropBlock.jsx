/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import anime from "animejs";
import styled from "styled-components";

const DropBlock = ({ updateCount, img1, img2 }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const squares = gridRef.current.querySelectorAll(".square");
    const cols = 8; // Số cột
    anime({
      targets: squares,
      translateY: [0, 200], // Hiệu ứng rơi xuống
      opacity: [0, 1], // Tăng độ mờ
      delay: (el, i) => {
        const col = i % cols; // Tính cột hiện tại
        const row = Math.floor(i / cols); // Tính hàng hiện tại
        return col * 300 + row * 60; // Cột trễ trước, sau đó từng hàng trong cột
      },
      easing: "easeInOutSine",
      loop: false,
    });
  }, [updateCount]);
  // Tạo các ô vuông
  const renderGrid = () => {
    const rows = 4; // Số hàng
    const cols = 8; // Số cột
    const squares = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        squares.push(
          <div
            key={`${i}-${j}`}
            className="square"
            style={{
              backgroundPosition: `${(j / (cols - 1)) * 100}% ${
                (i / (rows - 1)) * 100
              }%`,
            }}
          />
        );
      }
    }
    return squares;
  };
  return (
    <StyleContainer image={img2}>
      <div className="main-drop">
        <img src={img1} alt="Sylas" />
        <div className="grid-overlay" ref={gridRef}>
          {renderGrid()}
        </div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .main-drop {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .grid-overlay {
      position: absolute;
      top: -200px;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: repeat(4, 1fr); /* Số hàng */
      grid-template-columns: repeat(8, 1fr); /* Số cột */
      z-index: 1;
    }
    .square {
      width: 100%;
      height: 100%;
      opacity: 0;
      background-image: url(${(props) => props?.image}); /* Hình ảnh mới */
      background-size: 800% 400%; /* Cắt hình ảnh theo grid */
      background-repeat: no-repeat;
      transition: opacity 0.1s ease;
    }
  }
  @media (max-width: 768px) {
    .main-drop {
      height: 300px;
    }
  }
`;

export default DropBlock;
