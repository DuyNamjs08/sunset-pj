import styled from "styled-components";
import nb1 from "../../assets/nb1.jpg";
import nb2 from "../../assets/nb2.jpg";
import nb3 from "../../assets/nb3.jpg";
import nb4 from "../../assets/nb4.jpg";

const ListItem1 = () => {
  const items = [
    {
      link: "/san-pham/",
      imgSrc: nb1,
      title: "Hệ thống Điện năng lượng mặt trời Hòa lưới có lưu trữ",
      description:
        "Hải Đăng Solar Energy cung cấp dịch vụ lắp đặt hệ thống điện năng lượng mặt trời hòa lưới có lưu trữ chất lượng cao, bảo hành lâu dài với chi phí tiết kiệm nhất. Liên hệ với chúng tôi qua Hotline 094 6868 498 để được tư vấn hệ…",
      delay: "0.2s",
    },
    {
      link: "/san-pham/",
      imgSrc: nb2,
      title: "Hệ thống điện mặt trời Hòa lưới bám tải không lưu trữ",
      description:
        "Lắp đặt Hệ thống điện năng lượng mặt trời hòa lưới bám tải không lưu trữ cho hộ gia đình hiện nay được đông đảo mọi người quan tâm bởi chi phí lắp đặt, giá thành thi công rẻ; thiết bị hiện đại vì thế mà hệ thống điện mặt trời…",
      delay: "0.4s",
    },
    {
      link: "/san-pham/",
      imgSrc: nb3,
      title: "Tấm pin năng lượng mặt trời",
      description:
        "Tấm pin năng lượng mặt trời là một thiết bị không thể thiếu trong hệ thống năng lượng mặt trời. Nó có chức năng chuyển đổi năng lượng ánh sáng thành điện năng để cung cấp cho các thiết bị điện trong nhà. Vậy Tấm pin năng lượng…",
      delay: "0.6s",
    },
    {
      link: "/san-pham/",
      imgSrc: nb4,
      title: "Bộ lưu trữ điện năng lượng mặt trời",
      description:
        "Bộ lưu trữ năng lượng mặt trời (hay pin lưu trữ năng lượng mặt trời) gồm hai loại là pin lithium và ắc quy lưu trữ. Thiết bị này có vai trò lưu trữ nguồn năng lượng từ các tấm pin mặt trời để sử dụng vào…",
      delay: "0.8s",
    },
  ];

  return (
    <ListItem1Style>
      <section className="site-cateogrys">
        <div className="container">
          <div className="title">
            <span className="title__slogan wow fadeInDown">
              NGUỒN NĂNG LƯỢNG SẠCH CỦA NGƯỜI VIỆT
            </span>
            <h2 className="title__heading wow fadeInDown" data-wow-delay=".15">
              SẢN PHẨM NỔI BẬT
            </h2>
            <p className="title__des wow fadeInDown" data-wow-delay=".3">
              Bộ sản phẩm Điện Mặt Trời Cao cấp của{" "}
              <span className="text-[#fa9538]">Hải Đăng Solar Energy</span> đáp
              ứng 100% tiêu chuẩn điện sạch an toàn, phù hợp với những công
              trình hiện đại, kiến tạo Môi trường sống xanh - sạch - an toàn -
              văn minh
            </p>
          </div>
          <div className="site-cateogrys__content">
            <div className="row">
              {items.map((item, index) => (
                <div
                  className="col-md-4 wow fadeInDown"
                  data-wow-delay={item.delay}
                  key={index}
                >
                  <div className="content-categorys">
                    <div className="images">
                      <a href={item.link}>
                        <img src={item.imgSrc} alt={item.title} />
                      </a>
                    </div>
                    <div className="text">
                      <h3>
                        <a href={item.link}>{item.title}</a>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ListItem1Style>
  );
};
const ListItem1Style = styled.div`
  .site-cateogrys {
    padding: 60px 0;
    background: #f8fbff;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .site-cateogrys .title {
    text-align: center;
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
    position: relative;
  }
  .title__heading {
    font-size: 36px;
    font-weight: 700;
    color: #2b3152;
  }
  .site-cateogrys .title p {
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .title__des {
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col-md-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .content-categorys .text h3 a {
    display: block;
    font-size: 24px;
    color: #2b3152;
    margin: 20px 0;
  }
  .content-categorys:hover .text h3 a {
    color: #093;
  }
  .content-categorys .text p {
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: #777b93;
    text-align: justify;
  }
  .content-categorys {
    text-align: center;
    margin-bottom: 20px;
  }
  .content-categorys .images {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    background: #fff;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .content-categorys:hover .images {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-box-shadow: 0 0 30px #093;
    box-shadow: 0 0 30px #093;
  }
  img,
  a {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  a {
    text-decoration: none !important;
  }
  .content-categorys .images img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
  .content-categorys:hover .images img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export default ListItem1;
