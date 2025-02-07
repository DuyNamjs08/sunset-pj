import { useRef, useState } from "react";
import styled from "styled-components";
import { decodeHtml } from "../../helpers/common";
import parse from "html-react-parser";

/* eslint-disable react/prop-types */
const Questions = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <Style>
      <div className="accordion">
        {data?.map((item, index) => (
          <AccordionItem
            key={index}
            title={item?.name}
            content={item?.description}
            isActive={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </Style>
  );
};
const AccordionItem = ({ title, content, isActive, onClick }) => {
  const contentRef = useRef(null);
  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <h3>{title}</h3>
      </div>
      <div
        ref={contentRef}
        className={`accordion-body ${isActive ? "active" : ""}`}
        style={
          isActive
            ? { maxHeight: contentRef.current.scrollHeight + 50 + "px" }
            : { maxHeight: "0px" }
        }
      >
        <div className="mt-6">{parse(decodeHtml(content))}</div>
      </div>
    </div>
  );
};
const Style = styled.div`
  .accordion-item {
    background: #fff;
    box-shadow: 0 4px 40px #e7e7f2;
    border-radius: 20px;
    margin-bottom: 15px;
  }
  .accordion-header {
    color: #1c3f95;
    padding: 20px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;
    line-height: 1.5;
  }
  .accordion-header.active {
    font-size: 28px;
    transition: all 0.3s;
  }
  .accordion-body {
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.5s ease;
  }
  .accordion-body.active {
    transition: max-height 0.5s ease;
    padding: 0 20px 20px;
  }
  .accordion-content {
    padding: 20px;
    text-align: justify;
  }
`;

export default Questions;
