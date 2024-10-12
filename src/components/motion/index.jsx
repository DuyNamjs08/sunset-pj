import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import img1 from "../../assets/Zed_0.jpg";
import img2 from "../../assets/images.jpeg";

const Motion = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleMouseEnter() {
    setIsFlipped(true);
  }

  function handleMouseLeave() {
    setIsFlipped(false);
  }

  return (
    <MotionStyle>
      <div className="cursor-pointer">
        <div
          className="flip-card h-[360px] rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%] relative"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front side */}
            <div
              className="w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg absolute"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={img1}
                alt="front"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="content">
                <h1 className="text-2xl font-bold">Sky</h1>
                <p>Live on top of the world</p>
              </div>
            </div>

            {/* Back side */}
            <div
              className="w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg absolute"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={img2}
                alt="back"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="content">
                <h1 className="text-2xl font-bold">Sky</h1>
                <p>Live on top of the world</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionStyle>
  );
};

const MotionStyle = styled.div`
  .flip-card {
    perspective: 1000px;
  }
  .flip-card-inner {
    position: relative;
  }
  .flip-card-inner .content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export default Motion;
