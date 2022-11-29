import { Formik } from "formik";
import { useEffect, useState } from "react";
import { clientAPI } from '../../service/axios.config';
import { useDispatch } from "react-redux";
import { scheduleOperations } from '../../redux/app/operations';
import InstagramIcon from '../../icons/instagram.svg';
import PhoneIcon from '../../icons/phone.svg';
import {
  Wrapper,
  BTNSubmit,
  // ERROR,
  CoachWrapper,
  LinkStyle,
  ImageIcon,
  BTN
} from './AddCoach.styled';
// import * as Yup from "yup";

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

  // const CoachSchema = Yup.object().shape({
  //   name_Coach: Yup.string()
  //     .min(2, <ERROR>Введіть більше символів</ERROR>)
  //     .max(50, <ERROR>Введіть меншк символів</ERROR>)
  //     .required(<ERROR>Обовязкове поле</ERROR>),
  //   tel: Yup.string()
  //     .required(<ERROR>Введіть номер телефону</ERROR>)
  // });

  const DeleteCoach = (e) => {
    console.log(e.target.value);
    clientAPI.deleteCoach(e.target.value);
  };

  const InstagramLink = ({ coach }) => {
    if (coach.instagram !== undefined) {
      return (
        <>
          <p>Соціальні мережі:</p>
          <LinkStyle href={coach.instagram}>
            <ImageIcon src={InstagramIcon} alt="InstagramIcon" />
          </LinkStyle>
          <LinkStyle href="tel:{coach.instagram}">
            
          </LinkStyle>
        </>
      )
    }
    return (
      <>
      <p>Соціальні мережі: ПУСТО</p>
      </>
    );
  }
    const PhoneLink = ({ coach }) => {
    if (coach.tel !== undefined) {
      return (
        <>
          <LinkStyle href="tel:{coach.instagram}">
            <ImageIcon src={PhoneIcon} alt="PhoneIcon" />
            {coach.tel}
          </LinkStyle>
        </>
      )
    }
    return (
      <>
      <p>Телефон: відсутній</p>
      </>
    );
  }
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name_Coach: "",
          tel: "",
          instagram: "",
        }}
        // validationSchema={CoachSchema}
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
              Номер телефону
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
            <label htmlFor="instagram" style={{ display: "block" }}>
              Посилання на instagram
            </label>
            <input
              id="instagram"
              placeholder="Введіть посилання"
              type="text"
              value={values.instagram}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.instagram && touched.instagram
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.instagram && touched.instagram && (
              <div className="input-feedback">{errors.instagram}</div>
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
          <PhoneLink coach={coach} />
          <InstagramLink coach={coach} />
          <BTN
            value={coach.name_Coach}
            onClick={DeleteCoach}>Видалити тренера
          </BTN>
        </CoachWrapper>
      ))}
    </Wrapper>
  )
};

export default AddCoach;