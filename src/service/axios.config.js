import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  instance,
  tgSandra
} from './api';
// import ToastInfo from 'Components/ToastInfo/ToastInfo';

export const sendData = async ({ id, day, time, kind_trainee, name_Coach }) => {
  try {
    const res = await instance.post(`/api`, { id, day, time, kind_trainee, name_Coach });
    toast.success('Зміни відправлено');
    console.log("res: ", res)
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const getData = async ({id}) => {
  try {
    const result = await instance.put(`/api`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALL = async () => {
  try {
    const result = await instance.get(`/api`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addTrainee = async ({ name_Coach, info }) => {
  try {
    const res = await instance.post(`/trainee`, { name_Coach, info });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const findTrainee = async ({name_Coach}) => {
  try {
    const result = await instance.put(`/trainee`, { name_Coach });
    console.log(result);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllTrainee = async () => {
  try {
    const result = await instance.get(`/trainee`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllCoach = async () => {
  try {
    const result = await instance.get(`/coach`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addCoach = async ({ name_Coach, tel, instagram, trainings }) => {
  try {
    const res = await instance.post(`/coach`, { name_Coach, tel, instagram, trainings });
    toast.success('Нового тренера додано');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteCoach = async (name_Coach) => {
  try {
    console.log(name_Coach);
    const result = await instance.put(`/coach`, { name_Coach });
    toast.success('Тренера видалено');
    return console.log(result);
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllClient = async () => {
  try {
    const result = await instance.get(`/client`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addClient = async ({ name_client, tel }) => {
  try {
    const res = await instance.post(`/client`, { name_client, tel });
    toast.success('Нового тренера додано');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteClient = async ({name_client}) => {
  try {
    const result = await instance.put(`/client`, { name_client });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendNewKindTrainee = async ({ id, value, label }) => {
  try {
    const res = await instance.post(`/kindtrainee`, { id, value, label });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteKindTrainee = async ({id}) => {
  try {
    const result = await instance.put(`/kindtrainee`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getKindTraineeAll = async () => {
  try {
    const result = await instance.get(`/kindtrainee`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendDataUsers = async ({ id, info }) => {
  try {
    const res = await instance.post(`/tgbot`, { id, info });
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const canceledTraining = async (id, status) => {
  try {
    if (status.status === false) {
      const res = await instance.put(`/tgbot/visit`, { id, status });
      toast.success(`Скасовано заняття для клієнта "${res.data.info[0].name}"`)
    return res;
    }   
  } catch (e) {
    toast.error('Щось пішло не так');
    console.error(e.message);
  }
};

export const sendSeasonTicketVisitTrainee = async (id) => {
  try {
    const res = await instance.put(`/tgbot/changeSeasonTicket`, id);
    toast.success(`Підтвердженео заняття для клієнта "${res.data.info[0].name}"`);
    return res;
  } catch (e) {
    toast.error('Щось пішло не так');
    console.error(e.message);
  }
};

export const sendVisitTrainingInfoSeasonTickets = async (data) => {
  try {
    // console.log(data)
    const res = await instance.put(`/tgbot/changeSeasonTicket/infoTrainings`, data);
    return res;
  } catch (e) {
    toast.error('Щось пішло не так');
    console.error(e.message);
  }
};

export const deleteDataUsers = async (id) => {
  try {
    const result = await instance.put(`/tgbot`, id);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALLUsers = async () => {
  try {
    const result = await instance.get(`/tgbot`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendSeasonTicket = async (data) => {
    try {
      const result = await instance.put(`/tgbot/seasonTicket`, data);
      return result.data;
    } catch (error) {
      toast.error('Упс, щось пішло не так');
      console.error(error.message);
    }
  };

const sendTgRecord = async ({id, day_translate, clientName, kind_trainee, time, date, instaNickName}) => {
  try {
    const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
    const res = await tgSandra.post(`Записався клієнт ${clientName} на тренування ${kind_trainee} в ${day_translate} о ${time}. Номер телефону клієнта ${id}, дата тренування: ${date}, Instagram: ${urlInsta}`,);
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};
export const clientAPI = {
  sendData,
  getData,
  getDataALL,
  addTrainee,
  findTrainee,
  getAllTrainee,
  addCoach,
  deleteCoach,
  getAllCoach,
  getAllClient,
  addClient,
  sendNewKindTrainee,
  deleteKindTrainee,
  getKindTraineeAll,
  sendDataUsers,
  sendSeasonTicketVisitTrainee,
  sendVisitTrainingInfoSeasonTickets,
  deleteDataUsers,
  getDataALLUsers,
  sendSeasonTicket,
  canceledTraining,
  sendTgRecord
};