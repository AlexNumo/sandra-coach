import { Formik } from "formik";
import { clientAPI } from '../../service/axios.config';
import {
  Wrapper,
  BTNSubmit,
  ERROR
} from './AddCoach.styled';
import * as Yup from "yup";

const AddCoach = () => {
  const CoachSchema = Yup.object().shape({
    name_Coach: Yup.string()
      .min(2, <ERROR>Введіть більше символів</ERROR>)
      .max(50, <ERROR>Введіть меншк символів</ERROR>)
      .required(<ERROR>Обовязкове поле</ERROR>),
    tel: Yup.string()
      .required(<ERROR>Введіть номер телефону</ERROR>)
  });
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
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
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
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Збросити
            </button>
            <BTNSubmit type="submit" disabled={isSubmitting}>
              Додати тренера
            </BTNSubmit>
          </form>
        );
      }}
    </Formik>
    </Wrapper>
  )
};

export default AddCoach;