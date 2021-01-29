import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & ~ & {
    margin-top: 14px;
  }
`;

const Error = styled.div`
  color: red;
  text-align: left;
  font-size: 10px;
`;

const FormItem = ({ children, error }) => (
  <Wrapper>
    {children}
    {error && <Error>{error}</Error>}
  </Wrapper>
);

export default FormItem;
