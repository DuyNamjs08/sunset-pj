import styled from "styled-components";
import Card1 from "../card/Card1";

const ListPj2 = () => {
  const articles = [
    {
      href: "https://sunemit.com/cach-lua-chon-he-thong-dien-mat-troi-phu-hop/",
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2021/06/he-thong-dien-mat-troi-dan-dung-600x337.jpg",
      imgAlt: "Cách lựa chọn Hệ thống Điện mặt trời phù hợp",
      title: "Cách lựa chọn Hệ thống Điện mặt trời phù hợp",
      description:
        "Công trình sử dụng hàng tháng tốn rất nhiều tiền điện thì nên lắp hệ thống điện mặt trời nào hợp lý? Sử dụng điện mặt trời có an toàn...",
      btnText: "Xem thêm",
    },
    {
      href: "https://sunemit.com/giai-phap-dien-mat-troi-cho-cac-co-so-phai-kiem-ke-khi-nha-kinh/",
      imgSrc:
        "https://sunemit.com/wp-content/uploads/2024/09/giai-phap-dien-mat-troi-cho-cac-co-so-phai-kiem-ke-khi-nha-kinh14-600x338.jpg",
      imgAlt: "Giải pháp điện mặt trời cho các cơ sở phải kiểm kê khí nhà kính",
      title: "Giải pháp điện mặt trời cho các cơ sở phải kiểm kê khí nhà kính",
      description:
        "Nhằm hướng tới mục tiêu Net Zero vào năm 2050, Chính phủ đã ban hành một loạt cơ chế quan trọng...",
      btnText: "Xem thêm",
    },
  ];
  return (
    <ListPj2Style>
      <section className="site-project">
        <div className="container">
          <div className="list-project">
            <div className="row">
              {articles.map((article, index) => (
                <div key={index} className="col-md-6 wow fadeInLeft">
                  <Card1
                    title={article.title}
                    des={article.description}
                    img={article.imgSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ListPj2Style>
  );
};
const ListPj2Style = styled.div`
  .site-project {
    padding-bottom: 50px;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .title {
    margin-bottom: 30px;
  }
  .title__slogan {
    /* display: inline-block; */
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
    color: #2b3152;
  }
  .title__des {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    margin-bottom: 0;
    margin-top: 20px;
    width: 80%;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .fadeInLeft:hover h5 {
    color: #093 !important;
  }
`;

export default ListPj2;
