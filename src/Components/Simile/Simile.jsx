import { useEffect, useState } from 'react';
import { clientAPI } from "service/axios.config";
import moment from 'moment/moment';
import { BiSearchAlt2 } from "react-icons/bi";
import {
  AnalysisStyled,
  ResultsWrapper,
  WrapperKindTrainee,
  KindTraineeRes,
  KindTraineeUsers,
  AllResults,
  AllResultsUsers,
  InfoCoachBTN
} from './Simile.styled';
import Modal from 'Components/Modal/Modal';

const Simile = () => {
const [allTrainee, setAllTrainee] = useState([]);
  const [allCoach, setAllCoach] = useState([]);
  const [allKindTrainings, setAllKindTrainings] = useState([]);
  const [getMonth, setGetMonth] = useState(moment().add(0, 'days').format('').slice(5, 7));
  const [showModal, setShowModal] = useState(false);
  const [coachInfoTrainings, setCoachInfoTrainings] = useState('');
  const [coachInfo, setCoachInfo] = useState('');

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
    const getData = async () => {
      const getAllClients = await clientAPI.getDataALLUsers();
      const getAllCoach = await clientAPI.getAllCoach();
      const getAllKindTrainings = await clientAPI.getKindTraineeAll();
      const extractInfo = getAllClients.flatMap(item => item.info);
      setAllTrainee(extractInfo);
      setAllCoach(getAllCoach);
      setAllKindTrainings(getAllKindTrainings);
    };
    if (allTrainee.length === 0) {
      getData();
    }
  }, [allTrainee]);

  useEffect(() => {
    const select = document.getElementById('choose-month');
    select.value = getMonth;
  }, [getMonth]);

  const monthFilteredJanuary = allTrainee.filter(arr => arr.date.slice(5, 7) === month[0].label);
  // const monthFilteredJanuary = allTrainee.filter(arr => console.log(arr.date.slice(5, 7)));
  const monthFilteredFebruary = allTrainee.filter(arr => arr.date.slice(5, 7) === month[1].label);
  const monthFilteredMarch = allTrainee.filter(arr => arr.date.slice(5, 7) === month[2].label);
  const monthFilteredApril = allTrainee.filter(arr => arr.date.slice(5, 7) === month[3].label);
  const monthFilteredMay = allTrainee.filter(arr => arr.date.slice(5, 7) === month[4].label);
  const monthFilteredJune = allTrainee.filter(arr => arr.date.slice(5, 7) === month[5].label);
  const monthFilteredJuly = allTrainee.filter(arr => arr.date.slice(5, 7) === month[6].label);
  const monthFilteredAugust = allTrainee.filter(arr => arr.date.slice(5, 7) === month[7].label);
  const monthFilteredSeptember = allTrainee.filter(arr => arr.date.slice(5, 7) === month[8].label);
  const monthFilteredOctober = allTrainee.filter(arr => arr.date.slice(5, 7) === month[9].label);
  const monthFilteredNovember = allTrainee.filter(arr => arr.date.slice(5, 7) === month[10].label);
  const monthFilteredDecember = allTrainee.filter(arr => arr.date.slice(5, 7) === month[11].label);
  // const allCanceledTraining = monthFilteredJanuary.filter(arr => arr.canceledTraining === true).length;
  // console.log(monthFilteredMarch)
  // console.log(month[0].label)
  const handleChooseMonth = (e) => {
    setGetMonth(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false)
    setCoachInfoTrainings('');
  }

  const SortingAnalysis = () => {
    if (getMonth.length === 0) {
      return null;
    }
    const coachResults = allCoach
      .map((item) => ({
        value: item.name_Coach,
        id: item._id,
        count01: monthFilteredJanuary.filter(arr => arr.coach === item.name_Coach).length,
        count02: monthFilteredFebruary.filter(arr => arr.coach === item.name_Coach).length,
        count03: monthFilteredMarch.filter(arr => arr.coach === item.name_Coach).length,
        count04: monthFilteredApril.filter(arr => arr.coach === item.name_Coach).length,
        count05: monthFilteredMay.filter(arr => arr.coach === item.name_Coach).length,
        count06: monthFilteredJune.filter(arr => arr.coach === item.name_Coach).length,
        count07: monthFilteredJuly.filter(arr => arr.coach === item.name_Coach).length,
        count08: monthFilteredAugust.filter(arr => arr.coach === item.name_Coach).length,
        count09: monthFilteredSeptember.filter(arr => arr.coach === item.name_Coach).length,
        count10: monthFilteredOctober.filter(arr => arr.coach === item.name_Coach).length,
        count11: monthFilteredNovember.filter(arr => arr.coach === item.name_Coach).length,
        count12: monthFilteredDecember.filter(arr => arr.coach === item.name_Coach).length,
        canceledTrainingJanuary: monthFilteredJanuary.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingFebruary: monthFilteredFebruary.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingMarch: monthFilteredMarch.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingApril: monthFilteredApril.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingMay: monthFilteredMay.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingJune: monthFilteredJune.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingJuly: monthFilteredJuly.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingAugust: monthFilteredAugust.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingSeptember: monthFilteredSeptember.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingOctober: monthFilteredOctober.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingNovember: monthFilteredNovember.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
        canceledTrainingDecember: monthFilteredDecember.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length,
      }))
      .filter((item) => item.count > 0);
    const kindTraineeResults = allKindTrainings
      .map((item) => ({
        value: item.value,
        // count: monthFiltered.filter(arr => arr.kind_trainee === item.value).length,
        count01: monthFilteredJanuary.filter(arr => arr.kind_trainee === item.value).length,
        count02: monthFilteredFebruary.filter(arr => arr.kind_trainee === item.value).length,
        count03: monthFilteredMarch.filter(arr => arr.kind_trainee === item.value).length,
        count04: monthFilteredApril.filter(arr => arr.kind_trainee === item.value).length,
        count05: monthFilteredMay.filter(arr => arr.kind_trainee === item.value).length,
        count06: monthFilteredJune.filter(arr => arr.kind_trainee === item.value).length,
        count07: monthFilteredJuly.filter(arr => arr.kind_trainee === item.value).length,
        count08: monthFilteredAugust.filter(arr => arr.kind_trainee === item.value).length,
        count09: monthFilteredSeptember.filter(arr => arr.kind_trainee === item.value).length,
        count10: monthFilteredOctober.filter(arr => arr.kind_trainee === item.value).length,
        count11: monthFilteredNovember.filter(arr => arr.kind_trainee === item.value).length,
        count12: monthFilteredDecember.filter(arr => arr.kind_trainee === item.value).length,
        canceledTrainingJanuary: monthFilteredJanuary.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingFebruary: monthFilteredFebruary.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingMarch: monthFilteredMarch.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingApril: monthFilteredApril.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingMay: monthFilteredMay.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingJune: monthFilteredJune.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingJuly: monthFilteredJuly.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingAugust: monthFilteredAugust.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingSeptember: monthFilteredSeptember.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingOctober: monthFilteredOctober.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingNovember: monthFilteredNovember.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        canceledTrainingDecember: monthFilteredDecember.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length,
        // canceledTraining: monthFiltered.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length
      }))
      .filter((item) => item.count > 0);
    const dayResults = day
      .map((item) => ({
        value: item.translate,
        day: item.id,
        // count: monthFiltered.filter(arr => arr.day === item.id).length,
        // canceledTraining: monthFiltered.filter(arr => arr.day === item.id && arr.canceledTraining === true).length
        count01: monthFilteredJanuary.filter(arr => arr.day === item.id).length,
        count02: monthFilteredFebruary.filter(arr => arr.day === item.id).length,
        count03: monthFilteredMarch.filter(arr => arr.day === item.id).length,
        count04: monthFilteredApril.filter(arr => arr.day === item.id).length,
        count05: monthFilteredMay.filter(arr => arr.day === item.id).length,
        count06: monthFilteredJune.filter(arr => arr.day === item.id).length,
        count07: monthFilteredJuly.filter(arr => arr.day === item.id).length,
        count08: monthFilteredAugust.filter(arr => arr.day === item.id).length,
        count09: monthFilteredSeptember.filter(arr => arr.day === item.id).length,
        count10: monthFilteredOctober.filter(arr => arr.day === item.id).length,
        count11: monthFilteredNovember.filter(arr => arr.day === item.id).length,
        count12: monthFilteredDecember.filter(arr => arr.day === item.id).length,
        canceledTrainingJanuary: monthFilteredJanuary.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingFebruary: monthFilteredFebruary.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingMarch: monthFilteredMarch.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingApril: monthFilteredApril.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingMay: monthFilteredMay.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingJune: monthFilteredJune.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingJuly: monthFilteredJuly.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingAugust: monthFilteredAugust.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingSeptember: monthFilteredSeptember.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingOctober: monthFilteredOctober.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingNovember: monthFilteredNovember.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
        canceledTrainingDecember: monthFilteredDecember.filter(arr => arr.day === item.id && arr.canceledTraining === true).length,
      }))
      .filter((item) => item.count > 0);
    const timeResults = time
      .map((item) => ({
        value: item.id,
        // count: monthFiltered.filter(arr => arr.time === item.id).length,
        // canceledTraining: monthFiltered.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        count01: monthFilteredJanuary.filter(arr => arr.time === item.id).length,
        count02: monthFilteredFebruary.filter(arr => arr.time === item.id).length,
        count03: monthFilteredMarch.filter(arr => arr.time === item.id).length,
        count04: monthFilteredApril.filter(arr => arr.time === item.id).length,
        count05: monthFilteredMay.filter(arr => arr.time === item.id).length,
        count06: monthFilteredJune.filter(arr => arr.time === item.id).length,
        count07: monthFilteredJuly.filter(arr => arr.time === item.id).length,
        count08: monthFilteredAugust.filter(arr => arr.time === item.id).length,
        count09: monthFilteredSeptember.filter(arr => arr.time === item.id).length,
        count10: monthFilteredOctober.filter(arr => arr.time === item.id).length,
        count11: monthFilteredNovember.filter(arr => arr.time === item.id).length,
        count12: monthFilteredDecember.filter(arr => arr.time === item.id).length,
        canceledTrainingJanuary: monthFilteredJanuary.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingFebruary: monthFilteredFebruary.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingMarch: monthFilteredMarch.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingApril: monthFilteredApril.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingMay: monthFilteredMay.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingJune: monthFilteredJune.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingJuly: monthFilteredJuly.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingAugust: monthFilteredAugust.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingSeptember: monthFilteredSeptember.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingOctober: monthFilteredOctober.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingNovember: monthFilteredNovember.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,
        canceledTrainingDecember: monthFilteredDecember.filter(arr => arr.time === item.id && arr.canceledTraining === true).length,

      }))
      .filter((item) => item.count > 0);
    
    // console.log(coachResults.map(item => item.value));

    // if (timeResults.length === 0) {
    //   return null;
    // }
    // if (dayResults.length === 0) {
    //   return null;
    // }
    // if (kindTraineeResults.length === 0) {
    //   return null;
    //   }
    // if (coachResults.length === 0) {
    //   return null;
    // };
    // if (timeResults.length === 0) {
    //   return null;
    // }
  // function calculatePercentage(itemCount, monthLength) {
  //   const percentage = (itemCount / monthLength) * 100;
  //   return percentage.toFixed(2);
  // }
    return (
      <>
        {coachResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Тренер</AllResults>
                <AllResultsUsers>Січень</AllResultsUsers>
                <AllResultsUsers>Лютий</AllResultsUsers>
                <AllResultsUsers>Березень</AllResultsUsers>
                <AllResultsUsers>Квітень</AllResultsUsers>
                <AllResultsUsers>Травень</AllResultsUsers>
                <AllResultsUsers>Червень</AllResultsUsers>
                <AllResultsUsers>Липень</AllResultsUsers>
                <AllResultsUsers>Серпень</AllResultsUsers>
                <AllResultsUsers>Вересень</AllResultsUsers>
                <AllResultsUsers>Жовтень</AllResultsUsers>
                <AllResultsUsers>Листопад</AllResultsUsers>
                <AllResultsUsers>Грудень</AllResultsUsers>
              </div>
              {coachResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value}</KindTraineeRes>
                  <KindTraineeUsers>
                    {item.count01 ? item.count01 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count02 ? item.count02 : '0'}({item.canceledTrainingFebruary ? item.canceledTrainingFebruary : '0'})
                    {item.count03 ? item.count03 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count04 ? item.count04 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count05 ? item.count05 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count06 ? item.count06 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count07 ? item.count07 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count08 ? item.count08 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count09 ? item.count09 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count10 ? item.count10 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count11 ? item.count11 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                    {item.count12 ? item.count12 : '0'}({item.canceledTrainingJanuary ? item.canceledTrainingJanuary : '0'})
                  </KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFilteredJanuary.length}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {kindTraineeResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Вид тренування </AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
              </div>
              {kindTraineeResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>
                    {item.count ? item.count : '0'}({item.canceledTraining ? item.canceledTraining : '0'})
                  </KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFilteredJanuary.length}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {dayResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Вид тренування </AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
              </div>
              {dayResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>
                    {item.count ? item.count : '0'}({item.canceledTraining ? item.canceledTraining : '0'})
                  </KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFilteredJanuary.length}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {timeResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Час</AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
              </div>
              {timeResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>
                    {item.count ? item.count : '0'}({item.canceledTraining ? item.canceledTraining : '0'})
                  </KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFilteredJanuary.length}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
      </>
    );
  };

  return (
    <AnalysisStyled>
      <select name="choose-month" id="choose-month" onChange={handleChooseMonth} style={{backgroundColor: 'inherit', border: 'none'}}>
        {month.map((item) => (
          <option value={item.label} key={item.id}>{item.translate}</option>
        ))}
      </select>
      <SortingAnalysis />
      {/* {showModal ? <Modal closeModal={handleCloseModal} data={coachInfoTrainings} info={coachInfo} month={getMonth} times={time} /> : null} */}
    </AnalysisStyled>
  );
}

export default Simile;