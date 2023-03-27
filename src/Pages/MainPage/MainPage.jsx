import { useState } from 'react';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
import Record from 'Pages/Record/Record';
import Logo from 'Components/Logo/Logo';
import AllClients from 'Components/AllClients2/AllClients';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showManagment, setShowManagment] = useState(false);
  const [showInfoRecord, setInfoRecord] = useState(false);
  const [showAllClients, setAllClients] = useState(false);

  const ShowScheduleHandle = () => {
    if (showSchedule === true) {
      setShowSchedule(false);
      setInfoRecord(false);
      setAllClients(false);
      setShowManagment(false);
      return;
    }
    setShowSchedule(true);
    setShowManagment(false);
    setAllClients(false);
    setInfoRecord(false);
    return;
  };

  const ShowInfoRecordHandle = () => {
    if (showInfoRecord === true) {
      setShowSchedule(false);
      setAllClients(false);
      setShowManagment(false);
      setInfoRecord(false);
      return;
    }
    setShowSchedule(false);
    setShowManagment(false);
    setAllClients(false);
    setInfoRecord(true);
    return;
  };

    const ShowTGBotTrainee = () => {
    if (showManagment === true) {
      setShowSchedule(false);
      setShowManagment(false);
      setAllClients(false);
      setInfoRecord(false);
      return;
    }
    setShowSchedule(false);
    setShowManagment(true);
    setAllClients(false);
    setInfoRecord(false);
    return;
  };

   const ShowAllClientsHandle = () => {
    if (showAllClients === true) {
      setShowSchedule(false);
      setShowManagment(false);
      setAllClients(false);
      setInfoRecord(false);
      return;
    }
    setShowSchedule(false);
    setShowManagment(false);
    setAllClients(true);
    setInfoRecord(false);
    return;
  };
  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={ShowInfoRecordHandle} className={showInfoRecord ? 'active' : ''}>Записи</BTN>
        <BTN type='button' onClick={ShowTGBotTrainee} className={showManagment ? 'active' : ''}>Управління</BTN>
        <BTN type='button' onClick={ShowAllClientsHandle} className={showAllClients ? 'active' : ''}>Всі клієнти</BTN>
        <BTN type='button' onClick={ShowScheduleHandle} className={showSchedule ? 'active' : ''}>Розклад</BTN>
      </WrapperStyle>
      <Logo />
      {showSchedule ? <SchedulePage /> : null}
      {showAllClients ? <AllClients /> : null}
      {showInfoRecord ? <Record/> : null}
    </Wrapper>
  )
};

export default MainPage;