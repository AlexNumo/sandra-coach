import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { Formik, Field } from "formik";
import OptionsClick from "Components/OptionsClick/OptionsClick";
// import * as Yup from "yup";
// import { ERROR } from "./AddInfo.styled";

const AddInfo = () => {
  const [allCoach, setAllCoach] = useState([]);
  const [allClient, setAllClient] = useState([]);
  const options = [
    { id: '-', value: '-', text: '-' },
    { id: 'None', value: '-', text: 'Вільно' },
    { id: "kangoo-jumps", value: "Kangoo jumps", text: 'Kangoo jumps' },
    { id: "sky-jumping", value: "Sky jumping", text: 'Sky jumping' },
    { id: "stretching", value: "Stretching", text: 'Stretching' },
    { id: "trx", value: "TRX", text: 'TRX' },
    { id: "health-back", value: "Здорова спина", text: 'Здорова спина' },
    { id: "tabata", value: "Tabata", text: 'Tabata' },
    { id: "high-heels", value: "High heels", text: 'High heels' },
    { id: "tribal", value: "Tribal fusion", text: 'Tribal fusion' },
    { id: "twerk", value: "Twerk", text: 'Twerk' },
    { id: "body-balet", value: "Боди балет", text: 'Боди балет' },
    { id: "sky-jumping-child", value: "Sky child", text: 'Sky child' },
    { id: "kangoo-jumps-child-10", value: "Kangoo діти (6-10)", text: 'Kangoo діти (6-10)' },
    { id: "kangoo-jumps-child-14", value: "Kangoo діти (10-14)", text: 'Kangoo діти (10-14)' },
    { id: "yoga", value: "Йога", text: 'Йога' },
    { id: "functional", value: "Functional", text: 'Functional' },
    { id: "metabolick-workout", value: "Metabolick workout", text: 'Metabolick workout' },
  ];

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
    <div>
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
          <select
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
              {option.text}
            </option>
          ))}
          </select>
          <label htmlFor="info" style={{ display: "block" }}>
              Оберіть клієнтів
          </label>
          <select
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
              <button type="submit" disabled={isSubmitting}>
                Додати тренера
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  )
}

export default AddInfo;