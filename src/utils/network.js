import axios from 'axios';
import { API_URL, COURSES_CARDS_URL } from '../constants';

const instanceAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instanceAxios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('persist:auth')).token.slice(1, -1);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instanceAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem('persist:auth', { accessToken: response.data.accessToken });
        return instanceAxios.request(originalRequest);
      } catch {
        console.error('User is not authorized');
      }
    }
  },
);

export const fetchCourses = async (page, category) => {
  try {
    const response = await instanceAxios.get(
      COURSES_CARDS_URL +
        `${category === 'All' ? '?' : `?category=${category}&`}page=${page}&limit=10`,
    );
    return response.data;
  } catch (error) {
    console.error('Fetch courses error:', error);
    return false;
  }
};

export const fetchCourse = async (id) => {
  try {
    const response = await instanceAxios.get(COURSES_CARDS_URL + `/${id}`);
    return response.data;
  } catch (error) {
    console.error('FetchCourse error:', error?.response?.data?.message);
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
    console.error('Refresh error:', error?.response?.data?.message);
  }
};
