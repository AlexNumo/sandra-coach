import Table from 'react-bootstrap/Table';
import OptionsClick from '../OptionsClick/OptionsClick';
import {clientAPI} from '../../service/axios.config';
import { PositionTable } from './Schedule.styled';

function Schedule() {  

  const ClickOption = (e) => {
    // console.log(e);
    const event = e.target.value;
    const timeTrainee = e.nativeEvent.path[2].attributes.id.value;
    const dayTrainee = e.nativeEvent.path[1].attributes[0].nodeValue;
    const dayTime = dayTrainee + timeTrainee;
    const apiSend = () => (clientAPI.sendData({ id: dayTime, day: dayTrainee, time: timeTrainee, kind_trainee: event }));
    if (dayTime === 'monday0900') {
      apiSend();
    }
    if (dayTime === 'tuesday0900') {
      apiSend();
    }
    if (dayTime === 'wednesday0900') {
      apiSend();
    }
    if (dayTime === 'thursday0900') {
      apiSend();
    }
    if (dayTime === 'friday0900') {
      apiSend();
    }
    if (dayTime === 'saturday0900') {
      apiSend();
    }
    if (dayTime === 'sunday0900') {
      apiSend();
    }
    if (dayTime === 'monday1000') {
      apiSend();
    }
    if (dayTime === 'tuesday1000') {
      apiSend();
    }
    if (dayTime === 'wednesday1000') {
      apiSend();
    }
    if (dayTime === 'thursday1000') {
      apiSend();
    }
    if (dayTime === 'friday1000') {
      apiSend();
    }
    if (dayTime === 'saturday1000') {
      apiSend();
    }
    if (dayTime === 'sunday1000') {
      apiSend();
    }
    if (dayTime === 'monday1100') {
      apiSend();
    }
    if (dayTime === 'tuesday1100') {
      apiSend();
    }
    if (dayTime === 'wednesday1100') {
      apiSend();
    }
    if (dayTime === 'thursday1100') {
      apiSend();
    }
    if (dayTime === 'friday1100') {
      apiSend();
    }
    if (dayTime === 'saturday1100') {
      apiSend();
    }
    if (dayTime === 'sunday1100') {
      apiSend();
    }
    if (dayTime === 'monday1200') {
      apiSend();
    }
    if (dayTime === 'tuesday1200') {
      apiSend();
    }
    if (dayTime === 'wednesday1200') {
      apiSend();
    }
    if (dayTime === 'thursday1200') {
      apiSend();
    }
    if (dayTime === 'friday1200') {
      apiSend();
    }
    if (dayTime === 'saturday1200') {
      apiSend();
    }
    if (dayTime === 'sunday1200') {
      apiSend();
    }
    if (dayTime === 'monday1300') {
      apiSend();
    }
    if (dayTime === 'tuesday1300') {
      apiSend();
    }
    if (dayTime === 'wednesday1300') {
      apiSend();
    }
    if (dayTime === 'thursday1300') {
      apiSend();
    }
    if (dayTime === 'friday1300') {
      apiSend();
    }
    if (dayTime === 'saturday1300') {
      apiSend();
    }
    if (dayTime === 'sunday1300') {
      apiSend();
    }
    if (dayTime === 'monday1400') {
      apiSend();
    }
    if (dayTime === 'tuesday1400') {
      apiSend();
    }
    if (dayTime === 'wednesday1400') {
      apiSend();
    }
    if (dayTime === 'thursday1400') {
      apiSend();
    }
    if (dayTime === 'friday1400') {
      apiSend();
    }
    if (dayTime === 'saturday1400') {
      apiSend();
    }
    if (dayTime === 'sunday1400') {
      apiSend();
    }
    if (dayTime === 'monday1500') {
      apiSend();
    }
    if (dayTime === 'tuesday1500') {
      apiSend();
    }
    if (dayTime === 'wednesday1500') {
      apiSend();
    }
    if (dayTime === 'thursday1500') {
      apiSend();
    }
    if (dayTime === 'friday1500') {
      apiSend();
    }
    if (dayTime === 'saturday1500') {
      apiSend();
    }
    if (dayTime === 'sunday1500') {
      apiSend();
    }
    if (dayTime === 'monday1600') {
      apiSend();
    }
    if (dayTime === 'tuesday1600') {
      apiSend();
    }
    if (dayTime === 'wednesday1600') {
      apiSend();
    }
    if (dayTime === 'thursday1600') {
      apiSend();
    }
    if (dayTime === 'friday1600') {
      apiSend();
    }
    if (dayTime === 'saturday1600') {
      apiSend();
    }
    if (dayTime === 'sunday1600') {
      apiSend();
    }
    if (dayTime === 'monday1700') {
      apiSend();
    }
    if (dayTime === 'tuesday1700') {
      apiSend();
    }
    if (dayTime === 'wednesday1700') {
      apiSend();
    }
    if (dayTime === 'thursday1700') {
      apiSend();
    }
    if (dayTime === 'friday1700') {
      apiSend();
    }
    if (dayTime === 'saturday1700') {
      apiSend();
    }
    if (dayTime === 'sunday1700') {
      apiSend();
    }
    if (dayTime === 'monday1800') {
      apiSend();
    }
    if (dayTime === 'tuesday1800') {
      apiSend();
    }
    if (dayTime === 'wednesday1800') {
      apiSend();
    }
    if (dayTime === 'thursday1800') {
      apiSend();
    }
    if (dayTime === 'friday1800') {
      apiSend();
    }
    if (dayTime === 'saturday1800') {
      apiSend();
    }
    if (dayTime === 'sunday1800') {
      apiSend();
    }
    if (dayTime === 'monday1900') {
      apiSend();
    }
    if (dayTime === 'tuesday1900') {
      apiSend();
    }
    if (dayTime === 'wednesday1900') {
      apiSend();
    }
    if (dayTime === 'thursday1900') {
      apiSend();
    }
    if (dayTime === 'friday1900') {
      apiSend();
    }
    if (dayTime === 'saturday1900') {
      apiSend();
    }
    if (dayTime === 'sunday1900') {
      apiSend();
    }
    if (dayTime === 'monday2000') {
      apiSend();
    }
    if (dayTime === 'tuesday2000') {
      apiSend();
    }
    if (dayTime === 'wednesday2000') {
      apiSend();
    }
    if (dayTime === 'thursday2000') {
      apiSend();
    }
    if (dayTime === 'friday2000') {
      apiSend();
    }
    if (dayTime === 'saturday2000') {
      apiSend();
    }
    if (dayTime === 'sunday2000') {
      apiSend();
    }
  }
  return (
    <PositionTable>
    <Table
      striped
      bordered
      hover
      size='xl'
    >
      <thead >
        <tr>
          <th className='time'>#</th>
          <th className='monday'>Понеділок</th>
          <th className='tuesday'>Вівторок</th>
          <th className='wednesday'>Середа</th>
          <th className='thursday'>Четвер</th>
          <th className='friday'>П'ятниця</th>
          <th className='saturday'>Субота</th>
          <th className='sunday'>Неділя</th>
        </tr>
      </thead>
      <tbody>
        <OptionsClick
          ClickOption={ClickOption}
        />
      </tbody>
      </Table>
    </PositionTable>
  );
}

export default Schedule;