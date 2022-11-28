import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import { Formik } from "formik";
import ChooseCoach from "Components/ChooseCoach/ChooseCoach";
import { useDispatch } from "react-redux";
import { scheduleOperations } from '../../redux/app/operations';
// import DatePicker  from 'react-date-picker';
import {
  Wrapper,
  BTNSubmit,
} from './AddTrainee.styled';
// import OptionsClick from "Components/OptionsClick/OptionsClick";
// import * as Yup from "yup";
// import { ERROR } from "./AddInfo.styled";

const AddInfo = () => {
  const [allClient, setAllClient] = useState([]);
  const [allCoach, setAllCoach] = useState([]);
  // const [startDate, setStartDate] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCoach = () => {
      dispatch(scheduleOperations.actionGetAllCoach())
        .then((result) => {
          return (setAllCoach(result.payload))
        })
        .catch(err => {
          console.log(err);
        });
    };
    getAllCoach();
  });
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

    const Times = [
    { id: '0800', text: '8:00' },
    { id: '0900', text: '9:00' },
    { id: '1000', text: '10:00' },
    { id: '1100', text: '11:00' },
    { id: '1200', text: '12:00' },
    { id: '1300', text: '13:00' },
    { id: '1400', text: '14:00' },
    { id: '1500', text: '15:00' },
    { id: '1600', text: '16:00' },
    { id: '1700', text: '17:00' },
    { id: '1800', text: '18:00' },
    { id: '1900', text: '19:00' },
    { id: '2000', text: '20:00' },
  ];

  useEffect(() => {
    clientAPI.getAllClient().then(
      (result) => {
        setAllClient(result)
      }
    );

  }, [setAllClient]);

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name_Coach: "",
          info: {
            date: "",
            time: "",
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
          <form
            style={{ display: "block" }}
            onSubmit={handleSubmit}
          >
            <ChooseCoach
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              allCoach={allCoach}
            />
            <label
              htmlFor="info"
              id="date"
              style={{ display: "block", marginTop: "15px" }}
            >
                Оберіть дату тренування
            </label>
            <input
              style={{ width: "150px", height: "20px"}}
              id="date"
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
                Оберіть час
            </label>
            <select
              style={{ width: "150px", display: "block" }}
              name="info.time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
            >
            {Times.map(time => (
              <option
                key={time.id}
                id={time.id}
                value={time.id}
              >
                {time.text}
              </option>
            ))}
              </select>
            <label htmlFor="info" style={{ display: "block" }}>
                Оберіть клієнтів
            </label>
            <select
              style={{ width: "150px", display: "block" }}
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
              Додати тренування
            </BTNSubmit>
            </form>
          );
        }}
            </Formik>
    </Wrapper>
  )
}

export default AddInfo;