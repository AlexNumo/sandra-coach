import { useState } from 'react';
import AddSeasonTicket from './AddSeasonTicket/AddSeasonTicket';
import { BsInstagram } from "react-icons/bs";
import Names from './Names/Names';
import {
  CardWrapper,
  WrapperSelectSeasonTicket,
  WrapperName,
  // ShowAllNames,
  BTN
} from './CardUser.styled'
const CardUser = ({ allClients }) => {
  const [showAllNickNames, setShowAllNickNames] = useState(false);
  const [showUserTrainee, setShowUserTrainee] = useState(false);
  const [showUserSeasonTicket, setShowUserSeasonTicket] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [getInstaID, setGetInstaID] = useState('');
  const [getUserTraineeID, setGetUserTraineeID] = useState('');
  const [getUserSeasonTicketID, setGetUserSeasonTicketID] = useState('');
  const [getUserSeasonTicketsID, setGetUserSeasonTicketsID] = useState('');

  // const HandleShowAllNames = (e) => {
  //   if (showAllNames === true) {
  //     return ([
  //       setshowAllNames(false),
  //       setGetNameID('')
  //     ]);
  //   }
  //     return ([
  //       setshowAllNames(true),
  //       setGetNameID(e.target.id)
  //     ]);
  // }

  // const HandleRenderNames = ({item} ) => {
  //   if (item._id === getNameID) {
  //     return (
  //       <ol style={{marginLeft: '20px'}}>
  //         {showAllNames ? item.info.map((name) => (
  //           <p key={name._id}>
  //             <p>{name.name}</p>
  //           </p>
  //         )) : null}
  //       </ol>
  //     )
  //   }
  //   return (
  //     <>
  //     </>
  //   )
  // }

  const URLInsta = ({ instaNickName }) => {
    if (instaNickName === undefined || '') {
      return (
        <>
          <span>Відсутні дані</span>
        </>);
    }
    if (showAllNickNames === true) {
      const restructureNickname = instaNickName.substring(1);
      const linkInsta = `https://www.instagram.com/${restructureNickname}/`
      return (
        <>
          <a href={linkInsta} target="_blank" rel="noopener noreferrer">{instaNickName}</a>
        </>
      );

    }
    const restructureNickname = instaNickName.substring(1);
    const linkInsta = `https://www.instagram.com/${restructureNickname}/`
    return (
      <>
        <a href={linkInsta} target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
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
            <p key={info._id}>
              <URLInsta instaNickName={info.instaNickName} />
            </p>
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
  };

  const HandleRenderUserTrainee = ({ item }) => {
    if (item._id === getUserTraineeID) {
      return (
        <ol style={{marginLeft: '20px'}}>
          {showUserTrainee ? item.info.map((info) => (
            <p key={info._id}>
              <span>Вид: {info.kind_trainee},</span><br/>
              <span>{info.date.substring(0, 10)} об {info.time},</span><br/>
              <span>{info.visitTrainee ? <>Так</> : <>Ні</>}</span>
            </p>
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
  };

  const HandleRenderUserSeasonTickets = ({ item }) => {
    // console.log(item.seasonTickets[item.seasonTickets.length - 1])
    if (item._id === getUserSeasonTicketsID) {
      return (
        <ol style={{marginLeft: '20px'}}>
          {showUserSeasonTicket ? item.seasonTickets.map((ticket) => (
            <p key={ticket._id}>
              <span>Абонемент на {ticket.limitOfTrainnings} занять,</span><br/><span>придбаний {ticket.dateOfBuying.substring(0, 10)}</span><br/>
              {/* <span>{info.date.substring(0, 10)} об {info.time},</span><br/>
              <span>{info.visitTrainee ? <>Так</> : <>Ні</>}</span> */}
            </p>
          )) : null}
        </ol>
      )
    }
    return (
      <>
      </>
    )
  }

  const HandleShowAllSeasonTickets = (e) =>{
    if (showUserSeasonTicket === true) {
      return ([
        setShowUserSeasonTicket(false),
        setGetUserSeasonTicketsID('')
      ]);
    }
      return ([
        setShowUserSeasonTicket(true),
        setGetUserSeasonTicketsID(e.target.id)
      ]);
  };

  return (
    <>
      {allClients.map((item) => (
        <CardWrapper key={item._id}>
          <div style={{position: 'relative'}}>
            <WrapperName>
              <span>Ім'я: <Names item={item}/></span>
              {/* <BTN onClick={HandleShowAllNames} id={item._id}>Всі імена</BTN> */}
            </WrapperName>
          </div>
          <WrapperSelectSeasonTicket>
            {/* <p>Абонемент: на  занять</p> */}
            {item.seasonTickets.length > 0 
            ?
            <>
            <p>Абонемент: на {item.seasonTickets[item.seasonTickets.length - 1].id} занять <br/>(залишок: {item.seasonTickets[item.seasonTickets.length - 1].remainderOfTrainnings})</p>
            <BTN onClick={HandleOpenModal} id={item._id}>+</BTN>
            <BTN onClick={HandleShowAllSeasonTickets} id={item._id}>Всі</BTN>
            <HandleRenderUserSeasonTickets item={item}/>
            </>
            : 
            <>
            <p>Абонемент: відсутні дані</p>
            <BTN onClick={HandleOpenModal} id={item._id}>+</BTN></>}
            {openModal ? <AddSeasonTicket HandleOpenModal={HandleOpenModal} getUserSeasonTicketID={getUserSeasonTicketID} item={item}/> : null}
          </WrapperSelectSeasonTicket>
          <span>Номер телефону:</span>
          <a href='tel:item.id' rel="noopener noreferrer">{item.id}</a>
          <div>
            <URLInsta instaNickName={item.info[0].instaNickName}/>
            <BTN onClick={HandleShowAllInstaNickNames} id={item._id}>Всі nickname</BTN>
            <HandleRenderInstaNickNames item={item}/>
          </div>
          <div>
            <span>Тренування:</span>
            <BTN onClick={HandleShowUserTrainee} id={item._id}>Всі тренування</BTN>
            <HandleRenderUserTrainee item={item}/>
          </div>
        </CardWrapper>
      ))}
    </>
  )
};

export default CardUser;