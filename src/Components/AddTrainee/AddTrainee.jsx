import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { Formik } from "formik";
// import Select from 'react-select'
import {
  Wrapper,
  BTNSubmit,
} from './AddTrainee.styled';
// import OptionsClick from "Components/OptionsClick/OptionsClick";
// import * as Yup from "yup";
// import { ERROR } from "./AddInfo.styled";

const AddInfo = () => {
  const [allCoach, setAllCoach] = useState([]);
  const [allClient, setAllClient] = useState([]);
  const options = [
    { id: '-', value: '-', label: '-' },
    { id: 'None', value: '-', label: 'Вільно' },
    { id: "kangoo-jumps", value: "Kangoo jumps", label: 'Kangoo jumps' },
    { id: "sky-jumping", value: "Sky jumping", label: 'Sky jumping' },
    { id: "stretching", value: "Stretching", label: 'Stretching' },
    { id: "trx", value: "TRX", label: 'TRX' },
    { id: "health-back", value: "Здорова спина", label: 'Здорова спина' },
    { id: "tabata", value: "Tabata", label: 'Tabata' },
    { id: "high-heels", value: "High heels", label: 'High heels' },
    { id: "tribal", value: "Tribal fusion", label: 'Tribal fusion' },
    { id: "twerk", value: "Twerk", label: 'Twerk' },
    { id: "body-balet", value: "Боди балет", label: 'Боди балет' },
    { id: "sky-jumping-child", value: "Sky child", label: 'Sky child' },
    { id: "kangoo-jumps-child-10", value: "Kangoo діти (6-10)", label: 'Kangoo діти (6-10)' },
    { id: "kangoo-jumps-child-14", value: "Kangoo діти (10-14)", label: 'Kangoo діти (10-14)' },
    { id: "yoga", value: "Йога", label: 'Йога' },
    { id: "functional", value: "Functional", label: 'Functional' },
    { id: "metabolick-workout", value: "Metabolick workout", label: 'Metabolick workout' },
  ];

  // const options2 = allCoach.map(coach => (
  //   { value: coach.name_Coach, label: coach.name_Coach }
  // ))

  // console.log("options2: ", options2);
  // console.log("allCoach: ", allCoach);

//   const MyComponent = () => (
//   <Select options={options} />
// )

  useEffect(() => {
    clientAPI.getAllCoach().then(
      (result) => {
        setAllCoach(result)
      }
    );
    clientAPI.getAllClient().then(
      (result) => {
        setAllClient(result)
      }
    );

  }, [setAllCoach]);

  // const CoachSchema = Yup.object().shape({
  //   name_Coach: Yup.string()
  //     .min(2, <ERROR>Введіть більше символів</ERROR>)
  //     .max(50, <ERROR>Введіть меншк символів</ERROR>)
  //     .required(<ERROR>Обовязкове поле</ERROR>),
  //   tel: Yup.string()
  //     .required(<ERROR>Введіть номер телефону</ERROR>)
  // });
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name_Coach: "",
          info: {
            date: "",
            kind_trainee: "",
            client:{},
          },
        }}
        // validationSchema={CoachSchema}
        onSubmit={async values => {
          await clientAPI.addTrainee(values);
          // await new Promise(resolve => setTimeout(resolve, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
      {props => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
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
          <label htmlFor="info" style={{ display: "block" }}>
              Оберіть дату тренування
          </label>
          <input
            style={{ width: "150px" }}
            id="info.date"
            type="date"
            name="info.date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            />
          <label htmlFor="info" style={{ display: "block" }}>
              Оберіть вид тренування
          </label>
          <select
            style={{ width: "150px" }}
            name="info.kind_trainee"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.kind_trainee}
          >
          {options.map(option => (
            <option
              key={option.id}
              id={option.id}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
          </select>
          <label htmlFor="info" style={{ display: "block" }}>
              Оберіть клієнтів
          </label>
          <select
            style={{ width: "150px" }}
            multiple
            name="info.client"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.client}
          >
          {allClient.map(client => (
            <option
              key={client.name_client}
              id={client.name_client}
              value={client.name_client}
            >
              {client.name_client}
            </option>
          ))}
            </select>
              <BTNSubmit type="submit" disabled={isSubmitting}>
                Додати тренера
          </BTNSubmit>
          {/* <MyComponent/> */}
            </form>
          );
        }}
        </Formik>
    </Wrapper>
  )
}

export default AddInfo;