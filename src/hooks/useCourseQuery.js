import { useQuery } from 'react-query';
import { fetchCourse } from '../utils/network';

const useCourseQuery = (id, token) => {
  return useQuery({
    queryFn: () => fetchCourse(id, token),
    queryKey: ['course'],
  });
};

export default useCourseQuery;
