import { useState, useEffect } from "react";
import { clientAPI } from "service/axios.config";

const Filter = () => {
  const [allTrainee, setAllTrainee] = useState([]);
  const [filter, setFilter] = useState();
  const [test, setTest] = useState([]);

  useEffect(() => {
    clientAPI.getAllTrainee().then(
      (result) => {
        setAllTrainee(result);
      }
    );
  }, [setAllTrainee]);
  
  const HandleFilter = (e) => {
    setFilter(e.target.value);
  }
  
  console.log("allTrainee: ", allTrainee);
  console.log("test: ", test);


  return (
    <div>
      <input type="date" onChange={HandleFilter} />
      {allTrainee.map(trainee => (
        <div
          key={trainee._id}
        >
          {trainee.info.map(info => (
            <div
              key={info._id}
            >
              <div>
                <p>Дата тренування: </p>
                <span>{info.date}</span>
              </div>
            </div>
          )
          )}
        </div>))
      };
    </div>
  )
}

export default Filter;