/* eslint-disable react/prop-types */
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadCum = ({ data }) => {
  return (
    <BreadcrumbStyle>
      <Breadcrumb className="container" separator=">">
        {data.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item.path ? <Link to={item.path}>{item.title}</Link> : item.title}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </BreadcrumbStyle>
  );
};
const BreadcrumbStyle = styled.div`
  background-color: #f5f6f7;
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 10px 0;
    margin: 0 auto;
  }
  .ant-breadcrumb-link {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }
  .ant-breadcrumb li:last-child {
    color: #009933;
  }
`;

export default BreadCum;
