import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${(props) => {
    if (props.color === "light-blue") {
      return "#668cff";
    }
    if (props.color === "teal") {
      return "#00b3b3";
    }
    if (props.color === "green") {
      return "green";
    }
    return "#737472";
  }};
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 4px;

  :hover {
    opacity: 0.7;
  }
`;

export default Button;
