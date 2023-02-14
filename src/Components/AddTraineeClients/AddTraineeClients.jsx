import AddClients from "./AddClients/AddClients"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { scheduleOperations } from '../../redux/app/operations';
// import ChooseCoach from 'Components/ChooseCoach/ChooseCoach';
import { clientAPI } from 'service/axios.config';

const AddTraineeClients = () => {
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
        setKindTrainee(result);
      }
    );

  }, [setKindTrainee]);
  return (
    <>
      <AddClients allCoach={allCoach} kindTrainee={kindTrainee} />
    </>
  )
};

export default AddTraineeClients;