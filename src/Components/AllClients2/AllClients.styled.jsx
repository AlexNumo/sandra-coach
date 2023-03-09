import styled from "styled-components";

const WrapperUsers = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
  font-size: 10px;
`;

const WrapperList = styled.div`
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd2c5;
`;

const ListName = styled.p`
  width: 100px;
  text-align: left;
`;

const ListUsers = styled.ol`

`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px;
  border-radius: 8px;
  background-color: #d7dde1;
  padding: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
  height: 45px;
  align-items: center;
  z-index: 2;
  list-style-type: decimal;
`;

const UserInfo = styled.div`
  position: relative;
  width: 90px;
  text-align: left;
`;

const SearchUser = styled.input`
  border-radius: 12px;
  width: 60px;
  height: 20px;
  background-color: #d7dde1;
  &:placeholder-shown{
    padding-left: 3px;
  }
  &:focus{
    width: 120px;
    padding-left: 5px;
  }
`;

const SearchList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const NameOfSearch = styled.div`
  margin-left: 10px;
`;

const ResetBTN = styled.button`
  border-radius: 8px;
  padding: 2px;
  background-color: #d7dde1;
  margin-bottom: 2px;
`;




export {
  WrapperUsers,
  ListName,
  UserInfo,
  ListUsers,
  WrapperList,
  CardWrapper,
  SearchUser,
  SearchList,
  NameOfSearch,
  ResetBTN
};