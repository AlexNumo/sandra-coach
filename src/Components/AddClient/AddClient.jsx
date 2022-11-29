import { Formik } from "formik";
import { useEffect, useState } from "react";
import { clientAPI } from '../../service/axios.config';
import {
  Wrapper,
  BTNSubmit,
  ERROR,
  CleintWrapper
} from './AddClient.styled';
import * as Yup from "yup";

const AddClient = () => {
  const [allClient, setAllClient] = useState([]);
  useEffect(() => {
    clientAPI.getAllClient().then(
      (result) => {
        setAllClient(result)
      }
    );
  }, [setAllClient]);

  const CoachSchema = Yup.object().shape({
    name_client: Yup.string()
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
          name_client: "",
          tel: "",
        }}
        validationSchema={CoachSchema}
        onSubmit={async values => {
          await clientAPI.addClient(values);
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
            <label htmlFor="name_client" style={{ display: "block" }}>
              Ім'я клієнта
            </label>
            <input
              id="name_client"
              placeholder="Введіть ім'я клієнта"
              type="text"
              value={values.name_client}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name_client && touched.name_client
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name_client && touched.name_client && (
              <div className="input-feedback">{errors.name_client}</div>
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
              Додати клієнта
            </BTNSubmit>
          </form>
        );
      }}
      </Formik>
      {allClient.map(client => (
        <CleintWrapper
          key={client.name_client}
          id={client.name_client}
        >
          <h3>
          Ім'я: {client.name_client}
          </h3>
          <p>
          Телефон: {client.tel}
          </p>
        </CleintWrapper>
      ))}
    </Wrapper>
  )
};

export default AddClient;