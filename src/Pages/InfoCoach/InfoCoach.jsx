import { useState } from 'react';
import AddTrainee from '../../Components/AddTrainee/AddTrainee';
import AddCoach from 'Components/AddCoach/AddCoach';

const InfoCoach = () => {
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const [showAddCoach, setShowAddCoach] = useState(false);

  const HandleShowAddTrainee = () => {
    if (showAddTrainee === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      return;
    }
    setShowAddTrainee(true);
    setShowAddCoach(false);
    return;
  }

    const HandleShowAddCoach = () => {
    if (showAddCoach === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      return;
    }
      setShowAddCoach(true);
      setShowAddTrainee(false);
      return;
  }
  return(
    <>
      <button onClick={HandleShowAddTrainee}>Додати нове тренування</button>
      <button onClick={HandleShowAddCoach}>Додати нового тренера</button>
      {showAddCoach ? <AddCoach /> : null}
      {showAddTrainee ? <AddTrainee /> : null}
  </>
  )
};

export default InfoCoach;