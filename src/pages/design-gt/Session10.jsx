// import React from "react";

import styled from "styled-components";
import bgSession1 from "./assets/ss8.png";

const Session8 = () => {
  return (
    <Session8Style bgSession1={bgSession1}>
      <div className="container">
        <div className="session1-style">
          <div className="content"></div>
        </div>
      </div>
    </Session8Style>
  );
};
const Session8Style = styled.div`
  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .session1-style {
    height: 100vh;
    margin-top: 40px;
  }
  .content {
    height: 100%;
    width: 100%;
    background: url(${(props) => props.bgSession1}) no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  @media (max-width: 768px) {
    .session1-style {
      height: auto;
      margin-top: 40px;
    }
    .content {
      background-size: contain;
      height: 240px;
    }
  }
`;
export default Session8;
