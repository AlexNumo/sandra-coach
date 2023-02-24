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

const AddSeasonTicket = ({item, getUserSeasonTicketID, HandleOpenModal}) => {
  const [userSeasonTicket, setUserSeasonTicket] =useState('');
  const [seasonTicketID, setSeasonTicketID] =useState('');
  const [submitAction, setSubmitAction] = useState({
    id: '',
    seasonTickets: {
      id: '',
      dateOfBuying: '',
      numberOfTrainnings: '',
      price: '',
      label: ''
    }
  })
  const CheckSeasonTicket = [
    {id: '0', label: '-', numberOfTrainnings: '0', price: '0'},
    {id: '6', label: '6', numberOfTrainnings: '6', price: '1000'},
    {id: '8', label: '8', numberOfTrainnings: '8', price: '1400'},
    {id: '12', label: '12', numberOfTrainnings: '12', price: '2000'},
    {id: '24', label: 'Сімейний', numberOfTrainnings: '24', price: '4000'},
    {id: '1000', label: 'Безлімітний', numberOfTrainnings: '1000', price: '6000'},
  ]
  useEffect(() => {
    setSubmitAction({
      id: item._id,
      seasonTickets: {
        id: '',
        dateOfBuying: moment().format(''),
        numberOfTrainnings: userSeasonTicket,
        price: '',
        label: ''
      }
    })
  }, [item, userSeasonTicket]);

  const HandleSubmit = (e) => {
    e.preventDefault();
      const { id, day_translate, info } = submitAction;
      // const  = info.day;
      // clientAPI.sendDataUsers({ id, day_translate, info }).then(setValidForm(false));
      // clientAPI.sendTgRecord({id, day_translate, clientName, kind_trainee, time, date, instaNickName});
      new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(submitAction, null, 2));
    return;
  };

  const TEST = (e) =>{
    const ticket = e.target.value
    if(ticket === '0'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[0.]),
        setSeasonTicketID('0'),
      ]);
    }
    
  }
  if(getUserSeasonTicketID === item._id){
    return(
      <WrapperModal>
        <Modal>
          {/* <input type="text" /> */}
          <ChooseTicket name="check-season-ticket" id="check-season-ticket" onChange={TEST}>
            {CheckSeasonTicket.map((check)=>(
              <option value={check.id} key={check.id}>
                {check.label}, ціна {check.price} грн.
              </option>
            ))}
          </ChooseTicket>
            <BTN type="submit" onClick={HandleSubmit}><FcCheckmark size={12}/></BTN>
            <BTN onClick={HandleOpenModal}><IoIosClose size={20} style={{color: 'red', size: '22px'}}/></BTN>
        </Modal>
      </WrapperModal>
    )
  }
  return (
    null
  )
};

export default AddSeasonTicket;