import { useEffect, useState } from 'react';
import {
  Wrapper,
  LinkStyle
} from './MainPage.styled';

const MainPage = () => {
  const [scheduleColor, setScheduleColor] = useState();
  const [infoCoachClients, setInfoCoachClients] = useState();
  const Schedule = '/schedule';
  const InfoCoachClients = '/info-coach-clients';

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
      <LinkStyle to={Schedule} style={{backgroundColor: scheduleColor}}>Schedule</LinkStyle>
      <LinkStyle to={InfoCoachClients} style={{backgroundColor: infoCoachClients}}>Info of coach and clients</LinkStyle>
    </Wrapper>
  )
};

export default MainPage;