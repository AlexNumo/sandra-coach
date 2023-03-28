import { useState } from 'react';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
import Record from 'Pages/Record/Record';
import Logo from 'Components/Logo/Logo';
import AllClients from 'Components/AllClients2/AllClients';
import Administration from '../Administration/Administration';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showState, setShowState] = useState({
    showSchedule: false,
    showInfoRecord: false,
    showManagment: false,
    showAllClients: false,
  });

  const handleShow = (showState) => {
    setShowState((prevState) => {
      // якщо ми натискаємо на вже відкрите вікно, то закриваємо все
      if (Object.keys(showState)[0] === Object.keys(prevState)[0] && prevState[Object.keys(showState)[0]]) {
        return {showSchedule: false, showInfoRecord: false, showManagment: false, showAllClients: false};
      }
      return { ...prevState, ...showState };
    });
  };

  const handleShowSchedule = () => {
    handleShow({ showSchedule: true, showInfoRecord: false, showManagment: false, showAllClients: false });
  };

  const handleShowInfoRecord = () => {
    handleShow({ showSchedule: false, showInfoRecord: true, showManagment: false, showAllClients: false });
  };

  const handleShowTGBotTrainee = () => {
    handleShow({ showSchedule: false, showInfoRecord: false, showManagment: true, showAllClients: false });
  };

  const handleShowAllClients = () => {
    handleShow({ showSchedule: false, showInfoRecord: false, showManagment: false, showAllClients: true });
  };

  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={handleShowInfoRecord} className={showState.showInfoRecord ? 'active' : ''}>Записи</BTN>
        <BTN type='button' onClick={handleShowTGBotTrainee} className={showState.showManagment ? 'active' : ''}>Управління</BTN>
        <BTN type='button' onClick={handleShowAllClients} className={showState.showAllClients ? 'active' : ''}>Всі клієнти</BTN>
        <BTN type='button' onClick={handleShowSchedule} className={showState.showSchedule ? 'active' : ''}>Розклад</BTN>
      </WrapperStyle>
      <Logo />
      {showState.showManagment ? <Administration /> : null}
      {showState.showSchedule ? <SchedulePage /> : null}
      {showState.showAllClients ? <AllClients /> : null}
      {showState.showInfoRecord ? <Record/> : null}
    </Wrapper>
  )
};

export default MainPage;