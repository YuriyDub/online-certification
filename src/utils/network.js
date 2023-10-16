import axios from 'axios';

import { API_URL, COURSES_CARDS_URL } from '../constants';

const instanceAxios = axios.create({
  baseURL: API_URL,
});

export const fetchCourses = async (token, page) => {
  try {
    const response = await instanceAxios.get(COURSES_CARDS_URL + `?page=${page}&limit=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch courses error:', error);
  }
};

export const signIn = async (username, password) => {
  try {
    const response = await instanceAxios.post('/signin', { username, password });
    return response.data;
  } catch (error) {
    console.error('Sign in error:', error);
  }
};

export const signUp = async (username, email, password) => {
  try {
    const response = await instanceAxios.post('/signup', { username, password, email });
    return response.data;
  } catch (error) {
    console.error('Sign up error:', error);
  }
};
