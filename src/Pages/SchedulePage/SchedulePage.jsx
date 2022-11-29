import Schedule from "Components/Schedule/Schedule";
import ScheduleGet from "Components/ScheduleGet/ScheduleGet";
import { Formik } from "formik";
import { clientAPI } from '../../service/axios.config';

const SchedulePage = () => {
  return (
    <div>
      <Schedule />
      <div
        style={{ marginTop: "15px" }}
      >
        <Formik
          initialValues={{
            id: "",
            value: "",
            label: ""
          }}
          onSubmit={async values => {
            await clientAPI.sendNewKindTrainee(values);
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
                <label
                  htmlFor="id"
                  id="id"
                >
                </label>
                <input
                  id="id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.id}
                  placeholder="ID"
                >
                </input>
                <label
                  htmlFor="value"
                  id="value"
                >
                </label>
                <input
                  id="value"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.value}
                  placeholder="value"
                >
                </input>
                <label
                  htmlFor="label"
                  id="label"
                >
                </label>
                <input
                  id="label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.label}
                  placeholder="label"
                >
                </input>
                <button type="submit" disabled={isSubmitting}>
                  Додати новий вид тренування
                </button>
              </form>
            );
          }}
              </Formik>
      </div>
      <ScheduleGet/>
    </div>
  )
};

export default SchedulePage;