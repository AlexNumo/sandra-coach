import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #6891b4;
  display: flex;
`;

const ListCoach = styled.div`
  border: 2px solid;
  margin: 0px 10px 0px 10px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  /* display: flex;
  flex-direction: row; */
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
`;

const DateTable = styled.div`
  border: 1px solid;
  margin: 5px 5px 5px 0px;
  padding: 5px 5px 5px 10px;

`;

const NameList = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 14px;
  color: #761c0b;
`;

const NameTrainee = styled.p`
  
`;

export {
  Wrapper,
  ListCoach,
  Name,
  DateTable,
  NameList,
  NameTrainee
}