import { useQuery } from 'react-query';
import { fetchCourses } from '../utils/network';

const useCoursesQuery = (page, category) => {
  return useQuery({
    queryFn: () => fetchCourses(page, category),
    queryKey: ['courses'],
    staleTime: 1000 * 5,
  });
};

export default useCoursesQuery;
