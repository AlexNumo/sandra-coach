import styled from "styled-components";

const WrapperModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(194, 209, 99, 0.5);
  backdrop-filter: blur(2px);
`

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  margin-top: 225px;
  padding-left: 20px;
  border: 3px solid;
  border-radius: 12px;
  background: rgb(246, 205, 205);
`;

export {
  WrapperModal,
  Wrapper,
}