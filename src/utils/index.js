import axios from 'axios';

export const fetchData = async (url, options = {}) => {
  try {
    return await axios(url, options);
  } catch (error) {
    console.error(error);
    return false;
  }
};
