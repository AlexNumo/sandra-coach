import { useEffect, useState } from 'react';
// import Schedule from 'Components/Schedule/Schedule';
import SchedulePage from 'Pages/SchedulePage/SchedulePage';
import InfoTrainee from 'Pages/InfoTrainee/InfoTrainee';
import {
  Wrapper,
  WrapperStyle,
  BTN
} from './MainPage.styled';

const MainPage = () => {
  const [scheduleColor, setScheduleColor] = useState();
  const [infoCoachClients, setInfoCoachClients] = useState();
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


  useEffect(() => {
    function randomScheduleColor() {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = "rgb(" + x + "," + y + "," + z + ")";
      setScheduleColor(bgColor);
    }
    randomScheduleColor();
    function randomInfoCoachClients() {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = "rgb(" + x + "," + y + "," + z + ")";
      setInfoCoachClients(bgColor);
    }
    randomInfoCoachClients();
  }, []);

  
  return (
    <Wrapper>
      <WrapperStyle>
        <BTN type='button' style={{backgroundColor: scheduleColor}} onClick={ShowScheduleHandle}>Розклад</BTN>
        <BTN type='button' style={{ backgroundColor: infoCoachClients }} onClick={ShowInfoTraineeHandle}>Інформація про клієнтів та тренерів</BTN>
      </WrapperStyle>
      {showSchedule ? <SchedulePage /> : null}
      {showInfoTrainee ? <InfoTrainee /> : null}
    </Wrapper>
  )
};

export default MainPage;