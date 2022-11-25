import { useState, useEffect } from "react";
import { clientAPI } from "service/axios.config";
import {
  WrapperResult
} from './Filter.styled';

const Filter = () => {
  const [allTrainee, setAllTrainee] = useState([]);
  const [filterDate, setFilterDate] = useState();
  const [resultFilter, setResultFilter] = useState([]);

  useEffect(() => {
    clientAPI.getAllTrainee().then(
      (result) => {
        setAllTrainee(result);
      }
    );
    
  }, [setAllTrainee]);
  
  const HandleFilter = (e) => {
    setResultFilter(allTrainee.filter(items => items.info.some(item => item.date === e.target.value)))
    setFilterDate(e.target.value);
  };

  const ChekingDate = ({ info, trainee }) => {
    if (info.date === filterDate) {
      return (
        <WrapperResult>
          {/* <p>{info.date}</p> */}
          <p>Ім'я тренера: <span>{trainee.name_Coach}</span> </p>
          <p>Клієнти: <span>{info.client.join(', ')}</span></p>
          <p>Кількість клієнтів: <span>{info.client.length}</span></p>
        </WrapperResult>
      )
    };
    return null;
  };

  // console.log("allTrainee: ", allTrainee);
  // console.log("resultFilter: ", resultFilter);
  // console.log(allTrainee.filter(items => items.info.some(item => item.date === filter)))
  // console.log("test: ", test);


  return (
    <div>
      <input type="date" onChange={HandleFilter} />
      <h2>{ filterDate }</h2>
      {resultFilter.map(trainee => (
        <div
          key={trainee._id}
        >
          {trainee.info.map(info => (
            <div
              key={info._id}
            >
              {/* {info.map(date => ( */}
                <div>
                <ChekingDate info={info} trainee={trainee } />
                </div>
                {/* ))} */}
            </div>
          )
          )}
        </div>))
      }
    </div>
  )
}

export default Filter;