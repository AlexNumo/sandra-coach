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
  const [showFilter, setShowFilter] = useState(false);
  const [showCustom, setShowCustom] = useState(true);

  const HandleShowAddTrainee = () => {
    if (showAddTrainee === true) {
      setShowAddTrainee(false);
      setShowAddClient(false);
      setShowAddCoach(false);
      setShowTrainee(false);
      setShowFilter(false);
      setShowCustom(true);
      return;
    }
    setShowAddTrainee(true);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(false);
    setShowCustom(false);
    return;
  };

  const HandleShowAddCoach = () => {
    if (showAddCoach === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      setShowCustom(true);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(true);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(false);
    setShowCustom(false);
    return;
  };

  const HandleShowAddClient = () => {
    if (showAddClient === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      setShowCustom(true);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(true);
    setShowTrainee(false);
    setShowFilter(false);
    setShowCustom(false);
    return;
  };

  const HandleShowViewTrainee = () => {
    if (showTrainee === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      setShowCustom(true);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(true);
    setShowFilter(false);
    setShowCustom(false);
    return;
  };

  const HandleShowFilter = () => {
    if (showFilter === true) {
      setShowAddTrainee(false);
      setShowAddCoach(false);
      setShowAddClient(false);
      setShowTrainee(false);
      setShowFilter(false);
      setShowCustom(true);
      return;
    }
    setShowAddTrainee(false);
    setShowAddCoach(false);
    setShowAddClient(false);
    setShowTrainee(false);
    setShowFilter(true);
    setShowCustom(false);
    return;
  };

  const ShowCustom = () => {
    return (
      <div className={showCustom ? 'visible' : 'hidden'}>
        <h2>???????? ??????????, ?????????????? ??????????????</h2>
      </div>
    )
  };

  // console.log(document.getElementById('show-custom'));

  return(
    <Wrapper>
      <WrapperBTN>
        <BTN onClick={HandleShowViewTrainee} className={showTrainee ? 'active' : ''}>???????????????? ???????? ????????????????</BTN>
        <BTN onClick={HandleShowAddTrainee} className={showAddTrainee ? 'active' : ''}>???????????? ???????? ????????????????????</BTN>
        <BTN onClick={HandleShowAddCoach} className={showAddCoach ? 'active' : ''}>???????????????? ????????????????</BTN>
        <BTN onClick={HandleShowAddClient} className={showAddClient ? 'active' : ''}>???????????????? ????????????????</BTN>
        <BTN onClick={HandleShowFilter} className={showFilter ? 'active' : ''}>?????????????????????? ????????????</BTN>
      </WrapperBTN>
      <ShowCustom />
      
      {showAddCoach ? <AddCoach /> : null}
      {showAddClient ? <AddClient /> : null}
      {showAddTrainee ? <AddTrainee /> : null}
      {showTrainee ? <ViewTrainee /> : null}
      {showFilter ? <Filter/> : null}
  </Wrapper>
  )
};

export default InfoTrainee;