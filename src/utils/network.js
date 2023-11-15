import axios from 'axios';
import { API_URL, COURSES_CARDS_URL } from '../constants';

const instanceAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instanceAxios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('persist:auth'))?.token.slice(1, -1);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instanceAxios.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await checkAuth();
        localStorage.setItem('persist:auth', { accessToken: response.data.accessToken });
        return instanceAxios.request(originalRequest);
      } catch {
        console.error('User is not authorized');
        document.location.replace('/login');
        localStorage.setItem('persist:auth', { isAuth: false });
        return error.response;
      }
    } else {
      return error.response;
    }
  },
);

export const fetchCourses = async (page, category, searchLine) => {
  try {
    const response = await instanceAxios.get(
      COURSES_CARDS_URL +
        `${category === 'All' ? '?' : `?category=${category}&`}page=${page}&limit=10${
          searchLine && `&search=${searchLine}`
        }`,
    );
    return response.data;
  } catch (error) {
    console.error('Fetch courses error:', error);
    return false;
  }
};

export const fetchCourse = async (id) => {
  try {
    const response = await instanceAxios.get(COURSES_CARDS_URL + `/id/${id}`);
    return response.data;
  } catch (error) {
    console.error('FetchCourse error:', error?.message);
    return false;
  }
};

export const signIn = async (username, password) => {
  try {
    const response = await instanceAxios.post('/signin', { username, password });

    return response.data;
  } catch (error) {
    console.error('Sign in error:', error?.response?.data?.message);
  }
};

export const signUp = async (username, email, password) => {
  try {
    const response = await instanceAxios.post('/signup', { username, password, email });
    return response.data;
  } catch (error) {
    console.error('Sign up error:', error?.response?.data?.message);
  }
};

export const resetAuth = async () => {
  try {
    instanceAxios.post('/signout');
  } catch (error) {
    console.error('Sign out error:', error?.response?.data?.message);
  }
};

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Refresh error:', error.message);
  }
};

export const getUser = async () => {
  try {
    const response = await instanceAxios.get('/profile');
    return response.data;
  } catch (error) {
    console.error('Get profile error:', error?.response?.data?.message);
  }
};

export const enrollCourse = async (id) => {
  try {
    await instanceAxios.post(`/courses/enroll?id=${id}`);
  } catch (error) {
    console.error('Enroll course error:', error?.response?.data?.message);
  }
};
