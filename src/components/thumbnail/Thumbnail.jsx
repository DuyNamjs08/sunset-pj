import styled from "styled-components";

const Thumbnail = () => {
  return (
    <ThumbnailStyle>
      <div className="thumbail">
        <a
          href="https://sunemit.com/dich-vu-lap-dat-he-thong-dien-nang-luong-mat-troi-tron-goi/"
          title="Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói"
        >
          <picture>
            <source
              srcSet="https://sunemit.com/wp-content/uploads/2021/01/dich-vu-lap-dat-he-thong-dien-mat-troi-533x400.jpg"
              type="image/webp"
            />
            <source
              srcSet="https://sunemit.com/wp-content/uploads/2021/01/dich-vu-lap-dat-he-thong-dien-mat-troi-533x400.jpg"
              type="image/jpeg"
            />
            <img
              className="w-100"
              src="https://sunemit.com/wp-content/uploads/2021/01/dich-vu-lap-dat-he-thong-dien-mat-troi-533x400.jpg"
              alt="Dịch vụ lắp đặt hệ thống điện mặt trời trọn gói"
              width={640}
              height={480}
              loading="lazy"
            />
          </picture>
        </a>
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
