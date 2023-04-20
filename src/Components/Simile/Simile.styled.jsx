import styled from "styled-components";

const AnalysisStyled = styled.div`
  position: relative;
  /* height: 250px; */
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 20px;
  /* overflow: auto; */
`;

const WrapperKindTrainee = styled.div`

`;

const KindTraineeRes = styled.p`
  display: inline-block;
  border: 1px solid;
  border-color: #808487;
  width: 125px;
`;

const KindTraineeUsers = styled.p`
  display: inline-block;
  text-align: center;
  border: 1px solid;
  border-color: #808487;
  width: 70px;
`;

const AllResults = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  border: 1px solid;
  border-color: #808487;
  width: 125px;
`;

const AllResultsUsers = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  border: 1px solid;
  border-color: #808487;
  width: 70px;
`;

const InfoCoachBTN = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

export {
  AnalysisStyled,
  ResultsWrapper,
  WrapperKindTrainee,
  KindTraineeRes,
  KindTraineeUsers,
  AllResults,
  AllResultsUsers,
  InfoCoachBTN
}