import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { BsInstagram, BsFillTelephoneFill, BsTelegram } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
// BsTelegram
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
    const nickname = item.info.length > 0 ? item.info[item.info.length - 1].instaNickName : 'test';
    // if (item.info[item.info.length - 1].instaNickName === undefined && item.info.length > 0 || '') {
    if (item.info.length > 0 && item.info[item.info.length - 1].instaNickName === undefined) {
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

  const TGInfo = ({ item }) => {
    // console.log(item)
    if (item.infoTG && item.infoTG.length > 0) {
      // console.log(item.infoTG.length)
      return (
        <>
          <BsTelegram size={12} style={{marginLeft:'10px', color: 'green'}}/>
        </>
      )
    }
    return (
      <>
        <BsTelegram size={12} style={{marginLeft:'10px', color: 'red'}}/>
      </>
    )
  }

  // console.log(allClients[188].infoTG.length)

  const LongestName = ({ item }) => {
    // console.log(allClients.findIndex(arr => arr === item))
    // const findIndexOnBase = allClients.findIndex(arr => arr === item);
    // const result = [];
    // item.info.map((info) => (
    //   result.push(info.name.length)));
    // const indexOfMaxValue = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
      return(
        <>
          <span>{item.info.length > 0 ? item.info[item.info.length - 1].name : <span></span>}</span>
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

  const handleFindTGInfo = () => {
    // const searchTG = e.target.value;
    const find = allClients.filter((client) => {
      const infoTG = client.infoTG.length > 0;
      return infoTG;
    });
    setResultOfFind(find);
    setShowAllUsers(false);
  };

  // const countGreenUserInfos = () => {
  //   const dateToday = moment().add(0, 'days').format('').slice(0, 10);
  //   let count = 0;
  //   for (let i = 0; i < allClients.length; i++) {
  //     const dateLastTraining = allClients[i].info[allClients[i].info.length - 1].date.slice(0, 10);
  //     const diffInDays = moment(dateToday).diff(moment(dateLastTraining), 'days');
  //     if (diffInDays < 7) {
  //       count++;
  //     }
  //   }
  //   return count;
  //   };
  const countGreenUserInfos = () => {
  const dateToday = moment().add(0, 'days').format('').slice(0, 10);
  let count = 0;
  for (let i = 0; i < allClients.length; i++) {
    if (allClients[i].info && allClients[i].info.length && allClients[i].info[allClients[i].info.length - 1]) {
      const dateLastTraining = allClients[i].info[allClients[i].info.length - 1].date.slice(0, 10);
      if (dateLastTraining === "0") {
        continue;
      }
      const diffInDays = moment(dateToday).diff(moment(dateLastTraining), 'days');
      if (diffInDays < 7) {
        count++;
      }
    }
  }
  return count;
  };
  
  // const sortedClients = allClients.sort((a, b) => b.info.length - a.info.length);
  const greenUserInfosCount = countGreenUserInfos();

  const CalculateBetween = ({ item }) => {
    const dateToday = moment().add(0, 'days').format('').slice(0, 10);
    const dateLastTraining = item.info.length > 0 ? item.info[item.info.length - 1].date.slice(0, 10) : '';
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
            <URLInsta item={item} />
            <TGInfo item={item} />    
          </div>
          </UserInfo>
{/* ===============================Найчастіше відвідування====================================================== */}
          <UserInfo>{item.info.length > 0 ? item.info[item.info.length - 1].kind_trainee : <span></span> }</UserInfo>
{/* ===============================Дата останнього тренування=================================================== */}
          <UserInfo>{item.info.length > 0 ? item.info[item.info.length - 1].date.slice(0, 10)  : <span></span>}<span>({item.info.length})</span></UserInfo>
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
  // ============Перевірка дублікатів====================================================================================

  // if (allClients.length > 0) {
  //   const checkedIds = [];
  //   const duplicates = allClients.reduce((result, client, index) => {
  //     if (checkedIds.includes(client.id) && !result.some(c => c.id === client.id)) {
  //       result.push({
  //         id: client.id,
  //         info: client.info,
  //         indexes: [checkedIds.indexOf(client.id), index]
  //       });
  //     } else {
  //       checkedIds.push(client.id);
  //     }
  //     return result;
  //   }, []);
  //   if (duplicates.length > 0) {
  //     console.log('Є дублікати:');
  //     duplicates.forEach((duplicate) => {
  //       console.log(`id: ${duplicate.id}, indexes: ${duplicate.indexes.join(', ')}, 
  //       day: ${duplicate.info[0].day}, 
  //       time: ${duplicate.info[0].time}, 
  //       kind_trainee: ${duplicate.info[0].kind_trainee}, 
  //       name: ${duplicate.info[0].name}, 
  //       instaNickName: ${duplicate.info[0].instaNickName}, 
  //       date: ${duplicate.info[0].date}, 
  //       visitTrainee: ${duplicate.info[0].visitTrainee}, 
  //       date: ${duplicate.info[0].date}, 
  //       date: ${duplicate.info[0].date}, 
  //       date: ${duplicate.info[0].date} `);
  //     });
  //   } else {
  //     console.log('Дублікатів немає');
  //   }
  // }


  const RenderAllUsers = () => {
    if(allClients.length === 0){
      return(null)
    }
    // const dateToday = moment().add(0, 'days').format('').slice(0, 10);
    // const dateDiff = ({ item }) => { return (moment(dateToday).diff(moment(item.info[item.info.length - 1].date.slice(0, 10)), 'days')) };
    // console.log(dateToday)
    // const sortedClients = allClients.sort((a, b) => b.info.length - a.info.length);
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
          <URLInsta item={item} />
          <TGInfo item={item} />    
          {/* <ShowCardUserBTN type="button" id={item._id} onClick={handleOpenModalCardUser}><HiMagnifyingGlassPlus size={12} id={item._id} onClick={handleOpenModalCardUser}/></ShowCardUserBTN> */}
        </div>
        </UserInfo>
{/* ===============================Найчастіше відвідування====================================================== */}
        <UserInfo>{item.info.length > 0 ? item.info[item.info.length - 1].kind_trainee : <span></span>}</UserInfo>
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
  // console.log("allClients, ", allClients);

  function countUsersWithInfoTG(users) {
    // if (!Array.isArray(users)) {
    //   return 0;
    // }

    let count = 0;
    for (const user of users) {
      if (user.infoTG && user.infoTG.length > 0) {
        count++;
      }
    }

    return count;
  }
  // if (allClients.length > 0) {
    const result = countUsersWithInfoTG(allClients);
  // }

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
        <p>Клієнтів за тиждень: {greenUserInfosCount}</p>
        <p>Клієнтів TG: {result}
          <button onClick={handleFindTGInfo} style={{ padding: '2px 5px 2px 5px', border: 'none' }}>
            <BsTelegram size={8} style={{ marginLeft: '1px', paddingTop: '0px', color: 'green' }} />
          </button>
        </p>
        {resultOfFind ? <RenderFindingUser/> : <RenderAllUsers/>}
      </ListUsers>
    </WrapperUsers>
  )
};

export default AllClients;