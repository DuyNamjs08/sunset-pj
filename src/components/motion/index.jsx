import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Motion = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <MotionStyle>
      <div className="flex items-center justify-center bg-black h-[800px] cursor-pointer">
        <div
          className="flip-card w-[600px] h-[360px] rounded-md"
          onClick={handleFlip}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
              style={{
                backgroundImage: `https://drive.google.com/drive/folders/1I6CSL3IrSGsq8KTLhUS6lXOoftM2VZuM`,
              }}
            >
              <h1 className="text-2xl font-bold">Sky</h1>
              <p>Live on top of the world</p>
            </div>

            <div
              className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
              style={{
                backgroundImage: `https://drive.google.com/drive/folders/1I6CSL3IrSGsq8KTLhUS6lXOoftM2VZuM`,
              }}
            >
              <h1 className="text-2xl font-bold">Earth</h1>
              <p>Or in the maze of the city</p>
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
    transition: transform 0.6s;
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-back {
    transform: rotate(180deg);
  }
`;
export default Motion;
