import Table from 'react-bootstrap/Table';
import OptionsClick from '../OptionsClick/OptionsClick';
import { PositionTable } from './Schedule.styled';

function Schedule() {  
  return (
    <PositionTable>
      <Table
        striped
        bordered={true}
        hover
        size='xl'
        className='table-back-color'
        // scrolled horizontally
        // responsive="sm"
        // bordered={true}
        // responsive 
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
          <OptionsClick/>
        </tbody>
      </Table>
    </PositionTable>
  );
}

export default Schedule;