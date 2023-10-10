import axios from 'axios';
import { COURSES_CARDS_URL } from '../constants';

export const getCoursesCards = () => {
  axios
    .get(COURSES_CARDS_URL)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.error(error));
};

// export const getCoursesCards = () => {
//   fetch(COURSES_CARDS_URL).then((res) => {
//     return res.json();
//   });
// };
