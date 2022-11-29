import { useState } from 'react';
// import Schedule from 'Components/Schedule/Schedule';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
import InfoTrainee from 'Pages/InfoTrainee/InfoTrainee';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showInfoTrainee, setInfoTrainee] = useState(false);

  const ShowScheduleHandle = () => {
    if (showSchedule === true) {
      setShowSchedule(false);
      setInfoTrainee(false);
      return;
    }
    setShowSchedule(true);
    setInfoTrainee(false);
    return;
  };

  const ShowInfoTraineeHandle = () => {
    if (showInfoTrainee === true) {
      setShowSchedule(false);
      setInfoTrainee(false);
      return;
    }
    setShowSchedule(false);
    setInfoTrainee(true);
    return;
  };
  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' onClick={ShowScheduleHandle} className={showSchedule ? 'active' : ''}>Розклад</BTN>
        <BTN type='button' onClick={ShowInfoTraineeHandle} className={showInfoTrainee ? 'active' : ''}>Інформація про клієнтів та тренерів</BTN>
      </WrapperStyle>
      {showSchedule ? <SchedulePage /> : null}
      {showInfoTrainee ? <InfoTrainee /> : null}
    </Wrapper>
  )
};

export default MainPage;