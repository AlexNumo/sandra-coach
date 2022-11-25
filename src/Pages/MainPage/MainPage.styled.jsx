import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const WrapperStyle = styled.nav`
  font-family: 'Times New Roman', Times, serif;
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BTN = styled.button`
  width: 300px;
  margin: 10px 30px 30px 30px;
  padding: 10px 10px 10px 10px;
`;

export {
  Wrapper,
  WrapperStyle,
  BTN
};