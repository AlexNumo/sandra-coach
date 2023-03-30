import { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
  WrapperModal,
  Wrapper,
  CardCoach,
  WrapperInfo,
  NameCoach,
  ListUsers,
  NotVisitTraining,
} from './Modal.styled';
import { IoIosClose } from "react-icons/io";

const Modal = ({ closeModal, data, info, month, times }) => {
  const [dates, setDates] = useState([]);
  const [showClients, setShowClients] = useState({});
  const [paidCoach, setPaidCoach] = useState([]);
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
  
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthIndex = parseInt(month) - 1;
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const monthDates = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const day = i < 10 ? `0${i}` : `${i}`;
      const date = `${year}-${month}-${day}`;
      monthDates.push(date);
    }
    setDates(monthDates);
  }, [month]);

  useEffect(() => {
    const paidElements = Array.from(document.querySelectorAll('#paid'));
    const paidValues = paidElements
      .map(element => parseInt(element.textContent))
      .filter(value => !isNaN(value));
    const sum = Object.values(paidValues).reduce((acc, val) => acc + val, 0);
    setPaidCoach(sum); // 1050
  },[paidCoach])

  function filterDataByDates() {
    const filteredData = [];

    Object.values(dates).forEach(date => {
      const matchingObjects = data.filter(info => info.date.slice(0, 10) === date);
      if (matchingObjects.length > 0) {
        filteredData.push(...matchingObjects);
      }
    });
    return filteredData;
  }
  filterDataByDates();
  const salary = [
    { id: 0, paid: 100 },
    { id: 1, paid: 200 },
    { id: 2, paid: 200 },
    { id: 3, paid: 200 },
    { id: 4, paid: 250 },
    { id: 5, paid: 250 },
    { id: 6, paid: 250 },
    { id: 7, paid: 250 },
    { id: 8, paid: 250 },
    { id: 9, paid: 300 },
    { id: 10, paid: 300 },
    { id: 11, paid: 300 },
    { id: 12, paid: 300 },
    { id: 13, paid: 300 },
    { id: 14, paid: 300 },
    { id: 15, paid: 300 },
  ];

const SalaryPaid = (clients, canceledClients) => {
  const clientsVisit = clients - canceledClients;
  if (clientsVisit === 0) {
    return (
      <>
        0
      </>
    )
  }
  return (
    <>
      {salary[clientsVisit - 1].paid}
    </>
  )
  }
  // console.log(paidCoach)
  const ResultTrainingsOfCoach = () => {
    const timesArray = Object.values(times);
    return (
    <>
      {dates.map((item) => (
        <div key={item}>
          {timesArray.map((time) => {
            const filteredData = data.filter(arr => arr.date.slice(0, 10) === item && arr.time === time.id);
            const filteredDataCanceled = data.filter(arr => arr.date.slice(0, 10) === item && arr.time === time.id && arr.canceledTraining === true);
            if (filteredData.length > 0) {
              return (
                <CardCoach key={time.id}>
                  <WrapperInfo>Дата:
                    <NameCoach>
                      {item} об {time.id}
                    </NameCoach>
                  </WrapperInfo>
                  <WrapperInfo>Назва тренування:
                    <NameCoach>
                      {filteredData.map(kind_trainee => kind_trainee.kind_trainee).filter((value, index, self) => self.indexOf(value) === index)}
                    </NameCoach>
                  </WrapperInfo>
                  <WrapperInfo>Кількість клієнтів:
                    <NameCoach>
                      {filteredData.length}
                      {filteredDataCanceled.length === 0 ? null :
                        <>
                          &nbsp;<NotVisitTraining>({filteredDataCanceled.length})</NotVisitTraining>
                        </>
                      }
                        &nbsp;<button style={{border: 'none'}} onClick={() => setShowClients(prevState => ({...prevState, [`${item}-${time.id}`]: !prevState[`${item}-${time.id}`]}))}>
                          {showClients[`${item}-${time.id}`] ?  <AiFillCaretUp/>: <AiFillCaretDown/>}
                        </button>
                    </NameCoach>
                  </WrapperInfo>
                  {showClients[`${item}-${time.id}`] &&
                    <WrapperInfo>Клієнти: <ListUsers>
                      {filteredData.map((name, index) => {
                        return(
                          <div key={name._id} style={{ display: 'inline-block' }}>
                            <button style={{border: 'none', color: 'inherit'}} id={name._id}>
                              <span className={name.canceledTraining ? 'canceled-training' : ''}>
                              {name.name}
                              </span>
                            </button>
                            {index !== filteredData.length - 1 && ","}
                          </div>
                        )
                      })}
                    </ListUsers>
                    </WrapperInfo>
                  }
                  <WrapperInfo>
                    Виплата:
                    <NameCoach id='paid'>
                      {SalaryPaid(filteredData.length, filteredDataCanceled.length)}&nbsp;₴
                    </NameCoach>
                  </WrapperInfo>
                </CardCoach>
              );
            } else {
              return null;
            }
          })}
        </div>
      ))}
    </>
  )
}

  return (
    <WrapperModal>
      <Wrapper>
        <IoIosClose style={{ position: 'absolute', marginLeft: '365px', marginTop: '-5px', color: '#7a7272' }} size={30} onClick={closeModal} />
        <div style={{
          width: '100%',
          // display: 'flex', justifyContent: 'flex-start'
        }}>
          Тренера &nbsp;
          <span style={{ color: '#56528d', fontWeight: '700' }}> {info[0].name_Coach}</span>
          &nbsp; у {getMonthName(month)} відвідало &nbsp;
          <span style={{ color: '#56528d', fontWeight: '700' }}>{data.length}&nbsp;</span>
          клієнта, які принесли йому ЗП у розмірі <span style={{ color: '#56528d', fontWeight: '700' }}>{paidCoach}&nbsp;₴</span>
        </div>
        <ResultTrainingsOfCoach/>

      </Wrapper>
    </WrapperModal>
  )
};

export default Modal;