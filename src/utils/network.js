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
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await checkAuth();
        localStorage.setItem('persist:auth', { token: response.data.accessToken });
        return instanceAxios.request(originalRequest);
      } catch {
        console.error('User is not authorized');
        document.location.replace('/login');
        localStorage.setItem('persist:auth', { isAuth: false, token: null, user: null });
        console.error(`Refresh token error: ${error}`);
        throw new Error('Refresh token error');
      }
    } else {
      console.error(`User isn't authorized error: ${error}`);
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
    console.error(`Fetch courses error: ${error}`);
    throw new Error('Fetch courses error');
  }
};

export const fetchCourse = async (id) =>
  instanceAxios.get(COURSES_CARDS_URL + `/id/${id}`).then((res) => res.data);

export const fetchLessons = async (id) =>
  instanceAxios.get(`/profile/courses/${id}/lessons`).then((res) => res.data);

export const fetchLesson = async (courseId, id) =>
  instanceAxios.get(`/profile/courses/${courseId}/lesson/${id}`).then((res) => res.data);

export const signIn = async (username, password) => {
  try {
    const response = await instanceAxios.post('/signin', { username, password });
    return response.data;
  } catch (error) {
    console.error(`Sign in error: ${error}`);
    throw new Error('Sign in error');
  }
};

export const signUp = async (username, email, password) => {
  try {
    const response = await instanceAxios.post('/signup', { username, password, email });
    return response.data;
  } catch (error) {
    console.error(`Sign up error: ${error}`);
    throw new Error('Sign up error');
  }
};

export const resetAuth = async () => {
  try {
    instanceAxios.post('/signout');
  } catch (error) {
    console.error(`Sign out error: ${error}`);
    throw new Error('Sign out error');
  }
};

const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error(`Refresh error: ${error}`);
    throw new Error('Refresh error');
  }
};

export const getUser = async () => {
  try {
    const response = await instanceAxios.get('/profile');
    return response.data;
  } catch (error) {
    console.error(`Get profile error: ${error}`);
    throw new Error('Get profile error');
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await instanceAxios.post('/updateprofile', profileData);
    return response.data;
  } catch (error) {
    console.error(`Update profile error: ${error}`);
    throw new Error('Update profile error');
  }
};

export const enrollCourse = async (id) => {
  try {
    return instanceAxios.post(`/courses/enroll?id=${id}`);
  } catch (error) {
    console.error(`Enroll course error: ${error}`);
    throw new Error('Enroll course error');
  }
};

export const unenrollCourse = async (id) => {
  try {
    return instanceAxios.post(`/courses/unenroll?id=${id}`);
  } catch (error) {
    console.error(`Unenroll course error: ${error}`);
    throw new Error('Unenroll course error');
  }
};

export const submitTest = async (courseId, lessonId, answers) => {
  try {
    return instanceAxios
      .post(`/profile/courses/${courseId}/lesson/${lessonId}/test/0`, answers)
      .then((res) => {
        if (res) {
          return res?.data;
        } else alert('Test is already completed');
      });
  } catch (error) {
    console.error(`Submit test error: ${error}`);
  }
};
