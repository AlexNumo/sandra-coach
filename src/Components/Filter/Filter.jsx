import { useState, useEffect } from "react";
import { clientAPI } from "service/axios.config";

const Filter = () => {

  const [allTrainee, setAllTrainee] = useState([])
    useEffect(() => {
    clientAPI.getAllTrainee().then(
      (result) => {
        setAllTrainee(result)
      }
    );
    }, [setAllTrainee]);
  
  console.log(allTrainee);
  return (
    <div>
      <h2>HI</h2>
    </div>
  )
};

export default Filter;