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

export {
  CardWrapper,
  WrapperSelectSeasonTicket
};