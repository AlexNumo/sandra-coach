import styled from "styled-components";

const WrapperCardUser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(210, 214, 223, 0.503);
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const ListShown = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListName = styled.h3`
  font-family: 'Times New Roman', Times, serif;
  font-size: 10px;
  font-weight: 700;
  width: 100px;
  :first-child{
    margin-left: 20px;
  }
`;

const WrapperUserInfo = styled.ol`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const BlockCardUser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd2c5;
  width: 400px;
  height: 400px;
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