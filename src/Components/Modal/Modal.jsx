import {
  WrapperModal,
  Wrapper,
} from './Modal.styled';
import { IoIosClose } from "react-icons/io";

const Modal = ({ closeModal, data, info, month }) => {
  console.log("data: ", data)
  console.log("info: ", info)
  function getMonthName(monthNumber) {
    const months = {
      '01': 'січні',
      '02': 'лютому',
      '03': 'березні',
      '04': 'квітні',
      '05': 'травні',
      '06': 'червні',
      '07': 'липні',
      '08': 'серпні',
      '09': 'вересні',
      '10': 'жовтні',
      '11': 'листопаді',
      '12': 'грудні'
    };

  return months[monthNumber];
}
  const ResultTrainingsOfCoach = () => {
    // const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    const dateTraining = data.flatMap(arr => arr.date);
    const sortedData = dateTraining.sort((dateTraining) => new Date(dateTraining) - new Date(dateTraining));
    const kindTraining = data.flatMap(arr => arr.kind_trainee);
    const nameClients = data.flatMap(arr => arr.name);
    const timeTraining = data.flatMap(arr => arr.time);
    const dayTraining = data.flatMap(arr => arr.day);
    const combinedStrings = data.map(arr => `${arr.date} ${arr.kind_trainee}`);
    console.log("sortedData: ", combinedStrings)
    return (
      <>
        {dateTraining.map((item) => (
          <>
            <p>Дата {item.slice(0, 10)}</p>
            <p>Назва тренування</p>
            <p>Кількість клієнтів</p>
            <p>Клієнт</p>
          </>
        ))}
      </>
    )
  }

  return (
    <WrapperModal>
      <Wrapper>
        <IoIosClose style={{ position: 'absolute', marginLeft: '365px', marginTop: '-5px', color: '#7a7272' }} size={30} onClick={closeModal} />
        <p>Тренер {info[0].name_Coach} у {getMonthName(month)} провела {data.length} занять, з яких:</p>
        <ResultTrainingsOfCoach/>

      </Wrapper>
    </WrapperModal>
  )
};

export default Modal;