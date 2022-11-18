import { clientAPI } from "service/axios.config";
import { useEffect, useState } from "react";
import {
  Wrapper,
  ListCoach,
  Name,
  DateTable,
  NameList,
  NameTrainee
} from './ViewTrainee.styled';

const ViewTrainee = () => {
  const [allTrainee, setAllTrainee] = useState([])
    useEffect(() => {
    clientAPI.getAllTrainee().then(
      (result) => {
        setAllTrainee(result)
      }
    );
    }, [setAllTrainee]);
  return (
    <Wrapper>
      {allTrainee.map(trainee => (
        <ListCoach
        key={trainee._id}
        >
          <Name>
            <p>Ім'я тренера:</p>
            <NameList>{trainee.name_Coach}</NameList>
          </Name>
          {trainee.info.map(info => (
            <div
              key={info._id}
            >
              <DateTable>
              <Name>
              <p>Дата тренування: </p>
                <NameList>{info.date}</NameList>
              </Name>
              <Name>
              <p>Вид: </p>
              <NameList>{info.kind_trainee}</NameList></Name>
              {info.client.map(client => (
                <div
                  key={client}>
                  <NameTrainee>Клієнт: <NameList>{client}</NameList></NameTrainee>
                </div>
              ))}
              </DateTable>
            </div>
          ))}
        </ListCoach>
      ))}
    </Wrapper>
  )
}

export default ViewTrainee;