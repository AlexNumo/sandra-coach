import styled from "styled-components";

const WrapperDay = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  /* width: 100px; */
  width: 697px;
`;

const WrapperBTN = styled.div`
  /* display: inline-block; */
  width: 80px;
  /* height: 35px; */
  /* background-color: aqua; */
`;

const InfoTraineeWrapper = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 70px;
  height: 30px;
  margin: 2px;
  padding: 2px;
  color: black;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Days = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 80px;
  text-align: center;
  /* color: inherit; */
`;

const Time = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 40px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 50px; */
  /* color: inherit; */
`;

const WaitingWrapper = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 697px;
`;

export {
  WrapperDay,
  WrapperBTN,
  Days,
  InfoTraineeWrapper,
  Time,
  WaitingWrapper,
}