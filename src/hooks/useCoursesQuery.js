import { useQuery } from 'react-query';
import { fetchCourses } from '../utils/network';

const useCoursesQuery = (page, category) => {
  return useQuery({
    queryFn: () => fetchCourses(page, category),
    queryKey: ['courses'],
    onError: () => {
      window.location.href = '/signup';
    },
  });
};

export default useCoursesQuery;
