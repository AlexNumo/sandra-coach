import styled from "styled-components";

const WrapperModal = styled.div`
  position: absolute;
  top: 15px;
  left: 45px;
  display: flex;
  flex-direction: column;
  background-color: rgba(190, 175, 175, 0.4);
  border-radius: 2px;
  margin-left: 5px;
  padding-left: 5px;
`;

const Modal = styled.form`
  /* width: 120px;
  height: 120px; */
  display: flex;
  flex-direction: row;
  /* background-color: rgba(170, 156, 156, 0.4); */
  /* width: 125px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChooseTicket = styled.select`
  width: 70px;
  font-size: 10px;
  height: 15px;
`;

const BTN = styled.button`
  /* width: 40px; */
  border: none;
  margin-left: 10px;
`;

export {
  WrapperModal,
  Modal,
  ChooseTicket,
  BTN
}