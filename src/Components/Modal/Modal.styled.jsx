import styled from "styled-components";

const WrapperModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(194, 209, 99, 0.5);
  backdrop-filter: blur(2px);
`;

const Wrapper = styled.div`
  position: relative;
  height: 450px;
  margin-top: 100px;
  padding-left: 5px;
  padding-right: 5px;
  border: 3px solid;
  border-radius: 12px;
  background: rgb(246, 205, 205);
  overflow: auto;
`;

const CardCoach = styled.div`
  border-radius: 12px;
  border: 1px solid;
  margin: 1px;
  padding: 2px 10px 2px 10px;
`

const WrapperInfo = styled.div`
  /* width: 200px; */
  display: flex;
  justify-content: space-between;
`;

const NameCoach = styled.p`
  width: 200px;
  color: #56528d;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 14px;
`;

const ListUsers = styled.div`
  width: 200px;
  color: #56528d;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 14px;
`;

const NotVisitTraining = styled.span`
  color: #d23b09;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 14px;
`;

const WrapperTitle = styled.div`
  position: sticky;
  top: 0px;
  background-color: inherit;
  width: 100%;
`;

export {
  WrapperModal,
  Wrapper,
  CardCoach,
  WrapperInfo,
  NameCoach,
  ListUsers,
  NotVisitTraining,
  WrapperTitle,
}