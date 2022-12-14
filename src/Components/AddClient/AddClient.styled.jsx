import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const CleintWrapper = styled.div`
  border: 1px solid;
  margin-top: 5px;
`;

export {
  Wrapper,
  BTNSubmit,
  ERROR,
  CleintWrapper
};