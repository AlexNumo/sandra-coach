import styled from "styled-components";

const WrapperCardUser = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  background-color: rgba(210, 214, 223, 0.503);
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockCardUser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd2c5;
  overflow: auto;
  width: 380px;
  height: 100%;
  overflow: auto;
`;

const ListShown = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListName = styled.h3`
  font-family: 'Times New Roman', Times, serif;
  font-size: 10px;
  font-weight: 700;
  width: 100px;
  height: 25px;
  :first-child{
    margin-left: 20px;
  }
  /* :not(:last-child){
    margin-bottom: 30px;
  } */
`;

const WrapperUserInfo = styled.ol`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ShowAllBTN = styled.button`
  border: none;
`;

export {
  WrapperCardUser,
  ListShown,
  ListName,
  WrapperUserInfo,
  BlockCardUser,
  ShowAllBTN
}