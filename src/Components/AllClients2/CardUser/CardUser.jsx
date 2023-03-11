// import { useState } from "react";
// import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import {
      WrapperCardUser,
      ListShown,
      ListName,
      WrapperUserInfo,
      BlockCardUser,
      // ShowAllBTN
} from './CardUser.styled';

const CardUser = ({ handleOpenModalCardUser, userData }) => {
      const URLInsta = ({instaNickName}) => {
            if (instaNickName === undefined || '') {
                  return (null);
            }
                  const restructureNickname = instaNickName.substring(1);
                  const linkInsta = `https://www.instagram.com/${restructureNickname}/`
                  return (
                  <>
                  <a href={linkInsta} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>{restructureNickname}</a>
                  </>
                  );
            };
      return (
      <WrapperCardUser>
            <BlockCardUser>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <ListShown>
                  <ListName>Прізвище та ім'я</ListName>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p style={{width: '100px'}}>{info.name}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  </ListShown>
                  <ListShown>
                  <ListName>Тренування</ListName>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.kind_trainee}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  </ListShown>
                  <ListShown>
                  <ListName>Дата (час)</ListName>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.date.slice(0,10)} <span>({info.time})</span></p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                  </ListShown>
                  <ListShown>
                  <ListName>Відвідування (відміна)</ListName>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <p>{info.visitTrainee ? <span><FcCheckmark size='8' /> ({info.cacanceledTraining ? <span><FcCheckmark size='8' /></span> : <span><IoIosClose style={{ color: 'red' }} size='8' /></span>})</span> : <span><IoIosClose style={{color: 'red'}} size='8' /> ({info.cacanceledTraining ? <span><IoIosClose style={{color: 'red'}} size='8' /></span> : <span><FcCheckmark size='8' /></span>})</span>}</p>
                        </li>
                        ))}
                  </WrapperUserInfo>
                              </ListShown>
                              <ListShown>
                  <ListName>Instagram</ListName>
                  <WrapperUserInfo>
                        {userData.info.map((info) => (
                              <li key={info._id}>
                                    <URLInsta instaNickName={info.instaNickName} />
                        </li>
                        ))}
                  </WrapperUserInfo>
                  </ListShown>
                  </div>
            </BlockCardUser>
            <button onClick={handleOpenModalCardUser}>Закрити</button>     
      </WrapperCardUser>
      )
};

export default CardUser;