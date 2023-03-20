import { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import moment from "moment/moment";
import { clientAPI } from "service/axios.config";
import {
  WrapperModal,
  Modal,
  ChooseTicket,
  BTN
 } from "./AddSeasonTicket.styled";

const AddSeasonTicket = ({item, getUserSeasonTicketID, handleOpenModal}) => {
  const [userSeasonTicket, setUserSeasonTicket] =useState('');
  const [seasonTicketID, setSeasonTicketID] =useState('');
  const [seasonTicketNumberValue, setSeasonTicketNumberValue] =useState('');
  const [seasonTicketPrice, setSeasonTicketPrice] =useState('');
  const [seasonTicketRemainder, setSeasonTicketRemainder] =useState('');
  const [submitAction, setSubmitAction] = useState({
    _id: '',
    seasonTickets: {
      id: '',
      dateOfBuying: '',
      limitOfTrainnings: '',
      remainderOfTrainnings: '',
      price: '',
      label: ''
    }
  })
  // console.log(item)
  const checkSeasonTicket = [
    {id: '0', label: '-', numberOfTrainnings: '0', price: '0'},
    {id: '6', label: '6', numberOfTrainnings: '6', price: '1100'},
    {id: '8', label: '8', numberOfTrainnings: '8', price: '1400'},
    {id: '12', label: '12', numberOfTrainnings: '12', price: '1800'},
    {id: '24', label: 'Сімейний', numberOfTrainnings: '24', price: '4000'},
    {id: '1000', label: 'Безлімітний', numberOfTrainnings: '1000', price: '6000'},
  ]

  const checkRemainderSeasonTicket = [
    {id: '0', label: '-'},
    {id: '1', label: '1'},
    {id: '2', label: '2'},
    {id: '3', label: '3'},
    {id: '4', label: '4'},
    {id: '5', label: '5'},
    {id: '6', label: '6'},
    {id: '7', label: '7'},
    {id: '8', label: '8'},
    {id: '9', label: '9'},
    {id: '10', label: '10'},
    {id: '11', label: '11'},
    {id: '12', label: '12'},
    {id: '13', label: '13'},
    {id: '14', label: '14'},
    {id: '15', label: '15'},
  ]

  useEffect(() => {
    const remainder = seasonTicketRemainder !== "" ? seasonTicketRemainder : seasonTicketNumberValue;
    setSubmitAction({
      _id: item._id,
      seasonTickets: {
        id: seasonTicketID,
        dateOfBuying: moment().format(''),
        limitOfTrainnings: seasonTicketNumberValue,
        remainderOfTrainnings: remainder,
        price: seasonTicketPrice,
        label: userSeasonTicket
      }
    })
  }, [item, userSeasonTicket, seasonTicketID, seasonTicketNumberValue, seasonTicketPrice, seasonTicketRemainder]);

  const HandleSubmit = (e) => {
    e.preventDefault();
      // const { id, day_translate, info } = submitAction;
      // const  = info.day;
    clientAPI.sendSeasonTicket(submitAction);
      // clientAPI.sendTgRecord({id, day_translate, clientName, kind_trainee, time, date, instaNickName});
      // new Promise(resolve => setTimeout(resolve, 500));
      // alert(JSON.stringify(submitAction, null, 2));
    return;
  };

  const chooseHandle = (e) =>{
    const ticket = e.target.value;
    if(ticket === '0'){
      return([
        setUserSeasonTicket(checkSeasonTicket[0].label),
        setSeasonTicketID(checkSeasonTicket[0].id),
        setSeasonTicketNumberValue(checkSeasonTicket[0].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[0].price),
      ]);
    }
    if(ticket === '6'){
      return([
        setUserSeasonTicket(checkSeasonTicket[1].label),
        setSeasonTicketID(checkSeasonTicket[1].id),
        setSeasonTicketNumberValue(checkSeasonTicket[1].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[1].price),
      ]);
    };
    if(ticket === '8'){
      return([
        setUserSeasonTicket(checkSeasonTicket[2].label),
        setSeasonTicketID(checkSeasonTicket[2].id),
        setSeasonTicketNumberValue(checkSeasonTicket[2].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[2].price),
      ]);
    };
    if(ticket === '12'){
      return([
        setUserSeasonTicket(checkSeasonTicket[3].label),
        setSeasonTicketID(checkSeasonTicket[3].id),
        setSeasonTicketNumberValue(checkSeasonTicket[3].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[3].price),
      ]);
    };
    if(ticket === '24'){
      return([
        setUserSeasonTicket(checkSeasonTicket[4].label),
        setSeasonTicketID(checkSeasonTicket[4].id),
        setSeasonTicketNumberValue(checkSeasonTicket[4].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[4].price),
      ]);
    };
    if(ticket === '1000'){
      return([
        setUserSeasonTicket(checkSeasonTicket[5].label),
        setSeasonTicketID(checkSeasonTicket[5].id),
        setSeasonTicketNumberValue(checkSeasonTicket[5].numberOfTrainnings),
        setSeasonTicketPrice(checkSeasonTicket[5].price),
      ]);
    }    
  }

  const chooseRemainderTrainings = (e) => {
    const remainder = e.target.value;
    return(setSeasonTicketRemainder(remainder))

  }
  if(getUserSeasonTicketID === item._id){
    return(
      <WrapperModal>
        <Modal>
          <ChooseTicket name="check-season-ticket" id="check-season-ticket" onChange={chooseHandle}>
            {checkSeasonTicket.map((check)=>(
              <option value={check.id} key={check.id}>
                {check.label}, ціна {check.price} грн.
              </option>
            ))}
          </ChooseTicket>
          <ChooseTicket name="check-season-ticket-remainder" id="check-season-ticket-remainder" onChange={chooseRemainderTrainings}>
            {checkRemainderSeasonTicket.map((check)=>(
              <option value={check.id} key={check.id}>
                {check.label}
              </option>
            ))}
          </ChooseTicket>
            <BTN type="submit" onClick={HandleSubmit}><FcCheckmark size={12}/></BTN>
            <BTN onClick={handleOpenModal}><IoIosClose size={18} style={{color: 'red', size: '22px'}}/></BTN>
        </Modal>
      </WrapperModal>
    )
  }
  return (
    null
  )
};

export default AddSeasonTicket;