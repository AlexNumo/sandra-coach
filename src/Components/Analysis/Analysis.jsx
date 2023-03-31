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
} from './Analysis.styled';
import Modal from 'Components/Modal/Modal';

export default function Analysis() {
  const [allTrainee, setAllTrainee] = useState([]);
  const [allCoach, setAllCoach] = useState([]);
  const [allKindTrainings, setAllKindTrainings] = useState([]);
  const [getMonth, setGetMonth] = useState(moment().add(0, 'days').format('').slice(5, 7));
  const [showModal, setShowModal] = useState(false);
  const [coachInfoTrainings, setCoachInfoTrainings] = useState('');
  const [coachInfo, setCoachInfo] = useState('');
  const monthFiltered = allTrainee.filter(arr => arr.date.slice(5, 7) === getMonth);
  const allCanceledTraining = monthFiltered.filter(arr => arr.canceledTraining === true).length;

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

  const handleChooseMonth = (e) => {
    setGetMonth(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false)
    setCoachInfoTrainings('');
  }

  const handleChooseCoach = (e) => {
    const idCoach = e.target.id
    const findCoach = allCoach.filter(arr => arr._id === idCoach);
    if (findCoach.length > 0) { // Перевірка на довжину масиву
      const findTrainingsCoach = monthFiltered.filter(arr => arr.coach === findCoach[0].name_Coach);
      setCoachInfoTrainings(findTrainingsCoach);
      setCoachInfo(findCoach);
      setShowModal(true);
    }
  }

  const SortingAnalysis = () => {
    if (getMonth.length === 0) {
      return null;
    }
    const coachResults = allCoach
      .map((item) => ({
        value: item.name_Coach,
        id: item._id,
        count: monthFiltered.filter(arr => arr.coach === item.name_Coach).length,
        canceledTraining: monthFiltered.filter(arr => arr.coach === item.name_Coach && arr.canceledTraining === true).length
      }))
      .filter((item) => item.count > 0);
    const kindTraineeResults = allKindTrainings
      .map((item) => ({
        value: item.value,
        count: monthFiltered.filter(arr => arr.kind_trainee === item.value).length,
        canceledTraining: monthFiltered.filter(arr => arr.kind_trainee === item.value && arr.canceledTraining === true).length
      }))
      .filter((item) => item.count > 0);
    const dayResults = day
      .map((item) => ({
        value: item.translate,
        day: item.id,
        count: monthFiltered.filter(arr => arr.day === item.id).length,
        canceledTraining: monthFiltered.filter(arr => arr.day === item.id && arr.canceledTraining === true).length
      }))
      .filter((item) => item.count > 0);
    const timeResults = time
      .map((item) => ({
        value: item.id,
        count: monthFiltered.filter(arr => arr.time === item.id).length,
        canceledTraining: monthFiltered.filter(arr => arr.time === item.id && arr.canceledTraining === true).length
      }))
      .filter((item) => item.count > 0);
    
    // console.log(coachResults.map(item => item.value));

    if (timeResults.length === 0) {
      return null;
    }
    if (dayResults.length === 0) {
      return null;
    }
    if (kindTraineeResults.length === 0) {
      return null;
      }
    if (coachResults.length === 0) {
      return null;
    };
    if (timeResults.length === 0) {
      return null;
    }
  function calculatePercentage(itemCount, monthLength) {
    const percentage = (itemCount / monthLength) * 100;
    return percentage.toFixed(2);
  }
    return (
      <>
        {coachResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Тренер</AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
                <AllResultsUsers>Відміна</AllResultsUsers>
              </div>
              {coachResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>
                    {item.count}
                    <InfoCoachBTN id={item.id} onClick={handleChooseCoach}>
                      <BiSearchAlt2 id={item.id} onClick={handleChooseCoach} size={10} />
                    </InfoCoachBTN>
                  </KindTraineeUsers>
                  <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFiltered.length}</AllResultsUsers>
                <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {kindTraineeResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Вид тренування </AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
                <AllResultsUsers>Відміна</AllResultsUsers>
                <AllResultsUsers>%</AllResultsUsers>
              </div>
              {kindTraineeResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>{item.count}</KindTraineeUsers>
                  <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
                  <KindTraineeUsers>{calculatePercentage(item.count, monthFiltered.length)}%</KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFiltered.length}</AllResultsUsers>
                <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
                <AllResultsUsers>{100}%</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {dayResults ?
          <>
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
                <AllResultsUsers>{monthFiltered.length}</AllResultsUsers>
                <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
              </div>
            </ResultsWrapper>
          </> : null}
        {timeResults ?
          <>
            <ResultsWrapper>
              <div>
                <AllResults>Час</AllResults>
                <AllResultsUsers>К-сть</AllResultsUsers>
                <AllResultsUsers>Відміна</AllResultsUsers>
              </div>
              {timeResults.map((item) => (
                <WrapperKindTrainee key={item.value}>
                  <KindTraineeRes>{item.value} </KindTraineeRes>
                  <KindTraineeUsers>{item.count}</KindTraineeUsers>
                  <KindTraineeUsers>{item.canceledTraining}</KindTraineeUsers>
                </WrapperKindTrainee>
              ))}
              <div>
                <AllResults>Всього: </AllResults>
                <AllResultsUsers>{monthFiltered.length}</AllResultsUsers>
                <AllResultsUsers>{allCanceledTraining}</AllResultsUsers>
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
      {showModal ? <Modal closeModal={handleCloseModal} data={coachInfoTrainings} info={coachInfo} month={getMonth} times={time} /> : null}
    </AnalysisStyled>
  );
}
