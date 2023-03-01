import { useState } from 'react';
// import Schedule from 'Components/Schedule/Schedule';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
// import InfoTrainee from 'Pages/InfoTrainee/InfoTrainee';
// import AddTraineeClients from 'Components/AddTraineeClients/AddTraineeClients';
import TGBot from 'Pages/TGBot/TGBot';
import Record from 'Pages/Record/Record';
import Logo from 'Components/Logo/Logo';
import AllClients from 'Components/AllClients/AllClients';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showTGBot, setShowTGBot] = useState(false);
  // const [showInfoTrainee, setInfoTrainee] = useState(false);
  const [showInfoRecord, setInfoRecord] = useState(false);
  const [showAllClients, setAllClients] = useState(false);
  // const [showInfoTraineeClients, setInfoTraineeClients] = useState(false);

  const ShowScheduleHandle = () => {
    if (showSchedule === true) {
      setShowSchedule(false);
      setInfoRecord(false);
      setAllClients(false);
      // setInfoTrainee(false);
      // setInfoTraineeClients(false);
      setShowTGBot(false);
      return;
    }
    setShowSchedule(true);
    setShowTGBot(false);
    setAllClients(false);
    setInfoRecord(false);
    // setInfoTrainee(false);
    // setInfoTraineeClients(false);
    return;
  };

  // const ShowInfoTraineeHandle = () => {
  //   if (showInfoTrainee === true) {
  //     setShowSchedule(false);
  //     setInfoRecord(false);
  //     setInfoTrainee(false);
  //     // setInfoTraineeClients(false);
  //     return;
  //   }
  //   setShowSchedule(false);
  //   setInfoRecord(false);
  //   setInfoTrainee(true);
  //   // setInfoTraineeClients(false);
  //   return;
  // };

  const ShowInfoRecordHandle = () => {
    if (showInfoRecord === true) {
      setShowSchedule(false);
      // setInfoTrainee(false);
      setAllClients(false);
      setShowTGBot(false);
      setInfoRecord(false);
      // setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(false);
    // setInfoTrainee(false);
    setShowTGBot(false);
    setAllClients(false);
    setInfoRecord(true);
    // setInfoTraineeClients(false);
    return;
  };
  
  // const ShowInfoTraineeClients = () => {
  //   if (showInfoTraineeClients === true) {
  //     setShowSchedule(false);
  //     // setInfoTrainee(false);
  //     setShowTGBot(false);
  //     setInfoRecord(false);
  //     // setInfoTraineeClients(false);
  //     return;
  //   }
  //   setShowSchedule(false);
  //   // setInfoTrainee(false);
  //   setShowTGBot(false);
  //   setInfoRecord(false);
  //   setInfoTraineeClients(true);
  //   return;
  // };

    const ShowTGBotTrainee = () => {
    if (showTGBot === true) {
      setShowSchedule(false);
      // setInfoTrainee(false);
      setShowTGBot(false);
      setAllClients(false);
      setInfoRecord(false);
      // setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(false);
    // setInfoTrainee(false);
    setShowTGBot(true);
    setAllClients(false);
    setInfoRecord(false);
    // setInfoTraineeClients(false);
    return;
  };

   const ShowAllClientsHandle = () => {
    if (showAllClients === true) {
      setShowSchedule(false);
      // setInfoTrainee(false);
      setShowTGBot(false);
      setAllClients(false);
      setInfoRecord(false);
      // setInfoTraineeClients(false);
      return;
    }
    setShowSchedule(false);
    // setInfoTrainee(false);
    setShowTGBot(false);
    setAllClients(true);
    setInfoRecord(false);
    // setInfoTraineeClients(false);
    return;
  };
  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={ShowInfoRecordHandle} className={showInfoRecord ? 'active' : ''}>ЗАПИСИ</BTN>
        <BTN type='button' onClick={ShowTGBotTrainee} className={showTGBot ? 'active' : ''}>Telegram BOT</BTN>
        <BTN type='button' onClick={ShowAllClientsHandle} className={showAllClients ? 'active' : ''}>Всі клієнти</BTN>
        <BTN type='button' onClick={ShowScheduleHandle} className={showSchedule ? 'active' : ''}>Розклад</BTN>
        {/* <BTN type='button' onClick={ShowInfoTraineeClients} className={showInfoTraineeClients ? 'active' : ''}>Додати тренування та клієнта</BTN> */}
        {/* <BTN type='button' onClick={ShowInfoTraineeHandle} className={showInfoTrainee ? 'active' : ''}>Інформація про клієнтів та тренерів</BTN> */}
      </WrapperStyle>
      <Logo/>
      {showSchedule ? <SchedulePage /> : null}
      {showAllClients ? <AllClients /> : null}
      {/* {showInfoTrainee ? <InfoTrainee /> : null} */}
      {showInfoRecord ? <Record/> : null}
      {showTGBot ? <TGBot/> : null}
      {/* {showInfoTraineeClients ? <AddTraineeClients/> : null} */}
    </Wrapper>
  )
};

export default MainPage;