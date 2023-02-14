import { useState } from 'react';
// import Schedule from 'Components/Schedule/Schedule';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
// import InfoTrainee from 'Pages/InfoTrainee/InfoTrainee';
import AddTraineeClients from 'Components/AddTraineeClients/AddTraineeClients';
import Record from 'Pages/Record/Record';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  // const [showInfoTrainee, setInfoTrainee] = useState(false);
  const [showInfoRecord, setInfoRecord] = useState(false);
  const [showInfoTraineeClients, setInfoTraineeClients] = useState(false);

  const ShowScheduleHandle = () => {
    if (showSchedule === true) {
      setShowSchedule(false);
      setInfoRecord(false);
      // setInfoTrainee(false);
      setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(true);
    setInfoRecord(false);
    // setInfoTrainee(false);
    setInfoTraineeClients(false);
    return;
  };

  // const ShowInfoTraineeHandle = () => {
  //   if (showInfoTrainee === true) {
  //     setShowSchedule(false);
  //     setInfoRecord(false);
  //     setInfoTrainee(false);
  //     setInfoTraineeClients(false);
  //     return;
  //   }
  //   setShowSchedule(false);
  //   setInfoRecord(false);
  //   setInfoTrainee(true);
  //   setInfoTraineeClients(false);
  //   return;
  // };

  const ShowInfoRecordHandle = () => {
    if (showInfoRecord === true) {
      setShowSchedule(false);
      // setInfoTrainee(false);
      setInfoRecord(false);
      setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(false);
    // setInfoTrainee(false);
    setInfoRecord(true);
    setInfoTraineeClients(false);
    return;
  };
  
  const ShowInfoTraineeClients = () => {
    if (showInfoTraineeClients === true) {
      setShowSchedule(false);
      // setInfoTrainee(false);
      setInfoRecord(false);
      setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(false);
    // setInfoTrainee(false);
    setInfoRecord(false);
    setInfoTraineeClients(true);
    return;
  };
  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={ShowInfoRecordHandle} className={showInfoRecord ? 'active' : ''}>ЗАПИСИ</BTN>
        <BTN type='button' onClick={ShowScheduleHandle} className={showSchedule ? 'active' : ''}>Розклад</BTN>
        <BTN type='button' onClick={ShowInfoTraineeClients} className={showInfoTraineeClients ? 'active' : ''}>Додати тренування та клієнта</BTN>
        {/* <BTN type='button' onClick={ShowInfoTraineeHandle} className={showInfoTrainee ? 'active' : ''}>Інформація про клієнтів та тренерів</BTN> */}
      </WrapperStyle>
      {showSchedule ? <SchedulePage /> : null}
      {/* {showInfoTrainee ? <InfoTrainee /> : null} */}
      {showInfoRecord ? <Record/> : null}
      {showInfoTraineeClients ? <AddTraineeClients/> : null}
    </Wrapper>
  )
};

export default MainPage;