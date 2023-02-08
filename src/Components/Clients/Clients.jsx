import { useEffect, useState } from "react";
import { clientAPI } from 'service/axios.config';
import moment from 'moment/moment';

const Clients = ({ dataClients }) => {
  const [user1, setUser1] = useState('');

  if (dataClients !== '') {
    const dateToday = moment().format('').slice(0, 10);
    // console.log("dateToday: ", dateToday);
    // console.log("dataClients: ", dataClients);
    // const TEST = dataClients.filter(arr => arr.info.slice(0, 10) === '2023-02-09');
    const Test_1 = dataClients.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday));
    setUser1(Test_1);
    // const Test_2 = Test_1.map(info => info.map(info => info.date));
    console.log("user1: ", user1);
    // console.log("Test_2: ", Test_2);
    
    // console.log(dataClients.filter(arr => arr.info.filter(infoDate => infoDate.date.slice(0, 10))));
    // console.log(TEST);
  }



  return (
    <>
    <span>HI</span>
    </>
  )
};

export default Clients;