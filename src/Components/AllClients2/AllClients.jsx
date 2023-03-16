import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import AddSeasonTicket from "./AddSeasonTicket/AddSeasonTicket";
import moment from 'moment/moment';
// import CardUser from "./CardUser/CardUser";
// import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import {
  WrapperUsers,
  ListName,
  UserInfo,
  WrapperList,
  ListUsers,
  CardWrapper,
  SearchUser,
  SearchList,
  NameOfSearch,
  ResetBTN,
  AddSeasonTicketBTN,
  WrapperSeasonTiket,
  // ShowCardUserBTN
} from './AllClients.styled';

const AllClients = () => {
  const [allClients, setAllClients] = useState('');
  const [resultOfFind, setResultOfFind] = useState('');
  const [showAllUsers, setShowAllUsers] = useState(true);
  const [openModalSeasonTicket, setOpenModalSeasonTicket] = useState(false);
  // const [openModalCardUser, setOpenModalCardUser] = useState(false);
  const [getUserSeasonTicketID, setGetUserSeasonTicketID] = useState('');
  // const [userData, setUserData] = useState('');

  useEffect(() => {
    const getAllClients = async () => {
      const result = await clientAPI.getDataALLUsers();
      setAllClients(result);
    };
    if (allClients === '') {
      getAllClients();
    }
  },[allClients]);

  const handleOpenModalSeasonTicket = (e) =>{
    e.preventDefault();
    if(openModalSeasonTicket === true){
      return([
        setOpenModalSeasonTicket(false),
        setGetUserSeasonTicketID('')
      ]);
    }
    return([
      setOpenModalSeasonTicket(true),
      setGetUserSeasonTicketID(e.target.id)
    ]);
  };

  const URLInsta = ({ item }) => {
    const nickname = item.info[item.info.length - 1].instaNickName;
    if (item.info[item.info.length - 1].instaNickName === undefined || '') {
      return (null);
    }
      const restructureNickname = nickname.substring(1);
      const linkInsta = `https://www.instagram.com/${restructureNickname}/`
      return (
        <>
          <a href={linkInsta} target="_blank" rel="noopener noreferrer" style={{marginLeft:'10px'}}><BsInstagram size={12}/></a>
        </>
      );
  };

  const LongestName = ({item}) =>{
    const result = [];
    item.info.map((info) => (
      result.push(info.name.length)));
    // const indexOfMaxValue = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
      return(
        <>
          <span>{item.info[item.info.length - 1].name}</span>
        </>
      )
  };

const handleFindOfName = (e) => {
  const searchName = e.target.value.toLowerCase();
  const find = allClients.filter(client => {
    const { info } = client;
    for (let i = 0; i < info.length; i++) {
      const name = info[i].name.toLowerCase();
      if (name.includes(searchName)) {
        return true;
      }
    }
    return false;
  });
  setResultOfFind(find);
  setShowAllUsers(false);
};

  const handleFindOfInsta = (e) => {
    const searchInstaNickName = '@' + e.target.value;
    const find = allClients.filter(client => {
    const { info } = client;
    for (let i = 0; i < info.length; i++) {
      const insta = info[i].instaNickName;
      if (insta === undefined) {
        return false;
      }
      if (insta.includes(searchInstaNickName)) {
        return true;
      }
    }
    return false;
  });
  setResultOfFind(find);
  setShowAllUsers(false);
  }

  const handleFindOfNumber = (e) => {
    const searchINumber = '+38' + e.target.value;
    const find = allClients.filter((client) => {
      const number = client.id;
      return number.includes(searchINumber);
    });
    setResultOfFind(find);
    setShowAllUsers(false);
  };

  const CalculateBetween = ({ item }) => {
    const dateToday = moment().add(0, 'days').format('').slice(0, 10);
    const dateLastTraining = item.info[item.info.length - 1].date.slice(0, 10);
    const diffInDays = moment(dateToday).diff(moment(dateLastTraining), 'days');
    // Now you can use the `diffInDays` variable to conditionally apply styles to UserInfo component
    return(
    <UserInfo style={{ color: diffInDays >= 7 ? 'red' : 'green' }}>
      {dateLastTraining}<span>({item.info.length})</span>
    </UserInfo>)
  }

  const RenderFindingUser = () => {
    if(resultOfFind.length === 0){
      return(null)
    };
    return(
      <>
      {resultOfFind.map((item) => (
        <li key={item._id}>
        <CardWrapper key={item._id}>
{/* ===============================Прізвище та ім'я============================================================ */}
          <UserInfo><LongestName item={item}/><br/>
          <div style={{marginLeft:'10px'}}>
            <a href={`tel:${item.id}`} rel="noopener noreferrer"><BsFillTelephoneFill size={12}/></a>
          <URLInsta item={item}/></div>
          </UserInfo>
{/* ===============================Найчастіше відвідування====================================================== */}
          <UserInfo>{item.info[item.info.length - 1].kind_trainee}</UserInfo>
{/* ===============================Дата останнього тренування=================================================== */}
          <UserInfo>{item.info[item.info.length - 1].date.slice(0, 10)}<span>({item.info.length})</span></UserInfo>
{/* ===============================Абонемент (залишок) та дата придбання======================================== */}
          <WrapperSeasonTiket>
            {item.seasonTickets[item.seasonTickets.length - 1] === undefined 
            ? 
            <span></span> 
            : 
            <span>{item.seasonTickets[item.seasonTickets.length - 1].limitOfTrainnings}&nbsp; 
            ({item.seasonTickets[item.seasonTickets.length - 1].remainderOfTrainnings})<br/>
            {item.seasonTickets[item.seasonTickets.length - 1].dateOfBuying.slice(0,10)}</span>}
            <AddSeasonTicketBTN onClick={handleOpenModalSeasonTicket} id={item._id}>+</AddSeasonTicketBTN>
            </WrapperSeasonTiket>
            {openModalSeasonTicket ? <AddSeasonTicket handleOpenModal={handleOpenModalSeasonTicket} getUserSeasonTicketID={getUserSeasonTicketID} item={item}/> : null}
        </CardWrapper>
        {/* {openModalCardUser ? <CardUser handleOpenModalCardUser={handleOpenModalCardUser} item={item}/> : null} */}
        </li>
      ))}
      </>
    )
  };
  
  const RenderAllUsers = () => {
    if(allClients.length === 0){
      return(null)
    }
    // const dateToday = moment().add(0, 'days').format('').slice(0, 10);
    // const dateDiff = ({ item }) => { return (moment(dateToday).diff(moment(item.info[item.info.length - 1].date.slice(0, 10)), 'days')) };
    // console.log(dateToday)
    const sortedClients = allClients.sort((a, b) => b.info.length - a.info.length);
    return(
      <>
      {showAllUsers ? 
      sortedClients.map((item) => (
      <li key={item._id}>
      <CardWrapper key={item._id}>
{/* ===============================Прізвище та ім'я============================================================ */}
        <UserInfo><LongestName item={item}/><br/>
        <div style={{marginLeft:'10px'}}>
          <a href={`tel:${item.id}`} rel="noopener noreferrer"><BsFillTelephoneFill size={12}/></a>
          <URLInsta item={item}/>
          {/* <ShowCardUserBTN type="button" id={item._id} onClick={handleOpenModalCardUser}><HiMagnifyingGlassPlus size={12} id={item._id} onClick={handleOpenModalCardUser}/></ShowCardUserBTN> */}
        </div>
        </UserInfo>
{/* ===============================Найчастіше відвідування====================================================== */}
        <UserInfo>{item.info[item.info.length - 1].kind_trainee}</UserInfo>
{/* ===============================Дата останнього тренування=================================================== */}
        <CalculateBetween item={item}/>
{/* ===============================Абонемент (залишок) та дата придбання======================================== */}
        <WrapperSeasonTiket>
          {item.seasonTickets[item.seasonTickets.length - 1] === undefined 
          ? 
          <span></span> 
          : 
          <span>{item.seasonTickets[item.seasonTickets.length - 1].limitOfTrainnings}&nbsp; 
          ({item.seasonTickets[item.seasonTickets.length - 1].remainderOfTrainnings})<br/>
          {item.seasonTickets[item.seasonTickets.length - 1].dateOfBuying.slice(0,10)}</span>}
          <AddSeasonTicketBTN onClick={handleOpenModalSeasonTicket} id={item._id}>+</AddSeasonTicketBTN>
          </WrapperSeasonTiket>
          {openModalSeasonTicket ? <AddSeasonTicket handleOpenModal={handleOpenModalSeasonTicket} getUserSeasonTicketID={getUserSeasonTicketID} item={item}/> : null}
      </CardWrapper>
      {/* {openModalCardUser ? <CardUser handleOpenModalCardUser={handleOpenModalCardUser} userData={userData}/> : null} */}
      </li>
    )) : <></>}
  </>)};

  const handleShowAllUsers = () =>{
    document.getElementById("name").value = "";
    document.getElementById("nickname").value = "";
    document.getElementById("number").value = "";
    setShowAllUsers(true)
    setResultOfFind('')
  }

  return (
    <WrapperUsers>
      <WrapperList>
        <ListName>Прізвище та ім'я</ListName>
        <ListName>Найчастіше відвідування</ListName>
        <ListName>Дата останнього тренування</ListName>
        <ListName>Абонемент (залишок) та дата придбання</ListName>
      </WrapperList>
      <SearchList>
        <NameOfSearch>
          <p><BiSearchAlt2/>ПІБ</p>
          <SearchUser type="text" id="name" placeholder="Олександр" onChange={handleFindOfName}/>
        </NameOfSearch>
        <NameOfSearch>
          <p><BiSearchAlt2/>Instagram</p>
          <SearchUser type="text" id="nickname" placeholder="arsfit_studio" onChange={handleFindOfInsta}/>
        </NameOfSearch>
        <NameOfSearch>
          <p><BsFillTelephoneFill/>Телефон</p>
          <SearchUser type="text" id="number" placeholder="0631234567" onChange={handleFindOfNumber}/>
        </NameOfSearch>
        <NameOfSearch>
          <ResetBTN type="button" onClick={handleShowAllUsers}>Всі</ResetBTN>
        </NameOfSearch>
      </SearchList>
      <ListUsers>
        {resultOfFind ? <RenderFindingUser/> : <RenderAllUsers/>}
      </ListUsers>
    </WrapperUsers>
  )
};

export default AllClients;