/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button1 = ({ className, label, onClick }) => {
  return (
    <Button1Style>
      <button
        onClick={onClick}
        className={`btn-custom border-white ${className}`}
      >
        {label}
      </button>
    </Button1Style>
  );
};
const Button1Style = styled.div`
  button {
    width: max-content;
    height: 60px;
    min-width: 210px;
    font-size: 16px;
    color: #fff;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    border: 1px solid #fff;
    &:hover {
      background: #093;
    }
  }
  .border-blue {
    background: none;
    border: 1px solid #093;
    color: #2b3152;
    &:hover {
      color: #fff;
    }
  }
`;
export default Button1;
