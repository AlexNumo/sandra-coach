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
  const [seasonTicketNumberValue, setSeasonTicketNumberValue] =useState('');
  const [seasonTicketPrice, setSeasonTicketPrice] =useState('');
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
  const CheckSeasonTicket = [
    {id: '0', label: '-', numberOfTrainnings: '0', price: '0'},
    {id: '6', label: '6', numberOfTrainnings: '6', price: '1100'},
    {id: '8', label: '8', numberOfTrainnings: '8', price: '1400'},
    {id: '12', label: '12', numberOfTrainnings: '12', price: '1800'},
    {id: '24', label: 'Сімейний', numberOfTrainnings: '24', price: '4000'},
    {id: '1000', label: 'Безлімітний', numberOfTrainnings: '1000', price: '6000'},
  ]
  useEffect(() => {
    setSubmitAction({
      _id: item._id,
      seasonTickets: {
        id: seasonTicketID,
        dateOfBuying: moment().format(''),
        limitOfTrainnings: seasonTicketNumberValue,
        remainderOfTrainnings: seasonTicketNumberValue,
        price: seasonTicketPrice,
        label: userSeasonTicket
      }
    })
  }, [item, userSeasonTicket, seasonTicketID, seasonTicketNumberValue, seasonTicketPrice]);

  const HandleSubmit = (e) => {
    e.preventDefault();
      // const { id, day_translate, info } = submitAction;
      // const  = info.day;
      clientAPI.sendSeasonTicket( submitAction )
      // clientAPI.sendTgRecord({id, day_translate, clientName, kind_trainee, time, date, instaNickName});
      // new Promise(resolve => setTimeout(resolve, 500));
      // alert(JSON.stringify(submitAction, null, 2));
    return;
  };

  const ChooseHandle = (e) =>{
    const ticket = e.target.value;
    if(ticket === '0'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[0].label),
        setSeasonTicketID(CheckSeasonTicket[0].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[0].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[0].price),
      ]);
    }
    if(ticket === '6'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[1].label),
        setSeasonTicketID(CheckSeasonTicket[1].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[1].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[1].price),
      ]);
    };
    if(ticket === '8'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[2].label),
        setSeasonTicketID(CheckSeasonTicket[2].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[2].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[2].price),
      ]);
    };
    if(ticket === '12'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[3].label),
        setSeasonTicketID(CheckSeasonTicket[3].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[3].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[3].price),
      ]);
    };
    if(ticket === '24'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[4].label),
        setSeasonTicketID(CheckSeasonTicket[4].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[4].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[4].price),
      ]);
    };
    if(ticket === '1000'){
      return([
        setUserSeasonTicket(CheckSeasonTicket[5].label),
        setSeasonTicketID(CheckSeasonTicket[5].id),
        setSeasonTicketNumberValue(CheckSeasonTicket[5].numberOfTrainnings),
        setSeasonTicketPrice(CheckSeasonTicket[5].price),
      ]);
    }    
  }
  if(getUserSeasonTicketID === item._id){
    return(
      <WrapperModal>
        <Modal>
          <ChooseTicket name="check-season-ticket" id="check-season-ticket" onChange={ChooseHandle}>
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