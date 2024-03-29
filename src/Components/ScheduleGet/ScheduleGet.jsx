import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import {clientAPI} from '../../service/axios.config';
import {
  PositionTable, 
} from './ScheduleGet.styled';


function ScheduleGet() {
  const [data0800, setData0800] = useState([]);
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


  useEffect(() => {
    clientAPI.getDataALL().then(
      (result) => {
        const FindMonday0800 = result.filter(arr => arr.id === 'monday08:00');
        const FindTuesday0800 = result.filter(arr => arr.id === 'tuesday08:00');
        const FindWednesday0800 = result.filter(arr => arr.id === 'wednesday08:00');
        const FindThursday0800 = result.filter(arr => arr.id === 'thursday08:00');
        const FindFriday0800 = result.filter(arr => arr.id === 'friday08:00');
        const FindSaturday0800 = result.filter(arr => arr.id === 'saturday08:00');
        const FindSunday0800 = result.filter(arr => arr.id === 'sunday08:00');
        const FindMonday0900 = result.filter(arr => arr.id === 'monday09:00');
        const FindTuesday0900 = result.filter(arr => arr.id === 'tuesday09:00');
        const FindWednesday0900 = result.filter(arr => arr.id === 'wednesday09:00');
        const FindThursday0900 = result.filter(arr => arr.id === 'thursday09:00');
        const FindFriday0900 = result.filter(arr => arr.id === 'friday09:00');
        const FindSaturday0900 = result.filter(arr => arr.id === 'saturday09:00');
        const FindSunday0900 = result.filter(arr => arr.id === 'sunday09:00');
        const FindMonday1000 = result.filter(arr => arr.id === 'monday10:00');
        const FindTuesday1000 = result.filter(arr => arr.id === 'tuesday10:00');
        const FindWednesday1000 = result.filter(arr => arr.id === 'wednesday10:00');
        const FindThursday1000 = result.filter(arr => arr.id === 'thursday10:00');
        const FindFriday1000 = result.filter(arr => arr.id === 'friday10:00');
        const FindSaturday1000 = result.filter(arr => arr.id === 'saturday10:00');
        const FindSunday1000 = result.filter(arr => arr.id === 'sunday10:00');
        const FindMonday1100 = result.filter(arr => arr.id === 'monday11:00');
        const FindTuesday1100 = result.filter(arr => arr.id === 'tuesday11:00');
        const FindWednesday1100 = result.filter(arr => arr.id === 'wednesday11:00');
        const FindThursday1100 = result.filter(arr => arr.id === 'thursday11:00');
        const FindFriday1100 = result.filter(arr => arr.id === 'friday11:00');
        const FindSaturday1100 = result.filter(arr => arr.id === 'saturday11:00');
        const FindSunday1100 = result.filter(arr => arr.id === 'sunday11:00');
        const FindMonday1200 = result.filter(arr => arr.id === 'monday12:00');
        const FindTuesday1200 = result.filter(arr => arr.id === 'tuesday12:00');
        const FindWednesday1200 = result.filter(arr => arr.id === 'wednesday12:00');
        const FindThursday1200 = result.filter(arr => arr.id === 'thursday12:00');
        const FindFriday1200 = result.filter(arr => arr.id === 'friday12:00');
        const FindSaturday1200 = result.filter(arr => arr.id === 'saturday12:00');
        const FindSunday1200 = result.filter(arr => arr.id === 'sunday12:00');
        const FindMonday1300 = result.filter(arr => arr.id === 'monday13:00');
        const FindTuesday1300 = result.filter(arr => arr.id === 'tuesday13:00');
        const FindWednesday1300 = result.filter(arr => arr.id === 'wednesday13:00');
        const FindThursday1300 = result.filter(arr => arr.id === 'thursday13:00');
        const FindFriday1300 = result.filter(arr => arr.id === 'friday13:00');
        const FindSaturday1300 = result.filter(arr => arr.id === 'saturday13:00');
        const FindSunday1300 = result.filter(arr => arr.id === 'sunday13:00');
        const FindMonday1400 = result.filter(arr => arr.id === 'monday14:00');
        const FindTuesday1400 = result.filter(arr => arr.id === 'tuesday14:00');
        const FindWednesday1400 = result.filter(arr => arr.id === 'wednesday14:00');
        const FindThursday1400 = result.filter(arr => arr.id === 'thursday14:00');
        const FindFriday1400 = result.filter(arr => arr.id === 'friday14:00');
        const FindSaturday1400 = result.filter(arr => arr.id === 'saturday14:00');
        const FindSunday1400 = result.filter(arr => arr.id === 'sunday14:00');
        const FindMonday1500 = result.filter(arr => arr.id === 'monday15:00');
        const FindTuesday1500 = result.filter(arr => arr.id === 'tuesday15:00');
        const FindWednesday1500 = result.filter(arr => arr.id === 'wednesday15:00');
        const FindThursday1500 = result.filter(arr => arr.id === 'thursday15:00');
        const FindFriday1500 = result.filter(arr => arr.id === 'friday15:00');
        const FindSaturday1500 = result.filter(arr => arr.id === 'saturday15:00');
        const FindSunday1500 = result.filter(arr => arr.id === 'sunday15:00');
        const FindMonday1600 = result.filter(arr => arr.id === 'monday16:00');
        const FindTuesday1600 = result.filter(arr => arr.id === 'tuesday16:00');
        const FindWednesday1600 = result.filter(arr => arr.id === 'wednesday16:00');
        const FindThursday1600 = result.filter(arr => arr.id === 'thursday16:00');
        const FindFriday1600 = result.filter(arr => arr.id === 'friday16:00');
        const FindSaturday1600 = result.filter(arr => arr.id === 'saturday16:00');
        const FindSunday1600 = result.filter(arr => arr.id === 'sunday16:00');
        const FindMonday1700 = result.filter(arr => arr.id === 'monday17:00');
        const FindTuesday1700 = result.filter(arr => arr.id === 'tuesday17:00');
        const FindWednesday1700 = result.filter(arr => arr.id === 'wednesday17:00');
        const FindThursday1700 = result.filter(arr => arr.id === 'thursday17:00');
        const FindFriday1700 = result.filter(arr => arr.id === 'friday17:00');
        const FindSaturday1700 = result.filter(arr => arr.id === 'saturday17:00');
        const FindSunday1700 = result.filter(arr => arr.id === 'sunday17:00');
        const FindMonday1800 = result.filter(arr => arr.id === 'monday18:00');
        const FindTuesday1800 = result.filter(arr => arr.id === 'tuesday18:00');
        const FindWednesday1800 = result.filter(arr => arr.id === 'wednesday18:00');
        const FindThursday1800 = result.filter(arr => arr.id === 'thursday18:00');
        const FindFriday1800 = result.filter(arr => arr.id === 'friday18:00');
        const FindSaturday1800 = result.filter(arr => arr.id === 'saturday18:00');
        const FindSunday1800 = result.filter(arr => arr.id === 'sunday18:00');
        const FindMonday1900 = result.filter(arr => arr.id === 'monday19:00');
        const FindTuesday1900 = result.filter(arr => arr.id === 'tuesday19:00');
        const FindWednesday1900 = result.filter(arr => arr.id === 'wednesday19:00');
        const FindThursday1900 = result.filter(arr => arr.id === 'thursday19:00');
        const FindFriday1900 = result.filter(arr => arr.id === 'friday19:00');
        const FindSaturday1900 = result.filter(arr => arr.id === 'saturday19:00');
        const FindSunday1900 = result.filter(arr => arr.id === 'sunday19:00');
        const FindMonday2000 = result.filter(arr => arr.id === 'monday20:00');
        const FindTuesday2000 = result.filter(arr => arr.id === 'tuesday20:00');
        const FindWednesday2000 = result.filter(arr => arr.id === 'wednesday20:00');
        const FindThursday2000 = result.filter(arr => arr.id === 'thursday20:00');
        const FindFriday2000 = result.filter(arr => arr.id === 'friday20:00');
        const FindSaturday2000 = result.filter(arr => arr.id === 'saturday20:00');
        const FindSunday2000 = result.filter(arr => arr.id === 'sunday20:00');

        const resultState0800 = [
          {id: FindMonday0800[0].id, day: FindMonday0800[0].day, time: FindMonday0800[0].time, kind_trainee: FindMonday0800[0].kind_trainee, name_Coach: FindMonday0800[0].name_Coach},
          {id: FindTuesday0800[0].id, day: FindTuesday0800[0].day, time: FindTuesday0800[0].time, kind_trainee: FindTuesday0800[0].kind_trainee, name_Coach: FindTuesday0800[0].name_Coach},
          {id: FindWednesday0800[0].id, day: FindWednesday0800[0].day, time: FindWednesday0800[0].time, kind_trainee: FindWednesday0800[0].kind_trainee, name_Coach: FindWednesday0800[0].name_Coach},
          {id: FindThursday0800[0].id, day: FindThursday0800[0].day, time: FindThursday0800[0].time, kind_trainee: FindThursday0800[0].kind_trainee, name_Coach: FindThursday0800[0].name_Coach},
          {id: FindFriday0800[0].id, day: FindFriday0800[0].day, time: FindFriday0800[0].time, kind_trainee: FindFriday0800[0].kind_trainee, name_Coach: FindFriday0800[0].name_Coach},
          {id: FindSaturday0800[0].id, day: FindSaturday0800[0].day, time: FindSaturday0800[0].time, kind_trainee: FindSaturday0800[0].kind_trainee, name_Coach: FindSaturday0800[0].name_Coach},
          {id: FindSunday0800[0].id, day: FindSunday0800[0].day, time: FindSunday0800[0].time, kind_trainee: FindSunday0800[0].kind_trainee, name_Coach: FindSunday0800[0].name_Coach},
        ]

        const resultState0900 = [
          {id: FindMonday0900[0].id, day: FindMonday0900[0].day, time: FindMonday0900[0].time, kind_trainee: FindMonday0900[0].kind_trainee, name_Coach: FindMonday0900[0].name_Coach},
          {id: FindTuesday0900[0].id, day: FindTuesday0900[0].day, time: FindTuesday0900[0].time, kind_trainee: FindTuesday0900[0].kind_trainee, name_Coach: FindTuesday0900[0].name_Coach},
          {id: FindWednesday0900[0].id, day: FindWednesday0900[0].day, time: FindWednesday0900[0].time, kind_trainee: FindWednesday0900[0].kind_trainee, name_Coach: FindWednesday0900[0].name_Coach},
          {id: FindThursday0900[0].id, day: FindThursday0900[0].day, time: FindThursday0900[0].time, kind_trainee: FindThursday0900[0].kind_trainee, name_Coach: FindThursday0900[0].name_Coach},
          {id: FindFriday0900[0].id, day: FindFriday0900[0].day, time: FindFriday0900[0].time, kind_trainee: FindFriday0900[0].kind_trainee, name_Coach: FindFriday0900[0].name_Coach},
          {id: FindSaturday0900[0].id, day: FindSaturday0900[0].day, time: FindSaturday0900[0].time, kind_trainee: FindSaturday0900[0].kind_trainee, name_Coach: FindSaturday0900[0].name_Coach},
          {id: FindSunday0900[0].id, day: FindSunday0900[0].day, time: FindSunday0900[0].time, kind_trainee: FindSunday0900[0].kind_trainee, name_Coach: FindSunday0900[0].name_Coach},
        ]
        const resultState1000 = [
          {id: FindMonday1000[0].id, day: FindMonday1000[0].day, time: FindMonday1000[0].time, kind_trainee: FindMonday1000[0].kind_trainee, name_Coach: FindMonday1000[0].name_Coach},
          {id: FindTuesday1000[0].id, day: FindTuesday1000[0].day, time: FindTuesday1000[0].time, kind_trainee: FindTuesday1000[0].kind_trainee, name_Coach: FindTuesday1000[0].name_Coach},
          {id: FindWednesday1000[0].id, day: FindWednesday1000[0].day, time: FindWednesday1000[0].time, kind_trainee: FindWednesday1000[0].kind_trainee, name_Coach: FindWednesday1000[0].name_Coach},
          {id: FindThursday1000[0].id, day: FindThursday1000[0].day, time: FindThursday1000[0].time, kind_trainee: FindThursday1000[0].kind_trainee, name_Coach: FindThursday1000[0].name_Coach},
          {id: FindFriday1000[0].id, day: FindFriday1000[0].day, time: FindFriday1000[0].time, kind_trainee: FindFriday1000[0].kind_trainee, name_Coach: FindFriday1000[0].name_Coach},
          {id: FindSaturday1000[0].id, day: FindSaturday1000[0].day, time: FindSaturday1000[0].time, kind_trainee: FindSaturday1000[0].kind_trainee, name_Coach: FindSaturday1000[0].name_Coach},
          {id: FindSunday1000[0].id, day: FindSunday1000[0].day, time: FindSunday1000[0].time, kind_trainee: FindSunday1000[0].kind_trainee, name_Coach: FindSunday1000[0].name_Coach},
        ]
        const resultState1100 = [
          {id: FindMonday1100[0].id, day: FindMonday1100[0].day, time: FindMonday1100[0].time, kind_trainee: FindMonday1100[0].kind_trainee, name_Coach: FindMonday1100[0].name_Coach},
          {id: FindTuesday1100[0].id, day: FindTuesday1100[0].day, time: FindTuesday1100[0].time, kind_trainee: FindTuesday1100[0].kind_trainee, name_Coach: FindTuesday1100[0].name_Coach},
          {id: FindWednesday1100[0].id, day: FindWednesday1100[0].day, time: FindWednesday1100[0].time, kind_trainee: FindWednesday1100[0].kind_trainee, name_Coach: FindWednesday1100[0].name_Coach},
          {id: FindThursday1100[0].id, day: FindThursday1100[0].day, time: FindThursday1100[0].time, kind_trainee: FindThursday1100[0].kind_trainee, name_Coach: FindThursday1100[0].name_Coach},
          {id: FindFriday1100[0].id, day: FindFriday1100[0].day, time: FindFriday1100[0].time, kind_trainee: FindFriday1100[0].kind_trainee, name_Coach: FindFriday1100[0].name_Coach},
          {id: FindSaturday1100[0].id, day: FindSaturday1100[0].day, time: FindSaturday1100[0].time, kind_trainee: FindSaturday1100[0].kind_trainee, name_Coach: FindSaturday1100[0].name_Coach},
          {id: FindSunday1100[0].id, day: FindSunday1100[0].day, time: FindSunday1100[0].time, kind_trainee: FindSunday1100[0].kind_trainee, name_Coach: FindSunday1100[0].name_Coach},
        ]
        const resultState1200 = [
          {id: FindMonday1200[0].id, day: FindMonday1200[0].day, time: FindMonday1200[0].time, kind_trainee: FindMonday1200[0].kind_trainee, name_Coach: FindMonday1200[0].name_Coach},
          {id: FindTuesday1200[0].id, day: FindTuesday1200[0].day, time: FindTuesday1200[0].time, kind_trainee: FindTuesday1200[0].kind_trainee, name_Coach: FindTuesday1200[0].name_Coach},
          {id: FindWednesday1200[0].id, day: FindWednesday1200[0].day, time: FindWednesday1200[0].time, kind_trainee: FindWednesday1200[0].kind_trainee, name_Coach: FindWednesday1200[0].name_Coach},
          {id: FindThursday1200[0].id, day: FindThursday1200[0].day, time: FindThursday1200[0].time, kind_trainee: FindThursday1200[0].kind_trainee, name_Coach: FindThursday1200[0].name_Coach},
          {id: FindFriday1200[0].id, day: FindFriday1200[0].day, time: FindFriday1200[0].time, kind_trainee: FindFriday1200[0].kind_trainee, name_Coach: FindFriday1200[0].name_Coach},
          {id: FindSaturday1200[0].id, day: FindSaturday1200[0].day, time: FindSaturday1200[0].time, kind_trainee: FindSaturday1200[0].kind_trainee, name_Coach: FindSaturday1200[0].name_Coach},
          {id: FindSunday1200[0].id, day: FindSunday1200[0].day, time: FindSunday1200[0].time, kind_trainee: FindSunday1200[0].kind_trainee, name_Coach: FindSunday1200[0].name_Coach},
        ]
        const resultState1300 = [
          {id: FindMonday1300[0].id, day: FindMonday1300[0].day, time: FindMonday1300[0].time, kind_trainee: FindMonday1300[0].kind_trainee, name_Coach: FindMonday1300[0].name_Coach},
          {id: FindTuesday1300[0].id, day: FindTuesday1300[0].day, time: FindTuesday1300[0].time, kind_trainee: FindTuesday1300[0].kind_trainee, name_Coach: FindTuesday1300[0].name_Coach},
          {id: FindWednesday1300[0].id, day: FindWednesday1300[0].day, time: FindWednesday1300[0].time, kind_trainee: FindWednesday1300[0].kind_trainee, name_Coach: FindWednesday1300[0].name_Coach},
          {id: FindThursday1300[0].id, day: FindThursday1300[0].day, time: FindThursday1300[0].time, kind_trainee: FindThursday1300[0].kind_trainee, name_Coach: FindThursday1300[0].name_Coach},
          {id: FindFriday1300[0].id, day: FindFriday1300[0].day, time: FindFriday1300[0].time, kind_trainee: FindFriday1300[0].kind_trainee, name_Coach: FindFriday1300[0].name_Coach},
          {id: FindSaturday1300[0].id, day: FindSaturday1300[0].day, time: FindSaturday1300[0].time, kind_trainee: FindSaturday1300[0].kind_trainee, name_Coach: FindSaturday1300[0].name_Coach},
          {id: FindSunday1300[0].id, day: FindSunday1300[0].day, time: FindSunday1300[0].time, kind_trainee: FindSunday1300[0].kind_trainee, name_Coach: FindSunday1300[0].name_Coach},
        ]
        const resultState1400 = [
          {id: FindMonday1400[0].id, day: FindMonday1400[0].day, time: FindMonday1400[0].time, kind_trainee: FindMonday1400[0].kind_trainee, name_Coach: FindMonday1400[0].name_Coach},
          {id: FindTuesday1400[0].id, day: FindTuesday1400[0].day, time: FindTuesday1400[0].time, kind_trainee: FindTuesday1400[0].kind_trainee, name_Coach: FindTuesday1400[0].name_Coach},
          {id: FindWednesday1400[0].id, day: FindWednesday1400[0].day, time: FindWednesday1400[0].time, kind_trainee: FindWednesday1400[0].kind_trainee, name_Coach: FindWednesday1400[0].name_Coach},
          {id: FindThursday1400[0].id, day: FindThursday1400[0].day, time: FindThursday1400[0].time, kind_trainee: FindThursday1400[0].kind_trainee, name_Coach: FindThursday1400[0].name_Coach},
          {id: FindFriday1400[0].id, day: FindFriday1400[0].day, time: FindFriday1400[0].time, kind_trainee: FindFriday1400[0].kind_trainee, name_Coach: FindFriday1400[0].name_Coach},
          {id: FindSaturday1400[0].id, day: FindSaturday1400[0].day, time: FindSaturday1400[0].time, kind_trainee: FindSaturday1400[0].kind_trainee, name_Coach: FindSaturday1400[0].name_Coach},
          {id: FindSunday1400[0].id, day: FindSunday1400[0].day, time: FindSunday1400[0].time, kind_trainee: FindSunday1400[0].kind_trainee, name_Coach: FindSunday1400[0].name_Coach},
        ]
        const resultState1500 = [
          {id: FindMonday1500[0].id, day: FindMonday1500[0].day, time: FindMonday1500[0].time, kind_trainee: FindMonday1500[0].kind_trainee, name_Coach: FindMonday1500[0].name_Coach},
          {id: FindTuesday1500[0].id, day: FindTuesday1500[0].day, time: FindTuesday1500[0].time, kind_trainee: FindTuesday1500[0].kind_trainee, name_Coach: FindTuesday1500[0].name_Coach},
          {id: FindWednesday1500[0].id, day: FindWednesday1500[0].day, time: FindWednesday1500[0].time, kind_trainee: FindWednesday1500[0].kind_trainee, name_Coach: FindWednesday1500[0].name_Coach},
          {id: FindThursday1500[0].id, day: FindThursday1500[0].day, time: FindThursday1500[0].time, kind_trainee: FindThursday1500[0].kind_trainee, name_Coach: FindThursday1500[0].name_Coach},
          {id: FindFriday1500[0].id, day: FindFriday1500[0].day, time: FindFriday1500[0].time, kind_trainee: FindFriday1500[0].kind_trainee, name_Coach: FindFriday1500[0].name_Coach},
          {id: FindSaturday1500[0].id, day: FindSaturday1500[0].day, time: FindSaturday1500[0].time, kind_trainee: FindSaturday1500[0].kind_trainee, name_Coach: FindSaturday1500[0].name_Coach},
          {id: FindSunday1500[0].id, day: FindSunday1500[0].day, time: FindSunday1500[0].time, kind_trainee: FindSunday1500[0].kind_trainee, name_Coach: FindSunday1500[0].name_Coach},
        ]
        const resultState1600 = [
          {id: FindMonday1600[0].id, day: FindMonday1600[0].day, time: FindMonday1600[0].time, kind_trainee: FindMonday1600[0].kind_trainee, name_Coach: FindMonday1600[0].name_Coach},
          {id: FindTuesday1600[0].id, day: FindTuesday1600[0].day, time: FindTuesday1600[0].time, kind_trainee: FindTuesday1600[0].kind_trainee, name_Coach: FindTuesday1600[0].name_Coach},
          {id: FindWednesday1600[0].id, day: FindWednesday1600[0].day, time: FindWednesday1600[0].time, kind_trainee: FindWednesday1600[0].kind_trainee, name_Coach: FindWednesday1600[0].name_Coach},
          {id: FindThursday1600[0].id, day: FindThursday1600[0].day, time: FindThursday1600[0].time, kind_trainee: FindThursday1600[0].kind_trainee, name_Coach: FindThursday1600[0].name_Coach},
          {id: FindFriday1600[0].id, day: FindFriday1600[0].day, time: FindFriday1600[0].time, kind_trainee: FindFriday1600[0].kind_trainee, name_Coach: FindFriday1600[0].name_Coach},
          {id: FindSaturday1600[0].id, day: FindSaturday1600[0].day, time: FindSaturday1600[0].time, kind_trainee: FindSaturday1600[0].kind_trainee, name_Coach: FindSaturday1600[0].name_Coach},
          {id: FindSunday1600[0].id, day: FindSunday1600[0].day, time: FindSunday1600[0].time, kind_trainee: FindSunday1600[0].kind_trainee, name_Coach: FindSunday1600[0].name_Coach},
        ]
        const resultState1700 = [
          {id: FindMonday1700[0].id, day: FindMonday1700[0].day, time: FindMonday1700[0].time, kind_trainee: FindMonday1700[0].kind_trainee, name_Coach: FindMonday1700[0].name_Coach},
          {id: FindTuesday1700[0].id, day: FindTuesday1700[0].day, time: FindTuesday1700[0].time, kind_trainee: FindTuesday1700[0].kind_trainee, name_Coach: FindTuesday1700[0].name_Coach},
          {id: FindWednesday1700[0].id, day: FindWednesday1700[0].day, time: FindWednesday1700[0].time, kind_trainee: FindWednesday1700[0].kind_trainee, name_Coach: FindWednesday1700[0].name_Coach},
          {id: FindThursday1700[0].id, day: FindThursday1700[0].day, time: FindThursday1700[0].time, kind_trainee: FindThursday1700[0].kind_trainee, name_Coach: FindThursday1700[0].name_Coach},
          {id: FindFriday1700[0].id, day: FindFriday1700[0].day, time: FindFriday1700[0].time, kind_trainee: FindFriday1700[0].kind_trainee, name_Coach: FindFriday1700[0].name_Coach},
          {id: FindSaturday1700[0].id, day: FindSaturday1700[0].day, time: FindSaturday1700[0].time, kind_trainee: FindSaturday1700[0].kind_trainee, name_Coach: FindSaturday1700[0].name_Coach},
          {id: FindSunday1700[0].id, day: FindSunday1700[0].day, time: FindSunday1700[0].time, kind_trainee: FindSunday1700[0].kind_trainee, name_Coach: FindSunday1700[0].name_Coach},
        ]
        const resultState1800 = [
          {id: FindMonday1800[0].id, day: FindMonday1800[0].day, time: FindMonday1800[0].time, kind_trainee: FindMonday1800[0].kind_trainee, name_Coach: FindMonday1800[0].name_Coach},
          {id: FindTuesday1800[0].id, day: FindTuesday1800[0].day, time: FindTuesday1800[0].time, kind_trainee: FindTuesday1800[0].kind_trainee, name_Coach: FindTuesday1800[0].name_Coach},
          {id: FindWednesday1800[0].id, day: FindWednesday1800[0].day, time: FindWednesday1800[0].time, kind_trainee: FindWednesday1800[0].kind_trainee, name_Coach: FindWednesday1800[0].name_Coach},
          {id: FindThursday1800[0].id, day: FindThursday1800[0].day, time: FindThursday1800[0].time, kind_trainee: FindThursday1800[0].kind_trainee, name_Coach: FindThursday1800[0].name_Coach},
          {id: FindFriday1800[0].id, day: FindFriday1800[0].day, time: FindFriday1800[0].time, kind_trainee: FindFriday1800[0].kind_trainee, name_Coach: FindFriday1800[0].name_Coach},
          {id: FindSaturday1800[0].id, day: FindSaturday1800[0].day, time: FindSaturday1800[0].time, kind_trainee: FindSaturday1800[0].kind_trainee, name_Coach: FindSaturday1800[0].name_Coach},
          {id: FindSunday1800[0].id, day: FindSunday1800[0].day, time: FindSunday1800[0].time, kind_trainee: FindSunday1800[0].kind_trainee, name_Coach: FindSunday1800[0].name_Coach},
        ]
        const resultState1900 = [
          {id: FindMonday1900[0].id, day: FindMonday1900[0].day, time: FindMonday1900[0].time, kind_trainee: FindMonday1900[0].kind_trainee, name_Coach: FindMonday1900[0].name_Coach},
          {id: FindTuesday1900[0].id, day: FindTuesday1900[0].day, time: FindTuesday1900[0].time, kind_trainee: FindTuesday1900[0].kind_trainee, name_Coach: FindTuesday1900[0].name_Coach},
          {id: FindWednesday1900[0].id, day: FindWednesday1900[0].day, time: FindWednesday1900[0].time, kind_trainee: FindWednesday1900[0].kind_trainee, name_Coach: FindWednesday1900[0].name_Coach},
          {id: FindThursday1900[0].id, day: FindThursday1900[0].day, time: FindThursday1900[0].time, kind_trainee: FindThursday1900[0].kind_trainee, name_Coach: FindThursday1900[0].name_Coach},
          {id: FindFriday1900[0].id, day: FindFriday1900[0].day, time: FindFriday1900[0].time, kind_trainee: FindFriday1900[0].kind_trainee, name_Coach: FindFriday1900[0].name_Coach},
          {id: FindSaturday1900[0].id, day: FindSaturday1900[0].day, time: FindSaturday1900[0].time, kind_trainee: FindSaturday1900[0].kind_trainee, name_Coach: FindSaturday1900[0].name_Coach},
          {id: FindSunday1900[0].id, day: FindSunday1900[0].day, time: FindSunday1900[0].time, kind_trainee: FindSunday1900[0].kind_trainee, name_Coach: FindSunday1900[0].name_Coach},
        ]
        const resultState2000 = [
          {id: FindMonday2000[0].id, day: FindMonday2000[0].day, time: FindMonday2000[0].time, kind_trainee: FindMonday2000[0].kind_trainee, name_Coach: FindMonday2000[0].name_Coach},
          {id: FindTuesday2000[0].id, day: FindTuesday2000[0].day, time: FindTuesday2000[0].time, kind_trainee: FindTuesday2000[0].kind_trainee, name_Coach: FindTuesday2000[0].name_Coach},
          {id: FindWednesday2000[0].id, day: FindWednesday2000[0].day, time: FindWednesday2000[0].time, kind_trainee: FindWednesday2000[0].kind_trainee, name_Coach: FindWednesday2000[0].name_Coach},
          {id: FindThursday2000[0].id, day: FindThursday2000[0].day, time: FindThursday2000[0].time, kind_trainee: FindThursday2000[0].kind_trainee, name_Coach: FindThursday2000[0].name_Coach},
          {id: FindFriday2000[0].id, day: FindFriday2000[0].day, time: FindFriday2000[0].time, kind_trainee: FindFriday2000[0].kind_trainee, name_Coach: FindFriday2000[0].name_Coach},
          {id: FindSaturday2000[0].id, day: FindSaturday2000[0].day, time: FindSaturday2000[0].time, kind_trainee: FindSaturday2000[0].kind_trainee, name_Coach: FindSaturday2000[0].name_Coach},
          {id: FindSunday2000[0].id, day: FindSunday2000[0].day, time: FindSunday2000[0].time, kind_trainee: FindSunday2000[0].kind_trainee, name_Coach: FindSunday2000[0].name_Coach},
        ]
        setData0800(resultState0800);
        setData0900(resultState0900);
        setData1000(resultState1000);
        setData1100(resultState1100);
        setData1200(resultState1200);
        setData1300(resultState1300);
        setData1400(resultState1400);
        setData1500(resultState1500);
        setData1600(resultState1600);
        setData1700(resultState1700);
        setData1800(resultState1800);
        setData1900(resultState1900);
        setData2000(resultState2000);
      });
  },
   [setData0800]
   );

  return (
    <PositionTable>
    <Table
      striped
      bordered
      hover
        size='xl'
        className='table-back-color'
    >
      <thead >
        <tr>
          <th className='time'>#</th>
          <th className='monday'>Понеділок</th>
          <th className='tuesday'>Вівторок</th>
          <th className='wednesday'>Середа</th>
          <th className='thursday'>Четвер</th>
          <th className='friday'>П'ятниця</th>
          <th className='saturday'>Субота</th>
          <th className='sunday'>Неділя</th>
        </tr>
      </thead>
        <tbody>
        <ScheduleTable
          data0800={data0800}
          data0900={data0900}
          data1000={data1000}
          data1100={data1100}
          data1200={data1200}
          data1300={data1300}
          data1400={data1400}
          data1500={data1500}
          data1600={data1600}
          data1700={data1700}
          data1800={data1800}
          data1900={data1900}
          data2000={data2000}
        />
      </tbody>
      </Table>
      {/* <ScheduleLink to='/'>Головне меню</ScheduleLink> */}
    </PositionTable>
  );
}

export default ScheduleGet;