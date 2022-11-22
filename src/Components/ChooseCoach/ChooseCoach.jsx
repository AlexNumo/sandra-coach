import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
// import Select from 'react-select'

const ChooseCoach = ({handleChange, handleBlur, values}) => {

  const [allCoach, setAllCoach] = useState([]);
    
  useEffect(() => {
    clientAPI.getAllCoach().then(
      (result) => {
        setAllCoach(result)
      }
    );
  }, [setAllCoach]);
  return (
    <>
      <label style={{ display: "block" }}>
        Оберіть ім'я тренера
      </label>
      {/* <Select
            options={options2}
            id="name_Coach"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.assigned}
            // style={{ width: "150px !important"}}
          /> */}

      <select
        style={{ width: "150px" }}
        id="name_Coach"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name_Coach}
        className="select"
      >
        {allCoach.map(coach => (
          <option
            key={coach.name_Coach}
            id={coach.name_Coach}
            value={coach.name_Coach}
          >
            {coach.name_Coach}
          </option>
        ))}
      </select>
    </>
  )
};

export default ChooseCoach;