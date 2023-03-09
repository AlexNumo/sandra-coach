import { useState } from 'react';
// BiShow BiShowAlt AiOutlineArrowDown
// import { BiShow } from "react-icons/bi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
  WrapperNames,
  NamesStyle,
  ResultRender,
  BTN
} from './Names.styled';

const Names = ({item} ) => {
  const [showAllNames, setshowAllNames] = useState(false);
  const [getNameID, setGetNameID] = useState('');
  
  const HandleRenderNames = () => {
    if (item._id === getNameID) {
      return (
        <WrapperNames style={{marginLeft: '20px'}}>
          {/* <NamesStyle> */}
          {showAllNames ? item.info.map((name) => (
            <span key={name._id}>
              <span>{name.name},</span>
            </span>
          )) : null}
          {/* </NamesStyle> */}
        </WrapperNames>
      )
    }
    return (
      <>
      </>
    )
  }
  const result = [];
  const TEST = () => { 
    item.info.map((info) => (
        result.push(info.name.length)
  ));}
  TEST();
  const indexOfMaxValue = result.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  const HandleShowAllNames = (e) => {
    if (showAllNames === true) {
      return ([
        setshowAllNames(false),
        setGetNameID('')
      ]);
    }
      return ([
        setshowAllNames(true),
        setGetNameID(e.target.id)
      ]);
  }

  if(showAllNames === false){
    return(
    <ResultRender key={item.info[indexOfMaxValue]._id}>
      <span>{item.info[indexOfMaxValue].name}</span>
      <BTN onClick={HandleShowAllNames} id={item._id}><AiFillCaretDown onClick={HandleShowAllNames} id={item._id}/></BTN>
      <HandleRenderNames/>
    </ResultRender>
  )
  }
    return (
      <ResultRender key={item.info[indexOfMaxValue]._id}>
        <span>{item.info[indexOfMaxValue].name}</span>
        <BTN onClick={HandleShowAllNames} id={item._id}><AiFillCaretUp onClick={HandleShowAllNames} id={item._id}/></BTN>
        <HandleRenderNames/>
      </ResultRender>
    )
};

export default Names;