import { useState } from 'react';
import AddSeasonTicket from './AddSeasonTicket/AddSeasonTicket';
import {
  CardWrapper,
  WrapperSelectSeasonTicket
} from './CardUser.styled'
const CardUser = ({ allClients }) => {
  const [showAllNames, setshowAllNames] = useState(false);
  const [showAllNickNames, setShowAllNickNames] = useState(false);
  const [showUserTrainee, setShowUserTrainee] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [getNameID, setGetNameID] = useState('');
  const [getInstaID, setGetInstaID] = useState('');
  const [getUserTraineeID, setGetUserTraineeID] = useState('');
  const [getUserSeasonTicketID, setGetUserSeasonTicketID] = useState('');

  const HandleShowAllNames = (e) => {
    if (showAllNames === true) {
      return ([
        setshowAllNames(false),
        setGetNameID('')
      ]);
    }
      return ([
        setshowAllNames(true),
        setGetNameID(e.target.id)
      ]);
  }

  const HandleRenderNames = ({item} ) => {
    if (item._id === getNameID) {
      return (
        <ol style={{marginLeft: '20px'}}>
          {showAllNames ? item.info.map((name) => (
            <li key={name._id}>
              <p>{name.name}</p>
            </li>
          )) : null}
        </ol>
      )
    }
    return (
      <>
      </>
    )
  }

  const URLInsta = ({ instaNickName }) => {
    if (instaNickName === undefined || '') {
      return (
        <>
          <span>Відсутні дані</span>
        </>);
    }
    const restructureNickname = instaNickName.substring(1);
    const linkInsta = `https://www.instagram.com/${restructureNickname}/`
    return (
      <>
        <a href={linkInsta} target="_blank" rel="noopener noreferrer">{instaNickName}</a>
      </>
    );
  };
  
    const HandleShowAllInstaNickNames = (e) => {
    if (showAllNickNames === true) {
      return ([
        setShowAllNickNames(false),
        setGetInstaID('')
      ]);
    }
      return ([
        setShowAllNickNames(true),
        setGetInstaID(e.target.id)
      ]);
  }

  const HandleRenderInstaNickNames = ({ item }) => {
    if (item._id === getInstaID) {
      return (
        <ol style={{marginLeft: '20px'}}>
          {showAllNickNames ? item.info.map((info) => (
            <li key={info._id}>
              <URLInsta instaNickName={info.instaNickName} />
            </li>
          )) : null}
        </ol>
      )
    }
    return (
      <>
      </>
    )
  }

  const HandleShowUserTrainee = (e) => {
    if (showUserTrainee === true) {
      return ([
        setShowUserTrainee(false),
        setGetUserTraineeID('')
      ]);
    }
      return ([
        setShowUserTrainee(true),
        setGetUserTraineeID(e.target.id)
      ]);
  }

  const HandleRenderUserTrainee = ({ item }) => {
    if (item._id === getUserTraineeID) {
      return (
        <ol style={{marginLeft: '20px'}}>
          {showUserTrainee ? item.info.map((info) => (
            <li key={info._id}>
              <span>Вид: {info.kind_trainee},</span><br/>
              <span>{info.date.substring(0, 10)} об {info.time},</span><br/>
              <span>{info.visitTrainee ? <>Так</> : <>Ні</>}</span>
            </li>
          )) : null}
        </ol>
      )
    }
    return (
      <>
      </>
    )
  }

  const HandleOpenModal = (e) =>{
    e.preventDefault();
    if(openModal === true){
      return([
        setOpenModal(false),
        setGetUserSeasonTicketID('')
      ]);
    }
    return([
      setOpenModal(true),
      setGetUserSeasonTicketID(e.target.id)
    ]);
  }

  return (
    <>
      {allClients.map((item) => (
        <CardWrapper key={item._id}>
          <div>
            <p>Ім'я: {item.info[0].name}</p>
            <button onClick={HandleShowAllNames} id={item._id}>Всі імена</button>
            <HandleRenderNames item={item}/>
          </div>
          <WrapperSelectSeasonTicket>
            <p>Абонемент: ?????</p>
            <button onClick={HandleOpenModal} id={item._id}>Додати</button>
            {openModal ? <AddSeasonTicket HandleOpenModal={HandleOpenModal} getUserSeasonTicketID={getUserSeasonTicketID} item={item}/> : null}
          </WrapperSelectSeasonTicket>
          <span>Номер телефону:</span>
          <a href='tel:{item.id}' rel="noopener noreferrer">{item.id}</a>
          <div>
            <p>Instagram: <URLInsta instaNickName={item.info[0].instaNickName}/></p>
            <button onClick={HandleShowAllInstaNickNames} id={item._id}>Всі nickname</button>
            <HandleRenderInstaNickNames item={item}/>
          </div>
          <div>
            <span>Тренування:</span>
            <button onClick={HandleShowUserTrainee} id={item._id}>Всі тренування</button>
            <HandleRenderUserTrainee item={item}/>
          </div>
        </CardWrapper>
      ))}
    </>
  )
};

export default CardUser;