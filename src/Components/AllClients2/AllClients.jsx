import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import AddSeasonTicket from "./AddSeasonTicket/AddSeasonTicket";
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

  // const handleOpenModalCardUser = (e) =>{
  //   // console.log(e.target.id)
  //   e.preventDefault();
  //   if(openModalCardUser === true){
  //     return([
  //       setOpenModalCardUser(false),
  //       setGetUserSeasonTicketID('')
  //     ]);
  //   }
  //   return([
  //     setOpenModalCardUser(true),
  //     setGetUserSeasonTicketID(e.target.id),
  //     // setUserData(allClients.filter(arr => arr._id === e.target.id)[0])
  //   ]);
  // };

  const URLInsta = ({ item }) => {
    const nickname = item.info[0].instaNickName;
    if (item.info[0].instaNickName === undefined || '') {
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
    const indexOfMaxValue = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
      return(
        <>
          <span>{item.info[indexOfMaxValue].name}</span>
        </>
      )
  };

  const handleFindOfName = (e) => {
    const searchName = e.target.value;
    const find = allClients.filter(arr => arr.info.some(infoName => infoName.name === searchName));
    return [setResultOfFind(find),
      setShowAllUsers(false)];
  }

  const handleFindOfInsta = (e) => {
    const searchInstaNickName = '@' + e.target.value;
    // const dataClientToday0800 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '08:00'));
    const find = allClients.filter(arr => arr.info.some(infoInsta => infoInsta.instaNickName === searchInstaNickName));
    return setResultOfFind(find);
  }

  const handleFindOfNumber = (e) => {
    const searchINumber = '+38' + e.target.value;
    // const dataClientToday0800 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '08:00'));
    const find = allClients.filter(arr => arr.id === searchINumber);
    return setResultOfFind(find);
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
          <UserInfo>{item.info[item.info.length - 1].date.slice(0, 10)}</UserInfo>
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
    return(
      <>
      {showAllUsers ? 
      allClients.map((item) => (
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
        <UserInfo>{item.info[item.info.length - 1].date.slice(0, 10)}</UserInfo>
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