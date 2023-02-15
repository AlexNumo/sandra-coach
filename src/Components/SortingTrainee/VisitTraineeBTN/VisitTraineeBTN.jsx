import { FcCheckmark } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { VisitBTN } from "./VisitTraineeBTN.styled";
import { clientAPI } from "service/axios.config";

const HandleVisitTraineeYesAPI = async (e) => {
  e.preventDefault(e);
  const send = { _id: e.target.id };
  const statusYES = {status: true};
  await clientAPI.sendVisitTrainee(send, statusYES);
};

const HandleVisitTraineeNoAPI = async (e) => {
  e.preventDefault(e);
  const send = { _id: e.target.id };
  const statusNO = {status: false};
  await clientAPI.sendVisitTrainee(send, statusNO);

}

const HandleVisitTraineeYES = ({ item }) => {
  return (
    <>
      <VisitBTN type="button" onClick={HandleVisitTraineeYesAPI} id={item._id}><FcCheckmark id={item._id}/></VisitBTN>
    </>
  )
};

  const HandleVisitTraineeNO = ({item}) => {
  return (
    <>
      <VisitBTN type="button" onClick={HandleVisitTraineeNoAPI} id={item._id}><IoIosClose style={{color: 'red'}} id={item._id}/></VisitBTN>
    </>
  )
};

export {
  HandleVisitTraineeNO, HandleVisitTraineeYES
}