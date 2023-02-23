import { useEffect, useState } from "react";
import { clientAPI } from "service/axios.config";
import CardUser from "./CardUser/CardUser";
import {
  WrapperAllClients,
} from './AllClients.styled';

const AllClients = () => {
  const [allClients, setAllClients] = useState('');
  useEffect(() => {
    const getAllClients = async () => {
      const result = await clientAPI.getDataALLUsers();
      setAllClients(result);
    };
    if (allClients === '') {
      getAllClients();
    }
  },[allClients]);
  console.log(allClients)
  return (
    <>
      <WrapperAllClients>
        {allClients ? <CardUser allClients={allClients} /> : <></>}
      </WrapperAllClients>
    </>
  )
};

export default AllClients;