import { useQuery } from 'react-query';
import { fetchCourses } from '../utils/network';

const useCoursesQuery = (page, category, searchLine) => {
  return useQuery({
    queryFn: () => fetchCourses(page, category, searchLine),
    queryKey: ['courses'],
    onError: () => {
      window.location.href = '/signup';
    },
  });
};

export default useCoursesQuery;
