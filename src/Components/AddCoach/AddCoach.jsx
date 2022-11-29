import { Formik } from "formik";
import { useEffect, useState } from "react";
import { clientAPI } from '../../service/axios.config';
import { useDispatch } from "react-redux";
import { scheduleOperations } from '../../redux/app/operations';
import {
  Wrapper,
  BTNSubmit,
  ERROR,
  CoachWrapper
} from './AddCoach.styled';
import * as Yup from "yup";

const AddCoach = () => {
  const [allCoach, setAllCoach] = useState([]);
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
  }, [dispatch]);

  const CoachSchema = Yup.object().shape({
    name_Coach: Yup.string()
      .min(2, <ERROR>Введіть більше символів</ERROR>)
      .max(50, <ERROR>Введіть меншк символів</ERROR>)
      .required(<ERROR>Обовязкове поле</ERROR>),
    tel: Yup.string()
      .required(<ERROR>Введіть номер телефону</ERROR>)
  });

  const DeleteCoach = (e) => {
    console.log(e.target.value);
    clientAPI.deleteCoach(e.target.value);
  }
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name_Coach: "",
          tel: "",
        }}
        validationSchema={CoachSchema}
        onSubmit={async values => {
          await clientAPI.addCoach(values);
        // await new Promise(resolve => setTimeout(resolve, 500));
        // alert(JSON.stringify(values, null, 2));
      }}
      >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name_Coach" style={{ display: "block" }}>
              Ім'я тренера
            </label>
            <input
              id="name_Coach"
              placeholder="Введіть ім'я тренера"
              type="text"
              value={values.name_Coach}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name_Coach && touched.name_Coach
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name_Coach && touched.name_Coach && (
              <div className="input-feedback">{errors.name_Coach}</div>
            )}
            <label htmlFor="tel" style={{ display: "block" }}>
              Введіть номер телефону
            </label>
            <input
              id="tel"
              placeholder="098-105-82-40"
              type="text"
              value={values.tel}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.tel && touched.tel
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.tel && touched.tel && (
              <div className="input-feedback">{errors.tel}</div>
            )}
            <BTNSubmit type="submit" disabled={isSubmitting}>
              Додати тренера
            </BTNSubmit>
          </form>
        );
      }}
      </Formik>
      {allCoach.map(coach => (
        <CoachWrapper
          key={coach.name_Coach}
          id={coach.name_Coach}
        >
          <h3>
          Ім'я: {coach.name_Coach}
          </h3>
          <p>
          Телефон: {coach.tel}
          </p>
          <button
            value={coach.name_Coach}
            onClick={DeleteCoach}>Видалити тренера</button>
        </CoachWrapper>
      ))}
    </Wrapper>
  )
};

export default AddCoach;