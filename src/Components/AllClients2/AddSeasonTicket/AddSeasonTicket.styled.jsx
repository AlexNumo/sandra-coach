import styled from "styled-components";

const WrapperModal = styled.div`
  position: absolute;
  left: 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(190, 175, 175, 1);
  border-radius: 8px;
  margin-left: 5px;
  padding-left: 2px;
  height: 42px;
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
  width: 40px;
  font-size: 8px;
  height: 15px;
  background-color: inherit;
  border-radius: 22px;
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