import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instanceClientAPI from './api';

//================== REGISTER USER ====================
export const register = async ({ name, email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/signup`, {
      name,
      email,
      password,
    });
    toast.success(`Реєстрація успішна. Вітаємо ${res.data.data.name}`);
    return res.data;
  } catch (e) {
    if (e.response.status === 409) {
      toast.error(`Ця електронна пошта існує`);
    } else {
      toast.error('Помилка реєстрації');
    }
  }
};

//================== LOGIN USER =====================
export const login = async ({ email, password }) => {
  try {
    const res = await instanceClientAPI.post(`/users/signin`, {
      email,
      password,
    });
    if (res.status === 200) {
      toast.success(`Вітаємо ${res.data.name}`);
    }
    return res;
  } catch (error) {
    toast.error('Помилка авторизації');
  }
};

//================== LOGOUT USER =====================
export const logout = async () => {
  try {
    const res = await instanceClientAPI.get(`/users/logout`);
    // return res;
    return console.log(res);
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

//================== CURRENT USER =====================
export const current = async () => {
  return await instanceClientAPI.get(`/users/current`);
};

//=============== get New Tokens ========================

export const getNewTokens = async payload => {
  return await instanceClientAPI.post(`/users/refresh-tokens`, payload);
};

//================== GET LIST OF PRODUCTS BY QUERY =====================

export const getProductsByQuery = async payload => {
  try {
    const { data } = await instanceClientAPI.get(
      `/products/search?query=${payload}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//================== Advice recomendation for not loggin user =====================

export const adviceForNoAuthUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/nutrition-advice',
      payload,
    );
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так ');
    console.log(error.message);
  }
};

//================== Advice recomendation for Login in user =====================

export const adviceForLoginUser = async payload => {
  try {
    const { data } = await instanceClientAPI.post(
      '/users/logged-nutrition-advice',
      payload,
    );
    return data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.log(error.message);
  }
};

// ================ GET PRODUCTS IN DIETARY BY DATE ================
export const getProductsByDate = async ({ date }) => {
  try {
    const { data } = await instanceClientAPI.get(`/dietaries?date=${date}`);

    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return { data: 'Дієта на цю дату ще не створена' };
    } else {
      console.log(error.message);
    }
  }
};
//================== CREATE OBJ FOR PRODUCTS TO DIETARY BY DATE =====================

export const createProductsListByDate = async ({ date }) => {
  try {
    return await instanceClientAPI.post('/dietaries', { date });
  } catch (error) {
    console.log(error);
  }
};

//================== ADD PRODUCTS TO DIETARY BY DATE =====================

export const addProductByDate = async ({ date, data }) => {
  try {
    return await instanceClientAPI.patch('/dietaries', { date, data });
  } catch (error) {
    console.log(error);
  }
};

//================== DELETE PRODUCTS TO DIETARY BY DATE =====================

export const deleteProductByDate = async ({ productId, date }) => {
  try {
    return await instanceClientAPI.delete(
      `dietaries/?productId=${productId}&date=${date}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const sendData = async ({ id, day, time, kind_trainee }) => {
  try {
    const res = await instanceClientAPI.post(`/api`, {id, day, time, kind_trainee});
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};


export const getData = async ({id}) => {
  try {
    const result = await instanceClientAPI.put(`/api`, { id });
    console.log(result);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALL = async () => {
  try {
    const result = await instanceClientAPI.get(`/api`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const clientAPI = {
  register,
  login,
  logout,
  current,
  getNewTokens,
  getProductsByQuery,
  adviceForNoAuthUser,
  adviceForLoginUser,
  getProductsByDate,
  createProductsListByDate,
  addProductByDate,
  deleteProductByDate,
  sendData,
  getData,
  getDataALL,
};
