import { useQuery } from 'react-query';
import { fetchCourses } from '../utils/network';

const useCourseQuery = (page) => {
  return useQuery({
    queryFn: () => fetchCourses(page),
    queryKey: ['courses'],
    staleTime: 1000 * 5,
  });
};

export default useCourseQuery;
