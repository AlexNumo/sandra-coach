import { useState, useEffect } from 'react';
import { clientAPI } from 'service/axios.config';
import moment from 'moment/moment';
// import Clients from 'Components/Clients/Clients';
import {
  WrapperDay,
  WrapperBTN,
  Days,
  InfoTraineeWrapper,
  Time,
  WaitingWrapper,
} from './Record.styled';

const Record = () => {
  const [data0800, setData0800] = useState('');
  const [data0900, setData0900] = useState([]);
  const [data1000, setData1000] = useState([]);
  const [data1100, setData1100] = useState([]);
  const [data1200, setData1200] = useState([]);
  const [data1300, setData1300] = useState([]);
  const [data1400, setData1400] = useState([]);
  const [data1500, setData1500] = useState([]);
  const [data1600, setData1600] = useState([]);
  const [data1700, setData1700] = useState([]);
  const [data1800, setData1800] = useState([]);
  const [data1900, setData1900] = useState([]);
  const [data2000, setData2000] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [kind_trainee, setKind_trainee] = useState('');
  // const [day, setDay] = useState('');
  // const [time, setTime] = useState('');
  // const [dateClickOnBTN, setDateClickOnBTN] = useState('');
  const [sunday, setSunday] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  // const [friday, setFriday] = useState({
  //   id: '+380633576239',
  //   info: {
  //     day: 'friday',
  //     time: '09:00',
  //     kind_trainee: 'TRX + Tabata',
  //     name: 'Олександр',
  //     instaNickname: '@koksik839',
  //     date: '2023-02-10T08:00:55.000+00:00'
  //   }
  // });
  const [saturday, setSaturday] = useState('');
  const [dataClientsToday0800, setDataClientToday0800] = useState('');
  const [dataClientsNextDay, setDataClientNextDay] = useState('');
  const [dataClientsNextDay1, setDataClientNextDay1] = useState('');
  const [dataClientsNextDay2, setDataClientNextDay2] = useState('');
  const [dataClientsNextDay3, setDataClientNextDay3] = useState('');
  const [dataClientsNextDay4, setDataClientNextDay4] = useState('');
  const [dataClientsNextDay5, setDataClientNextDay5] = useState('');
  const [user1, setUser1] = useState('');

  // useEffect(() => {
  //   clientAPI.getDataALL().then(
  //     (result) => {
  //       const FindMonday0800 = result.filter(arr => arr.id === 'monday08:00');
  //       const FindTuesday0800 = result.filter(arr => arr.id === 'tuesday08:00');
  //       const FindWednesday0800 = result.filter(arr => arr.id === 'wednesday08:00');
  //       const FindThursday0800 = result.filter(arr => arr.id === 'thursday08:00');
  //       const FindFriday0800 = result.filter(arr => arr.id === 'friday08:00');
  //       const FindSaturday0800 = result.filter(arr => arr.id === 'saturday08:00');
  //       const FindSunday0800 = result.filter(arr => arr.id === 'sunday08:00');
  //       const FindMonday0900 = result.filter(arr => arr.id === 'monday09:00');
  //       const FindTuesday0900 = result.filter(arr => arr.id === 'tuesday09:00');
  //       const FindWednesday0900 = result.filter(arr => arr.id === 'wednesday09:00');
  //       const FindThursday0900 = result.filter(arr => arr.id === 'thursday09:00');
  //       const FindFriday0900 = result.filter(arr => arr.id === 'friday09:00');
  //       const FindSaturday0900 = result.filter(arr => arr.id === 'saturday09:00');
  //       const FindSunday0900 = result.filter(arr => arr.id === 'sunday09:00');
  //       const FindMonday1000 = result.filter(arr => arr.id === 'monday10:00');
  //       const FindTuesday1000 = result.filter(arr => arr.id === 'tuesday10:00');
  //       const FindWednesday1000 = result.filter(arr => arr.id === 'wednesday10:00');
  //       const FindThursday1000 = result.filter(arr => arr.id === 'thursday10:00');
  //       const FindFriday1000 = result.filter(arr => arr.id === 'friday10:00');
  //       const FindSaturday1000 = result.filter(arr => arr.id === 'saturday10:00');
  //       const FindSunday1000 = result.filter(arr => arr.id === 'sunday10:00');
  //       const FindMonday1100 = result.filter(arr => arr.id === 'monday11:00');
  //       const FindTuesday1100 = result.filter(arr => arr.id === 'tuesday11:00');
  //       const FindWednesday1100 = result.filter(arr => arr.id === 'wednesday11:00');
  //       const FindThursday1100 = result.filter(arr => arr.id === 'thursday11:00');
  //       const FindFriday1100 = result.filter(arr => arr.id === 'friday11:00');
  //       const FindSaturday1100 = result.filter(arr => arr.id === 'saturday11:00');
  //       const FindSunday1100 = result.filter(arr => arr.id === 'sunday11:00');
  //       const FindMonday1200 = result.filter(arr => arr.id === 'monday12:00');
  //       const FindTuesday1200 = result.filter(arr => arr.id === 'tuesday12:00');
  //       const FindWednesday1200 = result.filter(arr => arr.id === 'wednesday12:00');
  //       const FindThursday1200 = result.filter(arr => arr.id === 'thursday12:00');
  //       const FindFriday1200 = result.filter(arr => arr.id === 'friday12:00');
  //       const FindSaturday1200 = result.filter(arr => arr.id === 'saturday12:00');
  //       const FindSunday1200 = result.filter(arr => arr.id === 'sunday12:00');
  //       const FindMonday1300 = result.filter(arr => arr.id === 'monday13:00');
  //       const FindTuesday1300 = result.filter(arr => arr.id === 'tuesday13:00');
  //       const FindWednesday1300 = result.filter(arr => arr.id === 'wednesday13:00');
  //       const FindThursday1300 = result.filter(arr => arr.id === 'thursday13:00');
  //       const FindFriday1300 = result.filter(arr => arr.id === 'friday13:00');
  //       const FindSaturday1300 = result.filter(arr => arr.id === 'saturday13:00');
  //       const FindSunday1300 = result.filter(arr => arr.id === 'sunday13:00');
  //       const FindMonday1400 = result.filter(arr => arr.id === 'monday14:00');
  //       const FindTuesday1400 = result.filter(arr => arr.id === 'tuesday14:00');
  //       const FindWednesday1400 = result.filter(arr => arr.id === 'wednesday14:00');
  //       const FindThursday1400 = result.filter(arr => arr.id === 'thursday14:00');
  //       const FindFriday1400 = result.filter(arr => arr.id === 'friday14:00');
  //       const FindSaturday1400 = result.filter(arr => arr.id === 'saturday14:00');
  //       const FindSunday1400 = result.filter(arr => arr.id === 'sunday14:00');
  //       const FindMonday1500 = result.filter(arr => arr.id === 'monday15:00');
  //       const FindTuesday1500 = result.filter(arr => arr.id === 'tuesday15:00');
  //       const FindWednesday1500 = result.filter(arr => arr.id === 'wednesday15:00');
  //       const FindThursday1500 = result.filter(arr => arr.id === 'thursday15:00');
  //       const FindFriday1500 = result.filter(arr => arr.id === 'friday15:00');
  //       const FindSaturday1500 = result.filter(arr => arr.id === 'saturday15:00');
  //       const FindSunday1500 = result.filter(arr => arr.id === 'sunday15:00');
  //       const FindMonday1600 = result.filter(arr => arr.id === 'monday16:00');
  //       const FindTuesday1600 = result.filter(arr => arr.id === 'tuesday16:00');
  //       const FindWednesday1600 = result.filter(arr => arr.id === 'wednesday16:00');
  //       const FindThursday1600 = result.filter(arr => arr.id === 'thursday16:00');
  //       const FindFriday1600 = result.filter(arr => arr.id === 'friday16:00');
  //       const FindSaturday1600 = result.filter(arr => arr.id === 'saturday16:00');
  //       const FindSunday1600 = result.filter(arr => arr.id === 'sunday16:00');
  //       const FindMonday1700 = result.filter(arr => arr.id === 'monday17:00');
  //       const FindTuesday1700 = result.filter(arr => arr.id === 'tuesday17:00');
  //       const FindWednesday1700 = result.filter(arr => arr.id === 'wednesday17:00');
  //       const FindThursday1700 = result.filter(arr => arr.id === 'thursday17:00');
  //       const FindFriday1700 = result.filter(arr => arr.id === 'friday17:00');
  //       const FindSaturday1700 = result.filter(arr => arr.id === 'saturday17:00');
  //       const FindSunday1700 = result.filter(arr => arr.id === 'sunday17:00');
  //       const FindMonday1800 = result.filter(arr => arr.id === 'monday18:00');
  //       const FindTuesday1800 = result.filter(arr => arr.id === 'tuesday18:00');
  //       const FindWednesday1800 = result.filter(arr => arr.id === 'wednesday18:00');
  //       const FindThursday1800 = result.filter(arr => arr.id === 'thursday18:00');
  //       const FindFriday1800 = result.filter(arr => arr.id === 'friday18:00');
  //       const FindSaturday1800 = result.filter(arr => arr.id === 'saturday18:00');
  //       const FindSunday1800 = result.filter(arr => arr.id === 'sunday18:00');
  //       const FindMonday1900 = result.filter(arr => arr.id === 'monday19:00');
  //       const FindTuesday1900 = result.filter(arr => arr.id === 'tuesday19:00');
  //       const FindWednesday1900 = result.filter(arr => arr.id === 'wednesday19:00');
  //       const FindThursday1900 = result.filter(arr => arr.id === 'thursday19:00');
  //       const FindFriday1900 = result.filter(arr => arr.id === 'friday19:00');
  //       const FindSaturday1900 = result.filter(arr => arr.id === 'saturday19:00');
  //       const FindSunday1900 = result.filter(arr => arr.id === 'sunday19:00');
  //       const FindMonday2000 = result.filter(arr => arr.id === 'monday20:00');
  //       const FindTuesday2000 = result.filter(arr => arr.id === 'tuesday20:00');
  //       const FindWednesday2000 = result.filter(arr => arr.id === 'wednesday20:00');
  //       const FindThursday2000 = result.filter(arr => arr.id === 'thursday20:00');
  //       const FindFriday2000 = result.filter(arr => arr.id === 'friday20:00');
  //       const FindSaturday2000 = result.filter(arr => arr.id === 'saturday20:00');
  //       const FindSunday2000 = result.filter(arr => arr.id === 'sunday20:00');

  //       const resultState0800 = [
  //         {id: FindMonday0800[0].id, day: FindMonday0800[0].day, time: FindMonday0800[0].time, kind_trainee: FindMonday0800[0].kind_trainee, name_Coach: FindMonday0800[0].name_Coach},
  //         {id: FindTuesday0800[0].id, day: FindTuesday0800[0].day, time: FindTuesday0800[0].time, kind_trainee: FindTuesday0800[0].kind_trainee, name_Coach: FindTuesday0800[0].name_Coach},
  //         {id: FindWednesday0800[0].id, day: FindWednesday0800[0].day, time: FindWednesday0800[0].time, kind_trainee: FindWednesday0800[0].kind_trainee, name_Coach: FindWednesday0800[0].name_Coach},
  //         {id: FindThursday0800[0].id, day: FindThursday0800[0].day, time: FindThursday0800[0].time, kind_trainee: FindThursday0800[0].kind_trainee, name_Coach: FindThursday0800[0].name_Coach},
  //         {id: FindFriday0800[0].id, day: FindFriday0800[0].day, time: FindFriday0800[0].time, kind_trainee: FindFriday0800[0].kind_trainee, name_Coach: FindFriday0800[0].name_Coach},
  //         {id: FindSaturday0800[0].id, day: FindSaturday0800[0].day, time: FindSaturday0800[0].time, kind_trainee: FindSaturday0800[0].kind_trainee, name_Coach: FindSaturday0800[0].name_Coach},
  //         {id: FindSunday0800[0].id, day: FindSunday0800[0].day, time: FindSunday0800[0].time, kind_trainee: FindSunday0800[0].kind_trainee, name_Coach: FindSunday0800[0].name_Coach},
  //       ]

  //       const resultState0900 = [
  //         {id: FindMonday0900[0].id, day: FindMonday0900[0].day, time: FindMonday0900[0].time, kind_trainee: FindMonday0900[0].kind_trainee, name_Coach: FindMonday0900[0].name_Coach},
  //         {id: FindTuesday0900[0].id, day: FindTuesday0900[0].day, time: FindTuesday0900[0].time, kind_trainee: FindTuesday0900[0].kind_trainee, name_Coach: FindTuesday0900[0].name_Coach},
  //         {id: FindWednesday0900[0].id, day: FindWednesday0900[0].day, time: FindWednesday0900[0].time, kind_trainee: FindWednesday0900[0].kind_trainee, name_Coach: FindWednesday0900[0].name_Coach},
  //         {id: FindThursday0900[0].id, day: FindThursday0900[0].day, time: FindThursday0900[0].time, kind_trainee: FindThursday0900[0].kind_trainee, name_Coach: FindThursday0900[0].name_Coach},
  //         {id: FindFriday0900[0].id, day: FindFriday0900[0].day, time: FindFriday0900[0].time, kind_trainee: FindFriday0900[0].kind_trainee, name_Coach: FindFriday0900[0].name_Coach},
  //         {id: FindSaturday0900[0].id, day: FindSaturday0900[0].day, time: FindSaturday0900[0].time, kind_trainee: FindSaturday0900[0].kind_trainee, name_Coach: FindSaturday0900[0].name_Coach},
  //         {id: FindSunday0900[0].id, day: FindSunday0900[0].day, time: FindSunday0900[0].time, kind_trainee: FindSunday0900[0].kind_trainee, name_Coach: FindSunday0900[0].name_Coach},
  //       ]
  //       const resultState1000 = [
  //         {id: FindMonday1000[0].id, day: FindMonday1000[0].day, time: FindMonday1000[0].time, kind_trainee: FindMonday1000[0].kind_trainee, name_Coach: FindMonday1000[0].name_Coach},
  //         {id: FindTuesday1000[0].id, day: FindTuesday1000[0].day, time: FindTuesday1000[0].time, kind_trainee: FindTuesday1000[0].kind_trainee, name_Coach: FindTuesday1000[0].name_Coach},
  //         {id: FindWednesday1000[0].id, day: FindWednesday1000[0].day, time: FindWednesday1000[0].time, kind_trainee: FindWednesday1000[0].kind_trainee, name_Coach: FindWednesday1000[0].name_Coach},
  //         {id: FindThursday1000[0].id, day: FindThursday1000[0].day, time: FindThursday1000[0].time, kind_trainee: FindThursday1000[0].kind_trainee, name_Coach: FindThursday1000[0].name_Coach},
  //         {id: FindFriday1000[0].id, day: FindFriday1000[0].day, time: FindFriday1000[0].time, kind_trainee: FindFriday1000[0].kind_trainee, name_Coach: FindFriday1000[0].name_Coach},
  //         {id: FindSaturday1000[0].id, day: FindSaturday1000[0].day, time: FindSaturday1000[0].time, kind_trainee: FindSaturday1000[0].kind_trainee, name_Coach: FindSaturday1000[0].name_Coach},
  //         {id: FindSunday1000[0].id, day: FindSunday1000[0].day, time: FindSunday1000[0].time, kind_trainee: FindSunday1000[0].kind_trainee, name_Coach: FindSunday1000[0].name_Coach},
  //       ]
  //       const resultState1100 = [
  //         {id: FindMonday1100[0].id, day: FindMonday1100[0].day, time: FindMonday1100[0].time, kind_trainee: FindMonday1100[0].kind_trainee, name_Coach: FindMonday1100[0].name_Coach},
  //         {id: FindTuesday1100[0].id, day: FindTuesday1100[0].day, time: FindTuesday1100[0].time, kind_trainee: FindTuesday1100[0].kind_trainee, name_Coach: FindTuesday1100[0].name_Coach},
  //         {id: FindWednesday1100[0].id, day: FindWednesday1100[0].day, time: FindWednesday1100[0].time, kind_trainee: FindWednesday1100[0].kind_trainee, name_Coach: FindWednesday1100[0].name_Coach},
  //         {id: FindThursday1100[0].id, day: FindThursday1100[0].day, time: FindThursday1100[0].time, kind_trainee: FindThursday1100[0].kind_trainee, name_Coach: FindThursday1100[0].name_Coach},
  //         {id: FindFriday1100[0].id, day: FindFriday1100[0].day, time: FindFriday1100[0].time, kind_trainee: FindFriday1100[0].kind_trainee, name_Coach: FindFriday1100[0].name_Coach},
  //         {id: FindSaturday1100[0].id, day: FindSaturday1100[0].day, time: FindSaturday1100[0].time, kind_trainee: FindSaturday1100[0].kind_trainee, name_Coach: FindSaturday1100[0].name_Coach},
  //         {id: FindSunday1100[0].id, day: FindSunday1100[0].day, time: FindSunday1100[0].time, kind_trainee: FindSunday1100[0].kind_trainee, name_Coach: FindSunday1100[0].name_Coach},
  //       ]
  //       const resultState1200 = [
  //         {id: FindMonday1200[0].id, day: FindMonday1200[0].day, time: FindMonday1200[0].time, kind_trainee: FindMonday1200[0].kind_trainee, name_Coach: FindMonday1200[0].name_Coach},
  //         {id: FindTuesday1200[0].id, day: FindTuesday1200[0].day, time: FindTuesday1200[0].time, kind_trainee: FindTuesday1200[0].kind_trainee, name_Coach: FindTuesday1200[0].name_Coach},
  //         {id: FindWednesday1200[0].id, day: FindWednesday1200[0].day, time: FindWednesday1200[0].time, kind_trainee: FindWednesday1200[0].kind_trainee, name_Coach: FindWednesday1200[0].name_Coach},
  //         {id: FindThursday1200[0].id, day: FindThursday1200[0].day, time: FindThursday1200[0].time, kind_trainee: FindThursday1200[0].kind_trainee, name_Coach: FindThursday1200[0].name_Coach},
  //         {id: FindFriday1200[0].id, day: FindFriday1200[0].day, time: FindFriday1200[0].time, kind_trainee: FindFriday1200[0].kind_trainee, name_Coach: FindFriday1200[0].name_Coach},
  //         {id: FindSaturday1200[0].id, day: FindSaturday1200[0].day, time: FindSaturday1200[0].time, kind_trainee: FindSaturday1200[0].kind_trainee, name_Coach: FindSaturday1200[0].name_Coach},
  //         {id: FindSunday1200[0].id, day: FindSunday1200[0].day, time: FindSunday1200[0].time, kind_trainee: FindSunday1200[0].kind_trainee, name_Coach: FindSunday1200[0].name_Coach},
  //       ]
  //       const resultState1300 = [
  //         {id: FindMonday1300[0].id, day: FindMonday1300[0].day, time: FindMonday1300[0].time, kind_trainee: FindMonday1300[0].kind_trainee, name_Coach: FindMonday1300[0].name_Coach},
  //         {id: FindTuesday1300[0].id, day: FindTuesday1300[0].day, time: FindTuesday1300[0].time, kind_trainee: FindTuesday1300[0].kind_trainee, name_Coach: FindTuesday1300[0].name_Coach},
  //         {id: FindWednesday1300[0].id, day: FindWednesday1300[0].day, time: FindWednesday1300[0].time, kind_trainee: FindWednesday1300[0].kind_trainee, name_Coach: FindWednesday1300[0].name_Coach},
  //         {id: FindThursday1300[0].id, day: FindThursday1300[0].day, time: FindThursday1300[0].time, kind_trainee: FindThursday1300[0].kind_trainee, name_Coach: FindThursday1300[0].name_Coach},
  //         {id: FindFriday1300[0].id, day: FindFriday1300[0].day, time: FindFriday1300[0].time, kind_trainee: FindFriday1300[0].kind_trainee, name_Coach: FindFriday1300[0].name_Coach},
  //         {id: FindSaturday1300[0].id, day: FindSaturday1300[0].day, time: FindSaturday1300[0].time, kind_trainee: FindSaturday1300[0].kind_trainee, name_Coach: FindSaturday1300[0].name_Coach},
  //         {id: FindSunday1300[0].id, day: FindSunday1300[0].day, time: FindSunday1300[0].time, kind_trainee: FindSunday1300[0].kind_trainee, name_Coach: FindSunday1300[0].name_Coach},
  //       ]
  //       const resultState1400 = [
  //         {id: FindMonday1400[0].id, day: FindMonday1400[0].day, time: FindMonday1400[0].time, kind_trainee: FindMonday1400[0].kind_trainee, name_Coach: FindMonday1400[0].name_Coach},
  //         {id: FindTuesday1400[0].id, day: FindTuesday1400[0].day, time: FindTuesday1400[0].time, kind_trainee: FindTuesday1400[0].kind_trainee, name_Coach: FindTuesday1400[0].name_Coach},
  //         {id: FindWednesday1400[0].id, day: FindWednesday1400[0].day, time: FindWednesday1400[0].time, kind_trainee: FindWednesday1400[0].kind_trainee, name_Coach: FindWednesday1400[0].name_Coach},
  //         {id: FindThursday1400[0].id, day: FindThursday1400[0].day, time: FindThursday1400[0].time, kind_trainee: FindThursday1400[0].kind_trainee, name_Coach: FindThursday1400[0].name_Coach},
  //         {id: FindFriday1400[0].id, day: FindFriday1400[0].day, time: FindFriday1400[0].time, kind_trainee: FindFriday1400[0].kind_trainee, name_Coach: FindFriday1400[0].name_Coach},
  //         {id: FindSaturday1400[0].id, day: FindSaturday1400[0].day, time: FindSaturday1400[0].time, kind_trainee: FindSaturday1400[0].kind_trainee, name_Coach: FindSaturday1400[0].name_Coach},
  //         {id: FindSunday1400[0].id, day: FindSunday1400[0].day, time: FindSunday1400[0].time, kind_trainee: FindSunday1400[0].kind_trainee, name_Coach: FindSunday1400[0].name_Coach},
  //       ]
  //       const resultState1500 = [
  //         {id: FindMonday1500[0].id, day: FindMonday1500[0].day, time: FindMonday1500[0].time, kind_trainee: FindMonday1500[0].kind_trainee, name_Coach: FindMonday1500[0].name_Coach},
  //         {id: FindTuesday1500[0].id, day: FindTuesday1500[0].day, time: FindTuesday1500[0].time, kind_trainee: FindTuesday1500[0].kind_trainee, name_Coach: FindTuesday1500[0].name_Coach},
  //         {id: FindWednesday1500[0].id, day: FindWednesday1500[0].day, time: FindWednesday1500[0].time, kind_trainee: FindWednesday1500[0].kind_trainee, name_Coach: FindWednesday1500[0].name_Coach},
  //         {id: FindThursday1500[0].id, day: FindThursday1500[0].day, time: FindThursday1500[0].time, kind_trainee: FindThursday1500[0].kind_trainee, name_Coach: FindThursday1500[0].name_Coach},
  //         {id: FindFriday1500[0].id, day: FindFriday1500[0].day, time: FindFriday1500[0].time, kind_trainee: FindFriday1500[0].kind_trainee, name_Coach: FindFriday1500[0].name_Coach},
  //         {id: FindSaturday1500[0].id, day: FindSaturday1500[0].day, time: FindSaturday1500[0].time, kind_trainee: FindSaturday1500[0].kind_trainee, name_Coach: FindSaturday1500[0].name_Coach},
  //         {id: FindSunday1500[0].id, day: FindSunday1500[0].day, time: FindSunday1500[0].time, kind_trainee: FindSunday1500[0].kind_trainee, name_Coach: FindSunday1500[0].name_Coach},
  //       ]
  //       const resultState1600 = [
  //         {id: FindMonday1600[0].id, day: FindMonday1600[0].day, time: FindMonday1600[0].time, kind_trainee: FindMonday1600[0].kind_trainee, name_Coach: FindMonday1600[0].name_Coach},
  //         {id: FindTuesday1600[0].id, day: FindTuesday1600[0].day, time: FindTuesday1600[0].time, kind_trainee: FindTuesday1600[0].kind_trainee, name_Coach: FindTuesday1600[0].name_Coach},
  //         {id: FindWednesday1600[0].id, day: FindWednesday1600[0].day, time: FindWednesday1600[0].time, kind_trainee: FindWednesday1600[0].kind_trainee, name_Coach: FindWednesday1600[0].name_Coach},
  //         {id: FindThursday1600[0].id, day: FindThursday1600[0].day, time: FindThursday1600[0].time, kind_trainee: FindThursday1600[0].kind_trainee, name_Coach: FindThursday1600[0].name_Coach},
  //         {id: FindFriday1600[0].id, day: FindFriday1600[0].day, time: FindFriday1600[0].time, kind_trainee: FindFriday1600[0].kind_trainee, name_Coach: FindFriday1600[0].name_Coach},
  //         {id: FindSaturday1600[0].id, day: FindSaturday1600[0].day, time: FindSaturday1600[0].time, kind_trainee: FindSaturday1600[0].kind_trainee, name_Coach: FindSaturday1600[0].name_Coach},
  //         {id: FindSunday1600[0].id, day: FindSunday1600[0].day, time: FindSunday1600[0].time, kind_trainee: FindSunday1600[0].kind_trainee, name_Coach: FindSunday1600[0].name_Coach},
  //       ]
  //       const resultState1700 = [
  //         {id: FindMonday1700[0].id, day: FindMonday1700[0].day, time: FindMonday1700[0].time, kind_trainee: FindMonday1700[0].kind_trainee, name_Coach: FindMonday1700[0].name_Coach},
  //         {id: FindTuesday1700[0].id, day: FindTuesday1700[0].day, time: FindTuesday1700[0].time, kind_trainee: FindTuesday1700[0].kind_trainee, name_Coach: FindTuesday1700[0].name_Coach},
  //         {id: FindWednesday1700[0].id, day: FindWednesday1700[0].day, time: FindWednesday1700[0].time, kind_trainee: FindWednesday1700[0].kind_trainee, name_Coach: FindWednesday1700[0].name_Coach},
  //         {id: FindThursday1700[0].id, day: FindThursday1700[0].day, time: FindThursday1700[0].time, kind_trainee: FindThursday1700[0].kind_trainee, name_Coach: FindThursday1700[0].name_Coach},
  //         {id: FindFriday1700[0].id, day: FindFriday1700[0].day, time: FindFriday1700[0].time, kind_trainee: FindFriday1700[0].kind_trainee, name_Coach: FindFriday1700[0].name_Coach},
  //         {id: FindSaturday1700[0].id, day: FindSaturday1700[0].day, time: FindSaturday1700[0].time, kind_trainee: FindSaturday1700[0].kind_trainee, name_Coach: FindSaturday1700[0].name_Coach},
  //         {id: FindSunday1700[0].id, day: FindSunday1700[0].day, time: FindSunday1700[0].time, kind_trainee: FindSunday1700[0].kind_trainee, name_Coach: FindSunday1700[0].name_Coach},
  //       ]
  //       const resultState1800 = [
  //         {id: FindMonday1800[0].id, day: FindMonday1800[0].day, time: FindMonday1800[0].time, kind_trainee: FindMonday1800[0].kind_trainee, name_Coach: FindMonday1800[0].name_Coach},
  //         {id: FindTuesday1800[0].id, day: FindTuesday1800[0].day, time: FindTuesday1800[0].time, kind_trainee: FindTuesday1800[0].kind_trainee, name_Coach: FindTuesday1800[0].name_Coach},
  //         {id: FindWednesday1800[0].id, day: FindWednesday1800[0].day, time: FindWednesday1800[0].time, kind_trainee: FindWednesday1800[0].kind_trainee, name_Coach: FindWednesday1800[0].name_Coach},
  //         {id: FindThursday1800[0].id, day: FindThursday1800[0].day, time: FindThursday1800[0].time, kind_trainee: FindThursday1800[0].kind_trainee, name_Coach: FindThursday1800[0].name_Coach},
  //         {id: FindFriday1800[0].id, day: FindFriday1800[0].day, time: FindFriday1800[0].time, kind_trainee: FindFriday1800[0].kind_trainee, name_Coach: FindFriday1800[0].name_Coach},
  //         {id: FindSaturday1800[0].id, day: FindSaturday1800[0].day, time: FindSaturday1800[0].time, kind_trainee: FindSaturday1800[0].kind_trainee, name_Coach: FindSaturday1800[0].name_Coach},
  //         {id: FindSunday1800[0].id, day: FindSunday1800[0].day, time: FindSunday1800[0].time, kind_trainee: FindSunday1800[0].kind_trainee, name_Coach: FindSunday1800[0].name_Coach},
  //       ]
  //       const resultState1900 = [
  //         {id: FindMonday1900[0].id, day: FindMonday1900[0].day, time: FindMonday1900[0].time, kind_trainee: FindMonday1900[0].kind_trainee, name_Coach: FindMonday1900[0].name_Coach},
  //         {id: FindTuesday1900[0].id, day: FindTuesday1900[0].day, time: FindTuesday1900[0].time, kind_trainee: FindTuesday1900[0].kind_trainee, name_Coach: FindTuesday1900[0].name_Coach},
  //         {id: FindWednesday1900[0].id, day: FindWednesday1900[0].day, time: FindWednesday1900[0].time, kind_trainee: FindWednesday1900[0].kind_trainee, name_Coach: FindWednesday1900[0].name_Coach},
  //         {id: FindThursday1900[0].id, day: FindThursday1900[0].day, time: FindThursday1900[0].time, kind_trainee: FindThursday1900[0].kind_trainee, name_Coach: FindThursday1900[0].name_Coach},
  //         {id: FindFriday1900[0].id, day: FindFriday1900[0].day, time: FindFriday1900[0].time, kind_trainee: FindFriday1900[0].kind_trainee, name_Coach: FindFriday1900[0].name_Coach},
  //         {id: FindSaturday1900[0].id, day: FindSaturday1900[0].day, time: FindSaturday1900[0].time, kind_trainee: FindSaturday1900[0].kind_trainee, name_Coach: FindSaturday1900[0].name_Coach},
  //         {id: FindSunday1900[0].id, day: FindSunday1900[0].day, time: FindSunday1900[0].time, kind_trainee: FindSunday1900[0].kind_trainee, name_Coach: FindSunday1900[0].name_Coach},
  //       ]
  //       const resultState2000 = [
  //         {id: FindMonday2000[0].id, day: FindMonday2000[0].day, time: FindMonday2000[0].time, kind_trainee: FindMonday2000[0].kind_trainee, name_Coach: FindMonday2000[0].name_Coach},
  //         {id: FindTuesday2000[0].id, day: FindTuesday2000[0].day, time: FindTuesday2000[0].time, kind_trainee: FindTuesday2000[0].kind_trainee, name_Coach: FindTuesday2000[0].name_Coach},
  //         {id: FindWednesday2000[0].id, day: FindWednesday2000[0].day, time: FindWednesday2000[0].time, kind_trainee: FindWednesday2000[0].kind_trainee, name_Coach: FindWednesday2000[0].name_Coach},
  //         {id: FindThursday2000[0].id, day: FindThursday2000[0].day, time: FindThursday2000[0].time, kind_trainee: FindThursday2000[0].kind_trainee, name_Coach: FindThursday2000[0].name_Coach},
  //         {id: FindFriday2000[0].id, day: FindFriday2000[0].day, time: FindFriday2000[0].time, kind_trainee: FindFriday2000[0].kind_trainee, name_Coach: FindFriday2000[0].name_Coach},
  //         {id: FindSaturday2000[0].id, day: FindSaturday2000[0].day, time: FindSaturday2000[0].time, kind_trainee: FindSaturday2000[0].kind_trainee, name_Coach: FindSaturday2000[0].name_Coach},
  //         {id: FindSunday2000[0].id, day: FindSunday2000[0].day, time: FindSunday2000[0].time, kind_trainee: FindSunday2000[0].kind_trainee, name_Coach: FindSunday2000[0].name_Coach},
  //       ]
  //       setData0800(resultState0800);
  //       setData0900(resultState0900);
  //       setData1000(resultState1000);
  //       setData1100(resultState1100);
  //       setData1200(resultState1200);
  //       setData1300(resultState1300);
  //       setData1400(resultState1400);
  //       setData1500(resultState1500);
  //       setData1600(resultState1600);
  //       setData1700(resultState1700);
  //       setData1800(resultState1800);
  //       setData1900(resultState1900);
  //       setData2000(resultState2000);
  //     });
  // },
  //  [setData0800]
  // );
  // useEffect(() => {
  //   const DateToday = () => {
  //     const dateClickOnBTN = moment().format('dddd');
  //     if (dateClickOnBTN === "Monday") {
  //       return [
  //         setSunday(moment().add(6, 'days')._d),
  //         setMonday(moment().add(0, 'days')._d),
  //         setTuesday(moment().add(1, 'days')._d),
  //         setWednesday(moment().add(2, 'days')._d),
  //         setThursday(moment().add(3, 'days')._d),
  //         setFriday(moment().add(4, 'days')._d),
  //         setSaturday(moment().add(5, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Tuesday") {
  //       return [
  //         setSunday(moment().add(5, 'days')._d),
  //         setMonday(moment().add(6, 'days')._d),
  //         setTuesday(moment().add(0, 'days')._d),
  //         setWednesday(moment().add(1, 'days')._d),
  //         setThursday(moment().add(2, 'days')._d),
  //         setFriday(moment().add(3, 'days')._d),
  //         setSaturday(moment().add(4, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Wednesday") {
  //       return [
  //         setSunday(moment().add(4, 'days')._d),
  //         setMonday(moment().add(5, 'days')._d),
  //         setTuesday(moment().add(6, 'days')._d),
  //         setWednesday(moment().add(0, 'days')._d),
  //         setThursday(moment().add(1, 'days')._d),
  //         setFriday(moment().add(2, 'days')._d),
  //         setSaturday(moment().add(3, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Thursday") {
  //       return [
  //         setSunday(moment().add(3, 'days')._d),
  //         setMonday(moment().add(4, 'days')._d),
  //         setTuesday(moment().add(5, 'days')._d),
  //         setWednesday(moment().add(6, 'days')._d),
  //         setThursday(moment().add(0, 'days')._d),
  //         setFriday(moment().add(1, 'days')._d),
  //         setSaturday(moment().add(2, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Friday") {
  //       return [
  //         setSunday(moment().add(2, 'days')._d),
  //         setMonday(moment().add(3, 'days')._d),
  //         setTuesday(moment().add(4, 'days')._d),
  //         setWednesday(moment().add(5, 'days')._d),
  //         setThursday(moment().add(6, 'days')._d),
  //         setFriday(moment().add(0, 'days')._d),
  //         setSaturday(moment().add(1, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Saturday") {
  //       return [
  //         setSunday(moment().add(1, 'days')._d),
  //         setMonday(moment().add(2, 'days')._d),
  //         setTuesday(moment().add(3, 'days')._d),
  //         setWednesday(moment().add(4, 'days')._d),
  //         setThursday(moment().add(5, 'days')._d),
  //         setFriday(moment().add(6, 'days')._d),
  //         setSaturday(moment().add(0, 'days')._d)]
  //     };
  //     if (dateClickOnBTN === "Sunday") {
  //       return [
  //         setSunday(moment().add(0, 'days')._d),
  //         setMonday(moment().add(1, 'days')._d),
  //         setTuesday(moment().add(2, 'days')._d),
  //         setWednesday(moment().add(3, 'days')._d),
  //         setThursday(moment().add(4, 'days')._d),
  //         setFriday(moment().add(5, 'days')._d),
  //         setSaturday(moment().add(6, 'days')._d)]
  //     };
  //   };
  //   DateToday();
  // }, [setSunday]);

    // useEffect(() => {
    //   if (dataClientsToday === '') {
    //     clientAPI.getDataALLUsers().then((result) => {
    //       const dateToday = moment().add(0, 'days').format('').slice(0, 10);
    //       const dateNextDay = moment().add(1, 'days').format('').slice(0, 10);
    //       const dateNextDay1 = moment().add(2, 'days').format('').slice(0, 10);
    //       const dateNextDay2 = moment().add(3, 'days').format('').slice(0, 10);
    //       const dateNextDay3 = moment().add(4, 'days').format('').slice(0, 10);
    //       const dateNextDay4 = moment().add(5, 'days').format('').slice(0, 10);
    //       const dateNextDay5 = moment().add(6, 'days').format('').slice(0, 10);
    //       const dataClientToday = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '18:00'));
    //       // setDataClientToday(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday)));
    //       setDataClientNextDay(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay)));
    //       setDataClientNextDay1(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay1)));
    //       setDataClientNextDay2(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay2)));
    //       setDataClientNextDay3(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay3)));
    //       setDataClientNextDay4(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay4)));
    //       setDataClientNextDay5(result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateNextDay5)));
    //       // console.log(dataClientToday.filter(arr => arr.info.some(infoTime => infoTime.time === '18:00')))
    //       // setDataClientToday(dataClientToday)
    //       setDataClientToday(dataClientToday);
    //       // console.log(dataClientToday)
    //   })};
    // if (dataClientsToday !== '') {
    //     const ARR = data1800.concat(dataClientsToday);
    //     // setData1800(ARR);
    //     // setUser1(dataClientsToday.concat(data1800))
    //     // console.log("ARR: ", ARR);
    //     // console.log("data1800: ", data1800);
    // }
    // }, [dataClientsToday, data1800]);

  
  // const inialState = [
  //   {
  //     id: '+3',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '1',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+38',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '2',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+380',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '3',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+3806',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '4',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+38063',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '5',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+380633',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '6',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+3806335',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '7',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+38063357',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '8',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+380633576',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '9',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+3806335762',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '10',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+38063357623',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '11',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+380633576239',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '12',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+3806335762398',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '13',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  //   {
  //     id: '+38063357623987',
  //     info: {
  //       day: '',
  //       time: '',
  //       kind_trainee: '',
  //       name: '',
  //       instaNickname: '',
  //       date: ''
  //     }
  //   },
  // ];

  // const friday = [{
  //   id: '',
  //   name: '',
  //   day: 'friday',
  //   time: '08:00',
  //   kind_trainee: '',
  //   instaNickName: '',
  //   date: '',
  // }]
  // const [noClients, setNoClients] = useState('');
  const [monday0800, setMonday0800] = useState('');
  const [monday0900, setMonday0900] = useState('');
  const [monday1000, setMonday1000] = useState('');
  const [monday1100, setMonday1100] = useState('');
  const [monday1200, setMonday1200] = useState('');
  const [monday1300, setMonday1300] = useState('');
  const [monday1400, setMonday1400] = useState('');
  const [monday1500, setMonday1500] = useState('');
  const [monday1600, setMonday1600] = useState('');
  const [monday1700, setMonday1700] = useState('');
  const [monday1800, setMonday1800] = useState('');
  const [monday1900, setMonday1900] = useState('');
  const [monday2000, setMonday2000] = useState('');
  const [tuesday0800, setTuesday0800] = useState('');
  const [tuesday0900, setTuesday0900] = useState('');
  const [tuesday1000, setTuesday1000] = useState('');
  const [tuesday1100, setTuesday1100] = useState('');
  const [tuesday1200, setTuesday1200] = useState('');
  const [tuesday1300, setTuesday1300] = useState('');
  const [tuesday1400, setTuesday1400] = useState('');
  const [tuesday1500, setTuesday1500] = useState('');
  const [tuesday1600, setTuesday1600] = useState('');
  const [tuesday1700, setTuesday1700] = useState('');
  const [tuesday1800, setTuesday1800] = useState('');
  const [tuesday1900, setTuesday1900] = useState('');
  const [tuesday2000, setTuesday2000] = useState('');
  const [wednesday0800, setWednesday0800] = useState('');
  const [wednesday0900, setWednesday0900] = useState('');
  const [wednesday1000, setWednesday1000] = useState('');
  const [wednesday1100, setWednesday1100] = useState('');
  const [wednesday1200, setWednesday1200] = useState('');
  const [wednesday1300, setWednesday1300] = useState('');
  const [wednesday1400, setWednesday1400] = useState('');
  const [wednesday1500, setWednesday1500] = useState('');
  const [wednesday1600, setWednesday1600] = useState('');
  const [wednesday1700, setWednesday1700] = useState('');
  const [wednesday1800, setWednesday1800] = useState('');
  const [wednesday1900, setWednesday1900] = useState('');
  const [wednesday2000, setWednesday2000] = useState('');
  const [thursday0800, setThursday0800] = useState('');
  const [thursday0900, setThursday0900] = useState('');
  const [thursday1000, setThursday1000] = useState('');
  const [thursday1100, setThursday1100] = useState('');
  const [thursday1200, setThursday1200] = useState('');
  const [thursday1300, setThursday1300] = useState('');
  const [thursday1400, setThursday1400] = useState('');
  const [thursday1500, setThursday1500] = useState('');
  const [thursday1600, setThursday1600] = useState('');
  const [thursday1700, setThursday1700] = useState('');
  const [thursday1800, setThursday1800] = useState('');
  const [thursday1900, setThursday1900] = useState('');
  const [thursday2000, setThursday2000] = useState('');
  const [friday0800, setFriday0800] = useState('');
  const [friday0900, setFriday0900] = useState('');
  const [friday1000, setFriday1000] = useState('');
  const [friday1100, setFriday1100] = useState('');
  const [friday1200, setFriday1200] = useState('');
  const [friday1300, setFriday1300] = useState('');
  const [friday1400, setFriday1400] = useState('');
  const [friday1500, setFriday1500] = useState('');
  const [friday1600, setFriday1600] = useState('');
  const [friday1700, setFriday1700] = useState('');
  const [friday1800, setFriday1800] = useState('');
  const [friday1900, setFriday1900] = useState('');
  const [friday2000, setFriday2000] = useState('');
  const [saturday0800, setSaturday0800] = useState('');
  const [saturday0900, setSaturday0900] = useState('');
  const [saturday1000, setSaturday1000] = useState('');
  const [saturday1100, setSaturday1100] = useState('');
  const [saturday1200, setSaturday1200] = useState('');
  const [saturday1300, setSaturday1300] = useState('');
  const [saturday1400, setSaturday1400] = useState('');
  const [saturday1500, setSaturday1500] = useState('');
  const [saturday1600, setSaturday1600] = useState('');
  const [saturday1700, setSaturday1700] = useState('');
  const [saturday1800, setSaturday1800] = useState('');
  const [saturday1900, setSaturday1900] = useState('');
  const [saturday2000, setSaturday2000] = useState('');
  const [sunday0800, setSunday0800] = useState('');
  const [sunday0900, setSunday0900] = useState('');
  const [sunday1000, setSunday1000] = useState('');
  const [sunday1100, setSunday1100] = useState('');
  const [sunday1200, setSunday1200] = useState('');
  const [sunday1300, setSunday1300] = useState('');
  const [sunday1400, setSunday1400] = useState('');
  const [sunday1500, setSunday1500] = useState('');
  const [sunday1600, setSunday1600] = useState('');
  const [sunday1700, setSunday1700] = useState('');
  const [sunday1800, setSunday1800] = useState('');
  const [sunday1900, setSunday1900] = useState('');
  const [sunday2000, setSunday2000] = useState('');
  
  useEffect(() => {
    if(user1 === ''){
      clientAPI.getDataALLUsers().then(result => {
        const dateToday = moment().add(0, 'days').format('').slice(0, 10);
        const dateNextDay = moment().add(1, 'days').format('').slice(0, 10);
        const dateNextDay1 = moment().add(2, 'days').format('').slice(0, 10);
        const dateNextDay2 = moment().add(3, 'days').format('').slice(0, 10);
        const dateNextDay3 = moment().add(4, 'days').format('').slice(0, 10);
        const dateNextDay4 = moment().add(5, 'days').format('').slice(0, 10);
        const dateNextDay5 = moment().add(6, 'days').format('').slice(0, 10);
        const dataClientToday0800 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '08:00'));
        const dataClientToday0900 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '09:00'));
        const dataClientToday1000 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '10:00'));
        const dataClientToday1100 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '11:00'));
        const dataClientToday1200 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '12:00'));
        const dataClientToday1300 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '13:00'));
        const dataClientToday1400 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '14:00'));
        const dataClientToday1500 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '15:00'));
        const dataClientToday1600 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '16:00'));
        const dataClientToday1700 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '17:00'));
        const dataClientToday1800 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '18:00'));
        const dataClientToday1900 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '19:00'));
        const dataClientToday2000 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '20:00'));
    
        if (dataClientToday0800.length === 0) {
            return (setFriday0800(0));
          };
          if (dataClientToday0800.length === 1) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 2) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 3) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 4) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 5) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 6) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client6 = dataClientToday0800[5].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 7) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client6 = dataClientToday0800[5].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client7 = dataClientToday0800[6].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 8) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client6 = dataClientToday0800[5].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client7 = dataClientToday0800[6].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client8 = dataClientToday0800[7].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 9) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client6 = dataClientToday0800[5].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client7 = dataClientToday0800[6].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client8 = dataClientToday0800[7].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client9 = dataClientToday0800[8].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday0800(clientBase);
          };
          if (dataClientToday0800.length === 10) {
            const client1 = dataClientToday0800[0].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client2 = dataClientToday0800[1].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client3 = dataClientToday0800[2].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client4 = dataClientToday0800[3].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client5 = dataClientToday0800[4].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client6 = dataClientToday0800[5].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client7 = dataClientToday0800[6].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client8 = dataClientToday0800[7].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client9 = dataClientToday0800[8].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const client10 = dataClientToday0800[9].info.find((value) => { return value.day === 'friday' && value.time === '08:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday0800(clientBase);
        };
        if (dataClientToday0900.length === '') {
            return (setFriday0900(''));
          };
          if (dataClientToday0900.length === 1) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 2) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 3) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 4) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 5) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 6) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client6 = dataClientToday0900[5].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 7) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client6 = dataClientToday0900[5].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client7 = dataClientToday0900[6].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 8) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client6 = dataClientToday0900[5].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client7 = dataClientToday0900[6].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client8 = dataClientToday0900[7].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 9) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client6 = dataClientToday0900[5].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client7 = dataClientToday0900[6].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client8 = dataClientToday0900[7].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client9 = dataClientToday0900[8].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday0900(clientBase);
          };
          if (dataClientToday0900.length === 10) {
            const client1 = dataClientToday0900[0].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client2 = dataClientToday0900[1].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client3 = dataClientToday0900[2].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client4 = dataClientToday0900[3].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client5 = dataClientToday0900[4].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client6 = dataClientToday0900[5].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client7 = dataClientToday0900[6].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client8 = dataClientToday0900[7].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client9 = dataClientToday0900[8].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const client10 = dataClientToday0900[9].info.find((value) => { return value.day === 'friday' && value.time === '09:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday0900(clientBase);
        };
        if (dataClientToday1000.length === '') {
            return (setFriday1000(''));
          };
          if (dataClientToday1000.length === 1) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 2) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 3) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 4) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 5) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 6) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client6 = dataClientToday1000[5].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 7) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client6 = dataClientToday1000[5].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client7 = dataClientToday1000[6].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 8) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client6 = dataClientToday1000[5].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client7 = dataClientToday1000[6].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client8 = dataClientToday1000[7].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 9) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client6 = dataClientToday1000[5].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client7 = dataClientToday1000[6].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client8 = dataClientToday1000[7].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client9 = dataClientToday1000[8].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1000(clientBase);
          };
          if (dataClientToday1000.length === 10) {
            const client1 = dataClientToday1000[0].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client2 = dataClientToday1000[1].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client3 = dataClientToday1000[2].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client4 = dataClientToday1000[3].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client5 = dataClientToday1000[4].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client6 = dataClientToday1000[5].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client7 = dataClientToday1000[6].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client8 = dataClientToday1000[7].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client9 = dataClientToday1000[8].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const client10 = dataClientToday1000[9].info.find((value) => { return value.day === 'friday' && value.time === '10:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1000(clientBase);
        };
        if (dataClientToday1100.length === '') {
            return (setFriday1100(''));
          };
          if (dataClientToday1100.length === 1) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 2) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 3) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 4) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 5) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 6) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client6 = dataClientToday1100[5].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 7) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client6 = dataClientToday1100[5].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client7 = dataClientToday1100[6].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 8) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client6 = dataClientToday1100[5].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client7 = dataClientToday1100[6].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client8 = dataClientToday1100[7].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 9) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client6 = dataClientToday1100[5].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client7 = dataClientToday1100[6].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client8 = dataClientToday1100[7].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client9 = dataClientToday1100[8].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1100(clientBase);
          };
          if (dataClientToday1100.length === 10) {
            const client1 = dataClientToday1100[0].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client2 = dataClientToday1100[1].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client3 = dataClientToday1100[2].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client4 = dataClientToday1100[3].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client5 = dataClientToday1100[4].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client6 = dataClientToday1100[5].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client7 = dataClientToday1100[6].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client8 = dataClientToday1100[7].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client9 = dataClientToday1100[8].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const client10 = dataClientToday1100[9].info.find((value) => { return value.day === 'friday' && value.time === '11:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1100(clientBase);
        };
        if (dataClientToday1200.length === '') {
            return (setFriday1200(''));
          };
          if (dataClientToday1200.length === 1) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 2) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 3) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 4) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 5) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 6) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client6 = dataClientToday1200[5].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 7) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client6 = dataClientToday1200[5].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client7 = dataClientToday1200[6].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 8) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client6 = dataClientToday1200[5].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client7 = dataClientToday1200[6].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client8 = dataClientToday1200[7].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 9) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client6 = dataClientToday1200[5].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client7 = dataClientToday1200[6].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client8 = dataClientToday1200[7].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client9 = dataClientToday1200[8].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1200(clientBase);
          };
          if (dataClientToday1200.length === 10) {
            const client1 = dataClientToday1200[0].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client2 = dataClientToday1200[1].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client3 = dataClientToday1200[2].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client4 = dataClientToday1200[3].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client5 = dataClientToday1200[4].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client6 = dataClientToday1200[5].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client7 = dataClientToday1200[6].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client8 = dataClientToday1200[7].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client9 = dataClientToday1200[8].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const client10 = dataClientToday1200[9].info.find((value) => { return value.day === 'friday' && value.time === '12:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1200(clientBase);
        };
        if (dataClientToday1300.length === '') {
            return (setFriday1300(''));
          };
          if (dataClientToday1300.length === 1) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 2) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 3) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 4) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 5) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 6) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client6 = dataClientToday1300[5].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 7) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client6 = dataClientToday1300[5].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client7 = dataClientToday1300[6].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 8) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client6 = dataClientToday1300[5].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client7 = dataClientToday1300[6].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client8 = dataClientToday1300[7].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 9) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client6 = dataClientToday1300[5].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client7 = dataClientToday1300[6].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client8 = dataClientToday1300[7].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client9 = dataClientToday1300[8].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1300(clientBase);
          };
          if (dataClientToday1300.length === 10) {
            const client1 = dataClientToday1300[0].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client2 = dataClientToday1300[1].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client3 = dataClientToday1300[2].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client4 = dataClientToday1300[3].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client5 = dataClientToday1300[4].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client6 = dataClientToday1300[5].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client7 = dataClientToday1300[6].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client8 = dataClientToday1300[7].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client9 = dataClientToday1300[8].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const client10 = dataClientToday1300[9].info.find((value) => { return value.day === 'friday' && value.time === '13:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1300(clientBase);
        };
        if (dataClientToday1400.length === '') {
          return (setFriday1400(''));
        };
        if (dataClientToday1400.length === 1) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 2) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 3) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 4) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 5) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 6) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client6 = dataClientToday1400[5].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5, client6]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 7) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client6 = dataClientToday1400[5].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client7 = dataClientToday1400[6].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5, client6, client7]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 8) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client6 = dataClientToday1400[5].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client7 = dataClientToday1400[6].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client8 = dataClientToday1400[7].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 9) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client6 = dataClientToday1400[5].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client7 = dataClientToday1400[6].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client8 = dataClientToday1400[7].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client9 = dataClientToday1400[8].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
          setFriday1400(clientBase);
        };
        if (dataClientToday1400.length === 10) {
          const client1 = dataClientToday1400[0].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client2 = dataClientToday1400[1].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client3 = dataClientToday1400[2].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client4 = dataClientToday1400[3].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client5 = dataClientToday1400[4].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client6 = dataClientToday1400[5].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client7 = dataClientToday1400[6].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client8 = dataClientToday1400[7].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client9 = dataClientToday1400[8].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const client10 = dataClientToday1400[9].info.find((value) => { return value.day === 'friday' && value.time === '14:00'; });
          const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
          setFriday1400(clientBase);
        };
        if (dataClientToday1500.length === '') {
            return (setFriday1500(''));
          };
          if (dataClientToday1500.length === 1) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 2) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 3) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 4) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 5) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 6) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client6 = dataClientToday1500[5].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 7) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client6 = dataClientToday1500[5].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client7 = dataClientToday1500[6].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 8) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client6 = dataClientToday1500[5].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client7 = dataClientToday1500[6].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client8 = dataClientToday1500[7].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 9) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client6 = dataClientToday1500[5].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client7 = dataClientToday1500[6].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client8 = dataClientToday1500[7].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client9 = dataClientToday1500[8].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1500(clientBase);
          };
          if (dataClientToday1500.length === 10) {
            const client1 = dataClientToday1500[0].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client2 = dataClientToday1500[1].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client3 = dataClientToday1500[2].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client4 = dataClientToday1500[3].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client5 = dataClientToday1500[4].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client6 = dataClientToday1500[5].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client7 = dataClientToday1500[6].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client8 = dataClientToday1500[7].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client9 = dataClientToday1500[8].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const client10 = dataClientToday1500[9].info.find((value) => { return value.day === 'friday' && value.time === '15:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1500(clientBase);
        };
        if (dataClientToday1600.length === '') {
            return (setFriday1600(''));
          };
          if (dataClientToday1600.length === 1) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 2) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 3) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 4) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 5) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 6) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client6 = dataClientToday1600[5].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 7) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client6 = dataClientToday1600[5].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client7 = dataClientToday1600[6].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 8) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client6 = dataClientToday1600[5].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client7 = dataClientToday1600[6].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client8 = dataClientToday1600[7].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 9) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client6 = dataClientToday1600[5].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client7 = dataClientToday1600[6].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client8 = dataClientToday1600[7].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client9 = dataClientToday1600[8].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1600(clientBase);
          };
          if (dataClientToday1600.length === 10) {
            const client1 = dataClientToday1600[0].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client2 = dataClientToday1600[1].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client3 = dataClientToday1600[2].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client4 = dataClientToday1600[3].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client5 = dataClientToday1600[4].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client6 = dataClientToday1600[5].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client7 = dataClientToday1600[6].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client8 = dataClientToday1600[7].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client9 = dataClientToday1600[8].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const client10 = dataClientToday1600[9].info.find((value) => { return value.day === 'friday' && value.time === '16:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1600(clientBase);
        };
        if (dataClientToday1700.length === '') {
            return (setFriday1700(''));
          };
          if (dataClientToday1700.length === 1) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 2) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 3) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 4) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 5) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 6) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client6 = dataClientToday1700[5].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 7) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client6 = dataClientToday1700[5].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client7 = dataClientToday1700[6].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 8) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client6 = dataClientToday1700[5].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client7 = dataClientToday1700[6].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client8 = dataClientToday1700[7].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 9) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client6 = dataClientToday1700[5].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client7 = dataClientToday1700[6].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client8 = dataClientToday1700[7].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client9 = dataClientToday1700[8].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1700(clientBase);
          };
          if (dataClientToday1700.length === 10) {
            const client1 = dataClientToday1700[0].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client2 = dataClientToday1700[1].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client3 = dataClientToday1700[2].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client4 = dataClientToday1700[3].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client5 = dataClientToday1700[4].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client6 = dataClientToday1700[5].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client7 = dataClientToday1700[6].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client8 = dataClientToday1700[7].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client9 = dataClientToday1700[8].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const client10 = dataClientToday1700[9].info.find((value) => { return value.day === 'friday' && value.time === '17:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1700(clientBase);
        };
        if (dataClientToday1800.length === '') {
            return (setFriday1800(''));
          };
          if (dataClientToday1800.length === 1) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 2) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 3) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 4) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 5) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 6) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client6 = dataClientToday1800[5].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 7) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client6 = dataClientToday1800[5].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client7 = dataClientToday1800[6].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 8) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client6 = dataClientToday1800[5].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client7 = dataClientToday1800[6].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client8 = dataClientToday1800[7].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 9) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client6 = dataClientToday1800[5].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client7 = dataClientToday1800[6].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client8 = dataClientToday1800[7].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client9 = dataClientToday1800[8].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1800(clientBase);
          };
          if (dataClientToday1800.length === 10) {
            const client1 = dataClientToday1800[0].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client2 = dataClientToday1800[1].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client3 = dataClientToday1800[2].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client4 = dataClientToday1800[3].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client5 = dataClientToday1800[4].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client6 = dataClientToday1800[5].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client7 = dataClientToday1800[6].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client8 = dataClientToday1800[7].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client9 = dataClientToday1800[8].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const client10 = dataClientToday1800[9].info.find((value) => { return value.day === 'friday' && value.time === '18:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1800(clientBase);
        };
        if (dataClientToday1900.length === '') {
          return (setFriday1900(''));
          };
          if (dataClientToday1900.length === 1) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 2) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 3) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 4) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 5) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 6) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client6 = dataClientToday1900[5].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 7) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client6 = dataClientToday1900[5].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client7 = dataClientToday1900[6].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 8) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client6 = dataClientToday1900[5].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client7 = dataClientToday1900[6].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client8 = dataClientToday1900[7].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 9) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client6 = dataClientToday1900[5].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client7 = dataClientToday1900[6].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client8 = dataClientToday1900[7].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client9 = dataClientToday1900[8].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday1900(clientBase);
          };
          if (dataClientToday1900.length === 10) {
            const client1 = dataClientToday1900[0].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client2 = dataClientToday1900[1].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client3 = dataClientToday1900[2].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client4 = dataClientToday1900[3].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client5 = dataClientToday1900[4].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client6 = dataClientToday1900[5].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client7 = dataClientToday1900[6].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client8 = dataClientToday1900[7].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client9 = dataClientToday1900[8].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const client10 = dataClientToday1900[9].info.find((value) => { return value.day === 'friday' && value.time === '19:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday1900(clientBase);
        };
        if (dataClientToday2000.length === '') {
            return (setFriday2000(''));
          };
          if (dataClientToday2000.length === 1) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 2) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 3) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 4) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 5) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 6) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client6 = dataClientToday2000[5].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 7) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client6 = dataClientToday2000[5].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client7 = dataClientToday2000[6].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 8) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client6 = dataClientToday2000[5].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client7 = dataClientToday2000[6].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client8 = dataClientToday2000[7].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 9) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client6 = dataClientToday2000[5].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client7 = dataClientToday2000[6].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client8 = dataClientToday2000[7].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client9 = dataClientToday2000[8].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9]
            setFriday2000(clientBase);
          };
          if (dataClientToday2000.length === 10) {
            const client1 = dataClientToday2000[0].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client2 = dataClientToday2000[1].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client3 = dataClientToday2000[2].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client4 = dataClientToday2000[3].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client5 = dataClientToday2000[4].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client6 = dataClientToday2000[5].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client7 = dataClientToday2000[6].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client8 = dataClientToday2000[7].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client9 = dataClientToday2000[8].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const client10 = dataClientToday2000[9].info.find((value) => { return value.day === 'friday' && value.time === '20:00'; });
            const clientBase = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
            setFriday2000(clientBase);
        };

        setUser1(dataClientToday2000)
              console.log(friday1400);
              console.log(friday0800);
      
            
            
      
      
      



      // for (var key in dataClientToday1400) {
      //   // этот код будет вызван для каждого свойства объекта
      //   // ..и выведет имя свойства и его значение

      //   console.log( "Ключ: " + key + " значение: " + dataClientToday0900[key] );
      // }
      
    
    })}
  }, [user1, friday0800, friday0900, friday1000, friday1100, friday1200, friday1300,
    friday1400, friday1500, friday1600, friday1700, friday1800, friday1900, friday2000])
          // console.log(user1);

  return(
    <div style={{ display: 'flex'}}>
      <div style={{ padding: '5px'}}>
        <p>Час/День тижня</p>
        <p>8:00</p>
        <p>9:00</p>
        <p>10:00</p>
        <p>11:00</p>
        <p>12:00</p>
        <p>13:00</p>
        <p>14:00</p>
        <p>15:00</p>
        <p>16:00</p>
        <p>17:00</p>
        <p>18:00</p>
        <p>19:00</p>
        <p>20:00</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Понеділок</p>
        {/* {inialState ? inialState.map( item =>(
          <div key={item.id}>
            <p>{item.info.name}</p>
          </div>
        )) : null} */}
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Вівторок</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Середа</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Четвер</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>П'ятниця</p>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday0800 ? friday0800[0].kind_trainee : null}
          {friday0800 ? friday0800.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday0900 ? friday0900[0].kind_trainee : null}
          {friday0900 ? friday0900.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1000 ? friday1000[0].kind_trainee : null}
          {friday1000 ? friday1000.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1100 ? friday1100[0].kind_trainee : null}
          {friday1100 ? friday1100.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1200 ? friday1200[0].kind_trainee : null}
          {friday1200 ? friday1200.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1300 ? friday1300[0].kind_trainee : null}
          {friday1300 ? friday1300.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1400 ? friday1400[0].kind_trainee : null}
          {friday1400 ? friday1400.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1500 ? friday1500[0].kind_trainee : null}
          {friday1500 ? friday1500.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1600 ? friday1600[0].kind_trainee : null}
          {friday1600 ? friday1600.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1700 ? friday1700[0].kind_trainee : null}
          {friday1700 ? friday1700.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1800 ? friday1800[0].kind_trainee : null}
          {friday1800 ? friday1800.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday1900 ? friday1900[0].kind_trainee : null}
          {friday1900 ? friday1900.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
        <div style={{ border: 'solid 1px', borderRadius: '3px'}}>
          {friday2000 ? friday2000[0].kind_trainee : null}
          {friday2000 ? friday2000.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          )) : <p>Відсутні клієнти</p>}</div>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Субота</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
      <div style={{ padding: '5px'}}>
        <p>Неділя</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
        <p>sfdsdfsfsdf</p>
      </div>
    </div>
  )}


  // const ChooseBTN = ({ item }) => {
  //   if (item.day === "monday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={monday}
  //           // // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "tuesday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={tuesday}
  //           // // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "wednesday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={wednesday}
  //           // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* {item.time} */}
  //         {/* {dataClientsToday ? dataClientsToday.map(item => (item.info.map( info => (
  //           <div key={item.id}>
  //             <p>{info.name}</p>
  //           </div>
  //       )))) : null} */}
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "thursday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={thursday}
  //           // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "friday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={friday}
  //           // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "saturday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={saturday}
  //           // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   if (item.day === "sunday") {
  //     return (
  //       <WrapperBTN>
  //         <InfoTraineeWrapper
  //           id={item.day}
  //           name={item.time}
  //           kind_trainee={item.kind_trainee}
  //           className={sunday}
  //           // onClick={Close}
  //         >
  //           <span>{item.kind_trainee}</span>
  //           {/* <Clients dataClients={dataClients} /> */}
  //         </InfoTraineeWrapper>
  //       </WrapperBTN>
  //     )
  //   };
  //   return (
  //     <>
  //     <p>HELP</p>
  //     </>
  //   )
  // };

  // const Waiting = () => {
  //   if (data0800.length === 0) {
  //     return (
  //       <WaitingWrapper>
  //         <h2>Інформація завантажуєтсья</h2>
  //       </WaitingWrapper>
  //     );
  //   };
  //   return (
  //     <>
  //     <WrapperDay>
  //       <Time>Час</Time>
  //       <Days>Понеділок</Days>
  //       <Days>Вівторок</Days>
  //       <Days>Середа</Days>
  //       <Days>Четвер</Days>
  //       <Days>П'ятниця</Days>
  //       <Days>Субота</Days>
  //       <Days>Неділя</Days>
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>08:00</Time>
  //       {data0800 ? data0800.map(item => (
  //         <ChooseBTN key={item.id} item={item}/>
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>09:00</Time>
  //       {data0900 ? data0900.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>10:00</Time>
  //       {data1000 ? data1000.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>11:00</Time>
  //       {data1100 ? data1100.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>12:00</Time>
  //       {data1200 ? data1200.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>13:00</Time>
  //       {data1300 ? data1300.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>14:00</Time>
  //       {data1400 ? data1400.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>15:00</Time>
  //       {data1500 ? data1500.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>16:00</Time>
  //       {data1600 ? data1600.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>17:00</Time>
  //       {data1700 ? data1700.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>18:00</Time>
  //         {data1800 ? data1800.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //       {/* {user1 ? user1.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null} */}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>19:00</Time>
  //       {data1900 ? data1900.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //     <WrapperDay>
  //       <Time>20:00</Time>
  //       {data2000 ? data2000.map(item => (
  //         <ChooseBTN
  //           key={item.id}
  //           item={item}
  //         />
  //       )) : null}
  //     </WrapperDay>
  //   </>
  //   )
  // }

//   return (
//     <>
//       <Waiting />
//     </>
//   )
// };

export default Record;