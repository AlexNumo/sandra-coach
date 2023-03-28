import {
  WrapperModal,
  Wrapper,
} from './Modal.styled';
import { IoIosClose } from "react-icons/io";

const Modal = ({ closeModal, trainingInfo }) => {

  return (
    <WrapperModal>
      <Wrapper>
        <IoIosClose style={{ position: 'absolute', marginLeft: '365px', marginTop: '-5px', color: '#7a7272' }} size={30} onClick={closeModal} />
        <p>{trainingInfo}</p>
      </Wrapper>
    </WrapperModal>
  )
};

export default Modal;