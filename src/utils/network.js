import axios from 'axios';
import { API_URL, COURSES_CARDS_URL } from '../constants';

const instanceAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instanceAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('persist:auth')).token}`;
  return config;
});

export const fetchCourses = async (page, category) => {
  try {
    const response = await instanceAxios.get(
      COURSES_CARDS_URL +
        `${category === 'All' ? '?' : `?category=${category}&`}page=${page}&limit=10`,
    );
    return response.data;
  } catch (error) {
    console.error('Fetch courses error:', error);
  }
};

export const fetchCourse = async (id) => {
  try {
    const response = await instanceAxios.get(COURSES_CARDS_URL + `/${id}`);
    return response.data;
  } catch (error) {
    console.error('Fetch course error:', error);
    return error.response;
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

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    return response;
  } catch (error) {
    console.error('Refresh error:', error?.response?.data?.message);
  }
};
