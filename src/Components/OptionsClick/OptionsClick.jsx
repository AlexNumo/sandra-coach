import {
  TableSize,
  SubmitBTN
} from './OptionsClick.styled';
import { Formik } from "formik";
import ChooseCoach from 'Components/ChooseCoach/ChooseCoach';
import { clientAPI } from '../../service/axios.config';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { scheduleOperations } from '../../redux/app/operations';

const OptionsClick = () => {
  const [allCoach, setAllCoach] = useState([]);
  const [kindTrainee, setKindTrainee] = useState([]);
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

    useEffect(() => {
    clientAPI.getKindTraineeAll().then(
      (result) => {
        setKindTrainee(result)
      }
    );

  }, [setKindTrainee]);

  const weekDaysTime = [
    { id: 'monday' },
    { id: 'tuesday' },
    { id: 'wednesday' },
    { id: 'thursday' },
    { id: 'friday' },
    { id: 'saturday' },
    { id: 'sunday' },
  ];
  const Times = [
    { id: '08:00', text: '8:00' },
    { id: '09:00', text: '9:00' },
    { id: '10:00', text: '10:00' },
    { id: '11:00', text: '11:00' },
    { id: '12:00', text: '12:00' },
    { id: '13:00', text: '13:00' },
    { id: '14:00', text: '14:00' },
    { id: '15:00', text: '15:00' },
    { id: '16:00', text: '16:00' },
    { id: '17:00', text: '17:00' },
    { id: '18:00', text: '18:00' },
    { id: '19:00', text: '19:00' },
    { id: '20:00', text: '20:00' },
  ];
  return (
    <>
      {Times.map(time => (
        <tr
          key={time.id}
          id={time.id}
          className='time'
        >
          <td id={time.id}>{time.text}</td>
          {weekDaysTime.map(weekDay => (
            <TableSize
              key={weekDay.id}
              id={weekDay.id}
              className={weekDay.id}
            >
              <Formik
                initialValues={{
                  id: weekDay.id + time.id,
                  day: weekDay.id,
                  time: time.id,
                  kind_trainee: "",
                  name_Coach: ""
                }}
                onSubmit={async values => {
                  await clientAPI.sendData(values);
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
                      onSubmit={handleSubmit}
                      className="form-size"
                    >
                      <select
                        id="kind_trainee"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.weekDay}
                        className="select"
                      >
                        {kindTrainee.map(option => (
                          <option
                            key={option.id}
                            id={option.id}
                            value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChooseCoach
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        allCoach={allCoach}
                      />
                      <SubmitBTN type="submit" disabled={isSubmitting}>
                        Змінити
                      </SubmitBTN>
                    </form>
                  );
                }}
              </Formik>
            </TableSize>
          ))}
        </tr>
      ))}
    </>
  )
};

export default OptionsClick;