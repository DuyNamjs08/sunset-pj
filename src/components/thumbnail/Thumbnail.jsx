/* eslint-disable react/prop-types */
import styled from "styled-components";

const Thumbnail = ({ img }) => {
  return (
    <ThumbnailStyle>
      <div className="thumbail">
        <img
          className="w-100"
          src={img}
          alt="Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói"
          width={640}
          height={480}
          loading="lazy"
        />
      </div>
    </ThumbnailStyle>
  );
};
const ThumbnailStyle = styled.div`
  .thumbail {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
`;
export default Thumbnail;
