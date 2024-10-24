import styled from "styled-components";

export const StylePost = styled.div`
  /* padding: 0 15%; */
  .title {
    font-size: 30px;
    text-transform: uppercase;
  }
  h1 strong {
    font-size: 20px;
    margin-bottom: 20px;
  }
  p {
    color: #333;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-size: 16px;
  }
  ul {
    list-style: disc;
    padding-left: 18px;
    padding-bottom: 5px;
  }
  iframe {
    max-width: 600px;
    height: 450px;
    margin: 0 auto;
  }
  figure {
    width: 100% !important;
  }
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  a {
    color: #4e73df;
    text-decoration: underline;
    transition: all 0.3s;
    :hover {
      color: #0056b3;
    }
  }
  .table {
    width: 100%;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
  }
  .table tbody > tr > td {
    border: 1px solid #ddd;
    padding: 7px 10px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    padding: 0;
    iframe {
      width: 100%;
      height: 300px;
    }
  }
`;
