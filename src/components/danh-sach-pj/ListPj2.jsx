/* eslint-disable react/prop-types */
import styled from "styled-components";
import Card1 from "../card/Card1";
import { decodeHtml, getFirstValidImage } from "../../helpers/common";
import parse from "html-react-parser";
import logoImg from "../../assets/hải đăng.png";

const ListPj2 = ({ data = [] }) => {
  return (
    <ListPj2Style>
      <section className="site-project">
        <div className="container">
          <div className="list-project">
            <div className="row">
              {data?.map((article, index) => {
                return (
                  <div key={index} className="col-md-6 wow fadeInLeft">
                    <Card1
                      title={article?.name}
                      des={parse(decodeHtml(article?.description))}
                      id={article?._id}
                      img={
                        getFirstValidImage(article?.description)
                          ? getFirstValidImage(article?.description)
                          : article?.image?.split(",")?.[0]
                          ? article?.image?.split(",")?.[0]
                          : logoImg
                      }
                    />
                  </div>
                );
              })}
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
  }
  .col-md-6 {
    width: 30%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .fadeInLeft:hover h5 {
    color: #093 !important;
  }
  @media (max-width: 768px) {
    .row {
      grid-template-columns: repeat(1, 1fr);
    }
    .col-md-6 {
      width: 100%;
    }
  }
`;

export default ListPj2;
