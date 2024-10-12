import styled from "styled-components";

const GioiThieu4 = () => {
  return (
    <GioiThieu4Style>
      <div>
        <section
          className="page-about-dowload"
          style={{
            backgroundImage:
              "url(https://sunemit.com/wp-content/uploads/2020/09/front_img_bg_05.jpg)",
          }}
        >
          <div className="container">
            <div className="text-center">
              <img
                src="https://sunemit.com/wp-content/uploads/2020/09/icon_img_01.png"
                alt="Danh mục sản phẩm 2020"
              />
              <h2>Danh mục sản phẩm 2020</h2>
              <a
                className="btn-custom bg-white"
                href="https://sunemit.com/wp-content/uploads/2020/10/Catalogue-SUNEMIT-09092020.pdf"
              >
                Dowload Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </GioiThieu4Style>
  );
};
const GioiThieu4Style = styled.div`
  .page-about-dowload {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px 0;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .page-about-dowload img {
    margin: 0 auto 15px;
  }
  .page-about-dowload h2 {
    font-size: 36px;
    color: #fff;
    margin-bottom: 15px;
  }
  .text-center {
    text-align: center !important;
  }

  .btn-custom {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: 60px;
    min-width: 210px;
    font-size: 16px;
    color: #2b3152;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
  }
  .bg-white {
    background: #fff;
    border: 1px solid #fff;
  }
`;
export default GioiThieu4;
