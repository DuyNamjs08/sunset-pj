import ReactFlipCard from "reactjs-flip-card";
import styled from "styled-components";
const items = [
  {
    id: 1,
    imageSrc: "https://sunemit.com/wp-content/uploads/2020/09/da3.jpg",
    title: "Tấm Pin Mặt Trời Hiệu Suất Cao",
    description:
      "Những tấm pin mặt trời hiệu suất cao là xương sống của một Hệ thống Điện Mặt Trời. Nó quyết định sự hoạt động bền bỉ, sinh điện liên tục trong 30 năm, phục vụ bạn và gia đình bằng nguồn năng lượng sạch từ thiên nhiên.",
  },
  {
    id: 2,
    imageSrc:
      "https://sunemit.com/wp-content/uploads/2018/05/sunny-boy-wall-e1603188446349.jpg",
    title: "Inverter - Trái tim của Hệ thống",
    description:
      "Inverter Điện Mặt Trời do SUNEMIT cung cấp luôn được đánh giá cao bởi hiệu suất chuyển đổi điện tuyệt vời, cấu hình mạnh mẽ, hoạt động êm ái, thiết kế sang trọng làm tăng thêm thẩm mỹ cho những ngôi nhà sở hữu Hệ thống Điện Mặt Trời Cao Cấp.",
  },
  {
    id: 3,
    imageSrc:
      "https://sunemit.com/wp-content/uploads/2020/09/22222-1-scaled-1-e1603188143839.jpg",
    title: "Giải pháp đồng bộ",
    description:
      "SUNEMIT là Chuyên gia Uy tín hàng đầu về Điện Mặt Trời trong việc cung cấp các giải pháp đồng bộ đến Khách hàng sử dụng cuối...",
  },
  {
    id: 4,
    imageSrc:
      "https://sunemit.com/wp-content/uploads/2020/09/dien-mat-troi-noi-luoi-1.png",
    title: "Điện Mặt Trời Hòa lưới",
    description:
      "Giải pháp Điện Mặt Trời Hòa lưới là tối ưu về chi phí và hiệu quả hoạt động cho những hộ gia đình tại Việt Nam hiện nay.",
  },
  {
    id: 5,
    imageSrc:
      "https://sunemit.com/wp-content/uploads/2020/09/giai-phap-dien-mat-troi-luu-tru-vietcotek-energy-1-840x424-1.png",
    title: "Điện Mặt Trời Hòa lưới có Lưu trữ",
    description:
      "Điện mặt trời hòa lưới có lưu trữ thích hợp sử dụng cho khu vực thường xuyên mất điện lưới, hoặc điện lưới không ổn định...",
  },
];
const GioiThieu3 = () => {
  const styles = {
    card: {
      //   background: "blue",
      //   color: "white",
      //   borderRadius: 20,
      //   padding: "10px",
    },
    frontImage: { width: "100%", borderRadius: "10px" },
    title: { fontSize: "1.2em", fontWeight: "bold", marginTop: "10px" },
    description: { fontSize: "0.9em" },
  };
  return (
    <GioiThieu3Style>
      <section className="page-about">
        <div className="container">
          <div className="title">
            <span className="title__slogan">SẢN PHẨM</span>
            <h2 className="title__heading">
              GIẢI PHÁP NĂNG LƯỢNG SẠCH CHO TRIỆU MÁI NHÀ
            </h2>
            <p className="title__des">
              Mọi thứ tốt nhất bạn cần cho một Hệ thống Điện Mặt Trời hoàn hảo
              trên mái nhà mình !
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div className="" key={item.id}>
                <ReactFlipCard
                  flipTrigger="onHover"
                  frontCss="frontCss h-[246px]"
                  frontStyle={styles.card}
                  backStyle={styles.card}
                  frontComponent={
                    <div className="item-font">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        style={styles.frontImage}
                      />
                      <div className="left-n">{item.title}</div>
                    </div>
                  }
                  backComponent={
                    <div style={styles.description}>{item.description}</div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </GioiThieu3Style>
  );
};
const GioiThieu3Style = styled.div`
  .ReactFlipCard__container {
    height: 246px;
    width: 100%;
  }
  .item-font {
    position: relative;
  }
  .left-n {
    position: absolute;
    bottom: 45px;
    left: 45px;
    font-size: 30px;
    color: #fff;
    font-weight: 600;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .title {
    margin-bottom: 30px;
  }
  .title__slogan {
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    color: #2b3152;
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
    background: #093;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  .title__heading {
    font-size: 36px;
    font-weight: 700;
    color: var(--color-gray);
  }
  .the_content h1 {
    font-size: 25px;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
  }
  .site-about .des p {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 15px;
  }
`;
export default GioiThieu3;
