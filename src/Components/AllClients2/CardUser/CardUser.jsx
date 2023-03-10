import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
      WrapperCardUser,
      ListShown,
      ListName,
      WrapperUserInfo,
      BlockCardUser,
      ShowAllBTN
} from './CardUser.styled';

const CardUser = ({ handleOpenModalCardUser, userData }) => {
      return (
      <WrapperCardUser>
            <BlockCardUser>
                  <ListShown>
                        <ListName>Прізвище та ім'я</ListName>
                        <ListName>Тренування</ListName>
                        <ListName>Дата</ListName>
                        <ListName>Відвідування (відміна)</ListName>
                  </ListShown>
                  <div style={{display: 'flex', flexDirection: 'row'}}> 
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p style={{width: '100px'}}>{info.name}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.kind_trainee}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.date.slice(0,10)}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.visitTrainee ? <span>Так ({info.cacanceledTraining ? <span>Так</span> : <span>Ні</span>})</span> : <span>Ні ({info.cacanceledTraining ? <span>Так</span> : <span>Ні</span>})</span>}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  </div>
            <button onClick={handleOpenModalCardUser}>Закрити</button>     
            </BlockCardUser>
      </WrapperCardUser>
      )
};

export default CardUser;