const ChooseCoach = ({handleChange, handleBlur, values, allCoach}) => {
  const GetResult = () => {
    if (allCoach === []) {
      return null;
    }
    return (
    <>
      {allCoach.map(coach => (
      <option
        key={coach.name_Coach}
        id={coach.name_Coach}
        value={coach.name_Coach}
      >
        {coach.name_Coach}
      </option>
      ))}
      </>
    )
  }

  return (
    <>
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
        // style={{ width: "150px" }}
        id="name_Coach"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name_Coach}
        className="select"
      >
        <GetResult/>
      </select>
    </>
  )
};

export default ChooseCoach;