import { Link } from 'react-router-dom';
import AddInfo from '../../Components/AddInfo/AddInfo';

const InfoCoach = () => {
  return(
    <>
      <AddInfo />
      <Link to='/'>Головне меню</Link>
  </>
  )
};

export default InfoCoach;