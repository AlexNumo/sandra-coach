import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
  border: 2px solid;
  /* width: 350px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: #eabfed;
`;

const WrapperStyle = styled.div`
  border: 2px solid;
  width: 350px;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: #eabfed;
`;

const BTNSubmit = styled.button`
  background-color: #78789e;
  color: #1a1818;
  width: 150px;
`;

const ERROR = styled.div`
  background-color: red;
  border: 1px solid;
  width: 100%;
  height: 20px;
  display: flex;
  position: relative;
`;

export {
  Wrapper,
  WrapperStyle,
  BTNSubmit,
  ERROR
};