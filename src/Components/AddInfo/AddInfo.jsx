import { Formik } from "formik";
import {clientAPI} from '../../service/axios.config';
// import * as Yup from "yup";

const InfoCoach = () => {
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
  return (
    <>
      <h1>Info of coach and clients</h1>
    <Formik
        initialValues={{
          name_Coach: "",
          date: "",
          kind_trainee: "",
          how_many_people: "",
        }}
        onSubmit={async values => {
          await clientAPI.addNewCoach(values);
        // await new Promise(resolve => setTimeout(resolve, 500));
        // alert(JSON.stringify(values, null, 2));
      }}
      // validationSchema={Yup.object().shape({
      //   email: Yup.string()
      //     .email()
      //     .required("Required")
      // })}
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
            <label htmlFor="date" style={{ display: "block" }}>
              Оберіть дату
            </label>
            <input
              id="date"
              placeholder="Введіть дату тренування"
              type="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.date && touched.date
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.date && touched.date && (
              <div className="input-feedback">{errors.date}</div>
            )}
            <label htmlFor="kind_trainee" style={{ display: "block" }}>
              Оберіть вид тренування
            </label>
            {/* <input
              id="kind_trainee"
              placeholder="Оберіть вид тренування"
              type="text"
              value={values.kind_trainee}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.kind_trainee && touched.kind_trainee
                  ? "text-input error"
                  : "text-input"
              }
            /> */}
            <select
              id="kind_trainee"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.kind_trainee}
              className={
                errors.kind_trainee && touched.kind_trainee
                  ? "text-input error"
                  : "text-input"
              }
            >
                {options.map(option => (
                  <option
                    key={option.id}
                    id={option.id}
                    value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            {errors.kind_trainee && touched.kind_trainee && (
              <div className="input-feedback">{errors.kind_trainee}</div>
            )}
            <label htmlFor="how_many_people" style={{ display: "block" }}>
              Скільки чоловік було на тренуванні, без тренера
            </label>
            <input
              id="how_many_people"
              placeholder="Введіть чисельність"
              type="how_many_people"
              value={values.how_many_people}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.how_many_people && touched.how_many_people
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.how_many_people && touched.how_many_people && (
              <div className="input-feedback">{errors.how_many_people}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
    </>
  )
};

export default InfoCoach;