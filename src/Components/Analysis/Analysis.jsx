import { useEffect, useState } from 'react';
import { clientAPI } from "service/axios.config";
import {
  ResultsWrapper,
  WrapperKindTrainee,
  KindTraineeRes,
  KindTraineeUsers,
  AllResults,
  AllResultsUsers
} from './Analysis.styled';
// import Diagram from './Diagram/Diagram';
// import moment from 'moment/moment';

export default function Analysis() {
  const [allTrainee, setAllTrainee] = useState([]);
  const [allKindTrainee, setAllKindTrainee] = useState([]);
  const [getMonth, setGetMonth] = useState([]);
  // const [getDay, setGetDay] = useState([]);
  // const [getTime, setGetTime] = useState([]);

  const month = [
    { id: 'january', label: '01', translate:'Січень' },
    { id: 'february', label: '02', translate:'Лютий'  },
    { id: 'march', label: '03', translate:'Березень'  },
    { id: 'april', label: '04', translate:'Квітень'  },
    { id: 'may', label: '05', translate:'Травень'  },
    { id: 'june', label: '06', translate:'Червень'  },
    { id: 'july', label: '07', translate:'Липень'  },
    { id: 'august', label: '08', translate:'Серпень'  },
    { id: 'september', label: '09', translate:'Вересень'  },
    { id: 'october', label: '10', translate:'Жовтень'  },
    { id: 'november', label: '11', translate:'Листопад'  },
    { id: 'december', label: '12', translate:'Грудень'  },
  ];

  const day = [
    { id: 'monday', translate: 'Понеділок' },
    { id: 'tuesday', translate: 'Вівторок' },
    { id: 'wednesday', translate: 'Середа' },
    { id: 'thursday', translate: 'Четвер' },
    { id: 'friday', translate: 'П`ятниця' },
    { id: 'saturday', translate: 'Субота' },
    { id: 'sunday', translate: 'Неділя' },
  ];

    const time = [
    { id: '08:00' },
    { id: '09:00' },
    { id: '10:00' },
    { id: '11:00' },
    { id: '12:00' },
    { id: '13:00' },
    { id: '14:00' },
    { id: '15:00' },
    { id: '16:00' },
    { id: '17:00' },
    { id: '18:00' },
    { id: '19:00' },
    { id: '20:00' },

  ];

  useEffect(() => {
    const getAllClients = async () => {
      const result = await clientAPI.getDataALLUsers();
      const extractInfo = result.flatMap(item => item.info);
      setAllTrainee(extractInfo)
      // const february = '02';
      // const march = '03';
      // const june = '01';
      // const HighHeels = 'High heels';
      // const vogue = 'Vogue';
      // const kangooJumps = 'Kangoo jumps';
      // const skyJumping = 'Sky jumping';
      // const stretching = 'Stretching';
      // const healthBack = 'Здорова спина';
      // const healthBack2 = 'Здорова спина +';
      // const tribal = 'Tribal fusion';
      // const twerk = 'Twerk';
      // const bodyBalet = 'Боди балет';
      // const functional = 'Functional';
      // const fitnessMomChild = 'Фітнес мама + малюк';
      // const strip18 = 'Strip 18+';
      // const zumba = 'Zumba';
      // const bachata = 'Bachata (парні танці)';
      // const jazzFunk = 'Jazz-Funk';
      // const TRXTabata = 'TRX + Tabata';
      // const flyStretching = 'Fly stretching';
      // const ladyStyle = 'Lady style';
      // const childDance = 'Дитяча хореографія';
      // const baking_18 = 'Булочна 18+';
      // const bootyStretching = 'Booty stretching';


      // const extractFebruaryTreinings = extractInfo.filter(arr => arr.date.slice(5, 7) === march);
      // const dateToday = moment().add(0, 'days').format('').slice(5, 7);
      // console.log("canceledTraining: ", extractFebruaryTreinings.filter(arr => arr.canceledTraining === true))
      // console.log("skyJumping: ", extractFebruaryTreinings.filter(arr => arr.kind_trainee === skyJumping))
      // console.log("08:00: ", extractFebruaryTreinings.filter(arr => arr.time === '08:00'))
      // console.log("09:00: ", extractFebruaryTreinings.filter(arr => arr.time === '09:00'))
      // console.log("10:00: ", extractFebruaryTreinings.filter(arr => arr.time === '10:00'))
      // console.log("11:00: ", extractFebruaryTreinings.filter(arr => arr.time === '11:00'))
      // console.log("12:00: ", extractFebruaryTreinings.filter(arr => arr.time === '12:00'))
      // console.log("13:00: ", extractFebruaryTreinings.filter(arr => arr.time === '13:00'))
      // console.log("14:00: ", extractFebruaryTreinings.filter(arr => arr.time === '14:00'))
      // console.log("15:00: ", extractFebruaryTreinings.filter(arr => arr.time === '15:00'))
      // console.log("16:00: ", extractFebruaryTreinings.filter(arr => arr.time === '16:00'))
      // console.log("17:00: ", extractFebruaryTreinings.filter(arr => arr.time === '17:00'))
      // console.log("18:00: ", extractFebruaryTreinings.filter(arr => arr.time === '18:00'))
      // console.log("19:00: ", extractFebruaryTreinings.filter(arr => arr.time === '19:00'))
      // console.log("20:00: ", extractFebruaryTreinings.filter(arr => arr.time === '20:00'))
      // const Extractvogue = 'Vogue';
      // const ExtractkangooJumps = 'Kangoo jumps';
      // const ExtractskyJumping = 'Sky jumping';
      // const Extractstretching = 'Stretching';
      // const ExtracthealthBack = 'Здорова спина';
      // const ExtracthealthBack2 = 'Здорова спина +';
      // const Extracttribal = 'Tribal fusion';
      // const Extracttwerk = 'Twerk';
      // const ExtractbodyBalet = 'Боди балет';
      // const Extractfunctional = 'Functional';
      // const ExtractfitnessMomChild = 'Фітнес мама + малюк';
      // const Extractstrip18 = 'Strip 18+';
      // const Extractzumba = 'Zumba';
      // const Extractbachata = 'Bachata (парні танці)';
      // const ExtractjazzFunk = 'Jazz-Funk';
      // const ExtractTRXTabata = 'TRX + Tabata';
      // const ExtractflyStretching = 'Fly stretching';
      // const ExtractladyStyle = 'Lady style';
      // const ExtractchildDance = 'Дитяча хореографія';
      // const Extractbaking_18 = 'Булочна 18+';
      // const ExtractbootyStretching = 'Booty stretching';

      // console.log("extractFebruaryTreinings: ", extractFebruaryTreinings);
      // const dataClientToday0800 = result.filter(arr => arr.info.some(infoDate => infoDate.date.slice(0, 10) === dateToday && infoDate.time === '08:00'));
      // setAllClients(result);
    };
    if (allTrainee.length === 0) {
      getAllClients();
    }
  }, [allTrainee]);

  useEffect(() => {
    const getAllKindTrainee = async () => {
      if (allKindTrainee.length === 0) {
        const result = await clientAPI.getKindTraineeAll();
        setAllKindTrainee(result)
      }
    }
    getAllKindTrainee();
  })

  // const SortingOfMonth = () => {
  //   if (getMonth.length === 0) {
  //     return null;
  //   }
  //   const month = allTrainee.filter(arr => arr.date.slice(5, 7) === getMonth);
  //   return (
  //     <ResultsWrapper>
  //       <p>Всього: {month.length}</p>
  //       {allKindTrainee.map((item) => (
  //         <WrapperKindTrainee key={item._id}>
  //           <KindTraineeRes>{item.value} : </KindTraineeRes>
  //           <KindTraineeUsers>{month.filter(arr => arr.kind_trainee === item.value).length}</KindTraineeUsers>
  //         </WrapperKindTrainee>
  //     ))}
  //     </ResultsWrapper>
  //   )
  // }

  const handleChooseMonth = (e) => {
    setGetMonth(e.target.value);
  }

  const SortingOfMonth = () => {
  if (getMonth.length === 0) {
    return null;
  }
  const month = allTrainee.filter(arr => arr.date.slice(5, 7) === getMonth);
    const allCanceledTraining = month.filter(arr => arr.canceledTraining === true).length;
  const kindTraineeResults = allKindTrainee
    .map((item) => ({
      value: item.value,
      count: month.filter(arr => arr.kind_trainee === item.value).length,
      canceledTraining: month.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length
    }))
    .filter((item) => item.count > 0);
  if (kindTraineeResults.length === 0) {
    return null;
  }
  return (
    <ResultsWrapper>
      <div>
        <AllResults>Вид тренування </AllResults>
        <AllResultsUsers>К-сть</AllResultsUsers>
        <AllResultsUsers>Відміна</AllResultsUsers>
      </div>
      {kindTraineeResults.map((item) => (
        <WrapperKindTrainee key={item.value}>
          <KindTraineeRes>{item.value} </KindTraineeRes>
          <KindTraineeUsers>{item.count}</KindTraineeUsers>
          <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
        </WrapperKindTrainee>
      ))}
      <div>
        <AllResults>Всього: </AllResults>
        <AllResultsUsers>{month.length}</AllResultsUsers>
        <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
      </div>
    </ResultsWrapper>
  );
};

  const SortingOfDay = () => {
    if (getMonth.length === 0) {
    return null;
  }
  const month = allTrainee.filter(arr => arr.date.slice(5, 7) === getMonth);
  const allCanceledTraining = month.filter(arr => arr.canceledTraining === true).length;
  const dayResults = day
    .map((item) => ({
      value: item.translate,
      day: item.id,
      count: month.filter(arr => arr.day === item.id).length,
      canceledTraining: month.filter(arr => arr.day === item.id && arr.canceledTraining === true).length
    }))
      .filter((item) => item.count > 0);
    // console.log(month.filter(arr => arr.day === 'monday').length)
  if (dayResults.length === 0) {
    return null;
  }
  return (
    <ResultsWrapper>
      <div>
        <AllResults>Вид тренування </AllResults>
        <AllResultsUsers>К-сть</AllResultsUsers>
        <AllResultsUsers>Відміна</AllResultsUsers>
      </div>
      {dayResults.map((item) => (
        <WrapperKindTrainee key={item.value}>
          <KindTraineeRes>{item.value} </KindTraineeRes>
          <KindTraineeUsers>{item.count}</KindTraineeUsers>
          <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
        </WrapperKindTrainee>
      ))}
      <div>
        <AllResults>Всього: </AllResults>
        <AllResultsUsers>{month.length}</AllResultsUsers>
        <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
      </div>
    </ResultsWrapper>
  );
  }

  const SortingOfTime = () => {
    if (getMonth.length === 0) {
    return null;
  }
  const month = allTrainee.filter(arr => arr.date.slice(5, 7) === getMonth);
  const allCanceledTraining = month.filter(arr => arr.canceledTraining === true).length;
  const dayResults = time
    .map((item) => ({
      value: item.id,
      count: month.filter(arr => arr.time === item.id).length,
      canceledTraining: month.filter(arr => arr.time === item.id && arr.canceledTraining === true).length
    }))
      .filter((item) => item.count > 0);
    // console.log(month.filter(arr => arr.day === 'monday').length)
  if (dayResults.length === 0) {
    return null;
  }
  return (
    <ResultsWrapper>
      <div>
        <AllResults>Час </AllResults>
        <AllResultsUsers>К-сть</AllResultsUsers>
        <AllResultsUsers>Відміна</AllResultsUsers>
      </div>
      {dayResults.map((item) => (
        <WrapperKindTrainee key={item.value}>
          <KindTraineeRes>{item.value} </KindTraineeRes>
          <KindTraineeUsers>{item.count}</KindTraineeUsers>
          <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
        </WrapperKindTrainee>
      ))}
      <div>
        <AllResults>Всього: </AllResults>
        <AllResultsUsers>{month.length}</AllResultsUsers>
        <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
      </div>
    </ResultsWrapper>
  );
  }


  return (
    <>
      <select name="choose-month" id="choose-month" onChange={handleChooseMonth}>
        {month.map((item) => (
          <option value={item.label} key={item.id}>{item.translate}</option>
        ))}
      </select>
      <SortingOfMonth />
      <SortingOfDay />
      <SortingOfTime/>
      {/* {allKindTrainee.map((item) => (
        <div key={item._id}>
          <p></p>
        </div>
      ))} */}
    </>
  );
}
