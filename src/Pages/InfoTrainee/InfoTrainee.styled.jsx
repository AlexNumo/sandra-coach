import styled from "styled-components";


const Wrapper = styled.div`
  padding: 10px 0px 0px 0px;
  background-color: #d3e9e9;
`;

const WrapperBTN = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 2px solid;
`;

const BTN = styled.button`
  background-color: #8babc7;
  margin-left: 20px;
  border-radius: 22px;
  margin: 5px 5px 5px 5px;
`;

export {
  Wrapper,
  WrapperBTN,
  BTN
}