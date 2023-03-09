import styled from "styled-components";

const WrapperNames = styled.div`
  /* list-style-type: none; */
  position: absolute;
  /* display: flex; */
  /* flex-direction: column; */
  background-color: rgba(190, 175, 175, 1);
  z-index: 99;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  font-size: 8px;

`;

const NamesStyle = styled.ul`
  list-style-type: none;
  /* position: absolute; */
  /* display: flex;
  flex-wrap: wrap; */
  /* flex-direction: column; */
  /* background-color: rgba(190, 175, 175, 1); */
  /* z-index: 99; */
`;

const ResultRender = styled.span`
  font-size: 12px;
`;

const BTN = styled.button`
  /* width: 40px; */
  border: none;
  /* margin-left: 10px; */
`;

export {
  WrapperNames,
  NamesStyle,
  ResultRender,
  BTN
}