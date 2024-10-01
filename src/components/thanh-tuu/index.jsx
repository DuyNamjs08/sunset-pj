import styled from "styled-components";
import icon1 from "../../assets/icon_boxes_14-78x78-1.png";
import icon2 from "../../assets/icon_boxes_16-78x78-2.png";
import icon3 from "../../assets/icon_boxes_15-78x78-3.png";
import icon4 from "../../assets/icon_boxes_17-94x94-4.png";
import useCounter from "../../hooks/useCounter";

const Achivement = () => {
  const [yearOfEx, ProJDone, Customer, Partner] = useCounter(
    [12, 10246, 22399, 1256],
    1
  );
  const achievements = [
    {
      imgSrc: icon1,
      number: yearOfEx,
      text: "Số năm kinh nghiệm",
    },
    {
      imgSrc: icon2,
      number: ProJDone,
      text: "Dự án đã hoàn thành",
    },
    {
      imgSrc: icon3,
      number: Customer,
      text: "Khách hàng vui vẻ",
    },
    {
      imgSrc: icon4,
      number: Partner,
      text: "Đối tác kinh doanh",
    },
  ];
  return (
    <AchivementStyle>
      <section className="site-achievement">
        <div className="container">
          <div className="row">
            {achievements.map((item, index) => (
              <div className="col-md-3 col-6 col-custom" key={index}>
                <div className="item-achievement">
                  <div className="images">
                    <img src={item.imgSrc} alt={"img"} />
                  </div>
                  <div className="text plust">
                    <span className="number">{item.number}</span>
                    <p className="m-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AchivementStyle>
  );
};
const AchivementStyle = styled.div`
  .site-achievement {
    background-color: #f8fbff;
    padding: 60px 0;
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
  .col-md-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .site-achievement .item-achievement {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .site-achievement .item-achievement .images {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40px;
    flex: 0 0 40px;
    max-width: 40px;
  }
  .site-achievement .item-achievement .text {
    margin-top: -10px;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    padding-left: 15px;
  }
  .site-achievement .item-achievement .text .number {
    color: #27323d;
    font-size: 48px;
    line-height: 50px;
    font-weight: 700;
  }
  .site-achievement .item-achievement .text p {
    color: #848d95;
    font-size: 16px;
    line-height: 22px;
  }
`;
export default Achivement;
