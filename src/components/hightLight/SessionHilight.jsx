import styled from "styled-components";
import gradientImage from "../../assets/gradient-1.png";

const SessionHilight = () => {
  return (
    <SessionHilightStyle>
      <section className="site-hightlight">
        <div className="row m-0">
          <div className="col-lg-6 p-0 col-vt wow fadeInLeft">
            <div className="images">
              <img
                className="d-block w-100"
                src="https://sunemit.com/wp-content/uploads/2020/10/Solar-sunemit-chuyen-gia.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0 wow fadeInRight">
            <div className="site-hightlight__content">
              <div>
                <div className="title">
                  <span className="title__slogan">Tại sao chọn SUNEMIT</span>
                  <h2 className="title__heading">
                    Sản phẩm Cao Cấp - Thi công Chuyên Nghiệp Điện năng lượng
                    mặt trời
                  </h2>
                  <p className="title__des" />
                  <p style={{ textAlign: "justify" }}>
                    Với nhân sự chủ đạo là đội ngũ kỹ sư Điện Mặt Trời giàu kinh
                    nghiệm tư vấn và thi công nhiều hệ thống từ năm 2012 tới
                    nay, SUNEMIT tự tin đưa ra các giải pháp Điện Mặt Trời phù
                    hợp nhất với đặc thù công trình của mỗi Chủ đầu tư. Khi lắp
                    Điện Mặt Trời, phải đảm bảo 2 yếu tố quan trọng nhất cho
                    công trình là Hiệu quả sử dụng và Thẩm mỹ chung. SUNEMIT
                    hiện đang là đơn vị làm tốt nhất việc này, lựa chọn hàng đầu
                    mà bạn không thể bỏ qua khi muốn lắp đặt điện mặt trời.
                  </p>
                  <p />
                </div>
                <div className="list-content row">
                  <div className="col-md-6">
                    <div className="item-hightlight">
                      <span className="number">1</span>
                      <h3>Kiến Thức Chuyên Sâu</h3>
                      <p />
                      <p style={{ textAlign: "justify" }}>
                        SUNEMIT sở hữu đội ngũ Chuyên Gia điện mặt trời cao cấp
                        với kinh nghiệm và kiến thức chuyên sâu để hỗ trợ mọi
                        vấn đề kỹ thuật cho khách hàng
                      </p>
                      <p />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-hightlight">
                      <span className="number">2</span>
                      <h3>Sản Phẩm Chất lượng </h3>
                      <p />
                      <p style={{ textAlign: "justify" }}>
                        Bộ sản phẩm Điện Năng lượng Mặt Trời của SUNEMIT được
                        đánh giá là sản phẩm đáng tin cậy nhất cho các công
                        trình chất lượng cao
                      </p>
                      <p />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-hightlight">
                      <span className="number">3</span>
                      <h3>Thi Công chuyên nghiệp</h3>
                      <p />
                      <p style={{ textAlign: "justify" }}>
                        Chỉn chu trong từng mối hàn, kiểm tra kỹ càng từng chi
                        tiết đấu nối là đặc trưng của mỗi công trình mà công ty
                        điện mặt trời SUNEMIT thi công và mang lại sự hài lòng
                        trên mong đợi của khách hàng
                      </p>
                      <p />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-hightlight">
                      <span className="number">4</span>
                      <h3>Chế độ Hậu Mãi tận tình</h3>
                      <p />
                      <p style={{ textAlign: "justify" }}>
                        Bảo hành sản phẩm dài hạn, luôn kèm theo gói Bảo Dưỡng
                        định kỳ miễn phí cho mỗi hợp đồng lắp đặt hệ thống Điện
                        năng lượng Mặt Trời đã trở thành đặc điểm tạo nên thế
                        mạnh của Bộ sản phẩm Điện mặt trời SUNEMIT
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SessionHilightStyle>
  );
};
const SessionHilightStyle = styled.div`
  .row {
    display: flex;
  }
  .col-lg-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  .site-hightlight .images {
    height: 100%;
  }
  .site-hightlight .images img {
    height: 100%;
    object-fit: cover;
  }

  .w-100 {
    width: 100% !important;
  }
  .site-hightlight__content {
    padding: 30px;
  }
  .site-hightlight__content {
    height: 100%;
    background: #093 url(${gradientImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .title__slogan {
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 10px;
    padding-left: 60px;
    position: relative;
  }
  .title__slogan:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 1px;
    background: #fff;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  .title__heading {
    font-size: 36px;
    font-weight: 700;
  }
  .site-hightlight__content .title p {
    width: 95%;
  }
  .site-hightlight__content .title span,
  .site-hightlight__content .title h2,
  .site-hightlight__content .title p {
    color: #fff;
  }
  .site-hightlight .list-content {
    max-width: 95%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
  }
  .col-md-6 {
  }
  .item-hightlight {
    margin-top: 0px;
  }
  .item-hightlight .number {
    font-size: 45px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: -40px;
    display: block;
  }
  .item-hightlight h3 {
    font-size: 18px;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 10px;
  }
  .item-hightlight p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    line-height: 1.5;
  }
`;

export default SessionHilight;
