// import clientAPI  from '/service/axios.config';
import { clientAPI } from 'service/axios.config';
// import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
import Input from 'react-phone-number-input/input';
// import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
} from './AddClients.styled';
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const AddClients = ({allCoach, kindTrainee}) => {
  const [tel, setTel] = useState('');
  const [clientName, setClientName] = useState('');
  const [currentErrorName, setCurrentErrorName] = useState('');
  const [currentErrorTel, setCurrentErrorTel] = useState('');
  const [currentErrorInsta, setCurrentErrorInsta] = useState('');
  const [instaNickName, setInstaNickName] = useState('@');
  const [validForm, setValidForm] = useState(false);
  const [validFormName, setValidFormName] = useState(false);
  const [validFormTel, setValidFormTel] = useState(false);
  const [validFormInsta, setValidFormInsta] = useState(false);
  const [kind_trainee, setKind_trainee] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [name_Coach, setName_Coach] = useState('');
  const [onSubmit, setOnSubmit] = useState({
    id: "",
    day_translate: "",
    info: {
      date: "",
      day: "",
      time: "",
      kind_trainee: "",
      name: "",
      instaNickName: "",
      coach: "",
      visitTrainee:""
    }
  });

  useEffect(() => {
    setOnSubmit({
      id: tel,
      info: {
        date: date,
        day: day,
        time: time,
        kind_trainee: kind_trainee,
        name: clientName,
        instaNickName: instaNickName,
        coach: name_Coach,
        visitTrainee: false
      }
    })
  }, [clientName, date, day, kind_trainee, time, tel, instaNickName, name_Coach]);

  useEffect(() => {
    if (validFormName === true & validFormTel === true & validFormInsta === true) {
      return (setValidForm(true));
    }
    return (setValidForm(false));
  }, [validFormName, validFormTel, validFormInsta]);

  const userName = yup.object({
    name: yup.string()
      .min(3, "Ім'я може містити мінімум 3 символи")
      .max(25, "Ім'я може містити максимум 25 символів")
      .required("Ім'я обов'язкове до заповнення"),
  });

  const userTel = yup.object({
    id: yup.string()
      .min(13, "Номер телефону має містити 13 символів")
      .max(13, "Номер телефону має містити 13 символів")
      .required("Номер телефону обов'язковий до заповнення"),
  });

    const userInsta = yup.object({
    instaNickName: yup.string()
      .min(3, "Nickname може містити мінімум 3 символи")
      .max(25, "Nickname може містити максимум 25 символів")
      .required("Nickname обов'язкове до заповнення"),
  });

  const validateUserName = (e) => {
    const name = e.target.value;
    setClientName(name);
    userName.validate({ name: name })
      .catch((err) => {
        setCurrentErrorName(err.errors);
        setValidFormName(false);
      });
    userName.isValid({ name: name })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorName('');
          setValidFormName(true);
          return;
        }
      })
  };

  const ValidateUserID = (e) => {
    const userID = e;
    setTel(e);
    userTel.validate({ id: userID })
      .catch((err) => {
        setCurrentErrorTel(err.errors);
        setValidFormTel(false);
      });
    userTel.isValid({ id: userID })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorTel('');
          setValidFormTel(true);
          return;
        }
      })
  };

  const validateUserInsta = (e) => {
    const nickname = e.target.value;
    setInstaNickName(nickname)
    userInsta.validate({ instaNickName: nickname })
      .catch((err) => {
        setCurrentErrorInsta(err.errors);
        setValidFormInsta(false);
      });
    userInsta.isValid({ instaNickName: nickname })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorInsta('');
          setValidFormInsta(true);
          return;
        }
      })
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validForm === true) {
      const { id, day_translate, info } = onSubmit;
      // const  = info.day;
      // clientAPI.sendDataUsers({ id, day_translate, info }).then(setValidForm(false));
      // clientAPI.sendTgRecord({id, day_translate, clientName, kind_trainee, time, date, instaNickName});
      new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(onSubmit, null, 2));
      return;
    };
    return;
  };

  const GetResultAllCoach = () => {
    if (allCoach === []) {
      return null;
    }
    return (
      <>
        {allCoach.map(coach => (
          <option
            key={coach.name_Coach}
            id={coach.name_Coach}
            value={coach.name_Coach}
          >
            {coach.name_Coach}
          </option>
        ))}
      </>
    )
  };

  const GetResultKindTrainee = () => {
    if (kindTrainee === []) {
      return null;
    }
    return (
      <>
        {kindTrainee.map(item => (
          <option
            key={item.id}
            id={item.id}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </>
    )
  };


  return (
    <Wrapper>
      <Dialog>
        <p>Оберіть тренера:</p>
        <select
          id="name_Coach"
          className="select"
          onChange={e => {setName_Coach(e.target.value)}}
          style={{width: '100%'}}
        >
          <GetResultAllCoach/>
        </select>
        <p>Оберіть вид тренування:</p>
        <select
          id="kind_trainee"
          className="select"
          onChange={e => {setKind_trainee(e.target.value)}}
          style={{width: '100%'}}
        >
          <GetResultKindTrainee/>
        </select>
          <form>
            <label htmlFor="name">
              Прізвище та ім'я:</label><br />
              <input
                name="name"
                type="text"
                // onChange={e =>{setClientName(e.target.value)}}
              onChange={validateUserName}
            /><br />
            <div>
              {currentErrorName ?
                <div style={{ color: "red", width: "180px" }}>
                  <p style={{ fontSize: "14px" }}>{currentErrorName}</p>
                </div> :
                null
              }
              </div>
            <label htmlFor="nick-name">
              Nickname on Instagram:</label><br />
              <input
                name="nick-name"
                type="text"
                // onChange={e => { setInstaNickName(e.target.value) }}
                value={instaNickName}
                onChange={validateUserInsta}
            /><br />
            <div>
              {currentErrorInsta ?
                <div style={{ color: "red", width: "180px" }}>
                  <p style={{ fontSize: "14px" }}>{currentErrorInsta}</p>
                </div> :
                null
              }
            </div>
            <label htmlFor="id">
              Номер телефону:</label><br />
              <Input
                name="id"
                id="id"
                value={tel}
                onChange={ValidateUserID}
                country="UA"
                international
                withCountryCallingCode
            /><br />
              {currentErrorTel ?
                <div style={{ color: "red", width: "180px" }}>
                  <p style={{ fontSize: "14px" }}>{currentErrorTel}</p>
                </div> :
                null
              }
              <SubBTN type="submit" onClick={HandleSubmit} disabled={!validForm}>
                Записатися
            </SubBTN>
            </form>     
      </Dialog>
      {/* <div>
        <ToastContainer
          style={{ marginTop: '55px', marginLeft: '25px', width: '250px' }}
          position="top-left"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </div> */}
    </Wrapper>
  )
};

export default AddClients;