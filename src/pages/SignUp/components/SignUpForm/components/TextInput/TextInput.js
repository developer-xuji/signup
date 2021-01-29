import styled, { css } from "styled-components";

const TextInput = styled.input`
  box-sizing: border-box;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 5px !important;
  padding: 6px 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  min-height: 50px;

  ${(props) =>
    props.hasError &&
    css`
      border-color: red;
    `}
`;

export default TextInput;
