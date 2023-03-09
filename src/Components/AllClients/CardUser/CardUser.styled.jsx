import styled from "styled-components";

const CardWrapper = styled.li`
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border: solid 1px;
  border-radius: 22px;
  padding: 7px;
  margin: 5px;
  background-color: #d7dde1;
  z-index: 2;
`;

const WrapperSelectSeasonTicket = styled.div`
  position: relative;
`;

const WrapperName = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

// const ShowAllNames = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   background-color: rgba(190, 175, 175, 1);
//   z-index: 99;
//   padding: 2px;
//   /* flex-wrap: wrap; */
// `;

const BTN = styled.button`
  border-radius: 12px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: #f3ae92;
  border-color: #f3ae92;
  font-size: 10px;
`;

export {
  CardWrapper,
  WrapperSelectSeasonTicket,
  WrapperName,
  // ShowAllNames,
  BTN
};