import { useState } from 'react';
import AddTrainee from '../../Components/AddTrainee/AddTrainee';
import AddCoach from 'Components/AddCoach/AddCoach';
import AddClient from 'Components/AddClient/AddClient';
import ViewTrainee from 'Components/ViewTrainee/ViewTrainee';
import Filter from 'Components/Filter/Filter';
import {
  Wrapper,
  WrapperBTN,
  BTN,
} from './InfoTrainee.styled';

const InfoTrainee = () => {
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const [showAddCoach, setShowAddCoach] = useState(false);
  const [showAddClient, setShowAddClient] = useState(false);
  const [showTrainee, setShowTrainee] = useState(false);
  const [showFilter, setShowFilter] = useState(!false);

  const HandleShowAddTrainee = () => {
    if (showAddTrainee === true) {
      setShowAddTrainee(false);
      setShowAddClient(false);
      setShowAddCoach(false);
      setShowTrainee(false);
      setShowFilter(false);
      return;
    }
    setShowAddTrainee(true);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(false);
    return;
  };

  const HandleShowAddCoach = () => {
    if (showAddCoach === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(true);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(false);
    return;
  };

  const HandleShowAddClient = () => {
    if (showAddClient === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(true);
    setShowTrainee(false);
    setShowFilter(false);
    return;
  };

  const HandleShowViewTrainee = () => {
    if (showTrainee === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(true);
    setShowFilter(false);
    return;
  };

  const HandleShowFilter = () => {
    if (showFilter === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(true);
    return;
  };

  return(
    <Wrapper>
      <WrapperBTN>
        <BTN onClick={HandleShowViewTrainee}>Показати всіх тренерів</BTN>
        <BTN onClick={HandleShowAddTrainee}>Додати нове тренування</BTN>
        <BTN onClick={HandleShowAddCoach}>Додати нового тренера</BTN>
        <BTN onClick={HandleShowAddClient}>Додати нового клієнта</BTN>
        <BTN onClick={HandleShowFilter}>Застосувати фільтр</BTN>
      </WrapperBTN>
      {showAddCoach ? <AddCoach /> : null}
      {showAddClient ? <AddClient /> : null}
      {showAddTrainee ? <AddTrainee /> : null}
      {showTrainee ? <ViewTrainee /> : null}
      {showFilter ? <Filter/> : null}
  </Wrapper>
  )
};

export default InfoTrainee;