import { useQuery } from 'react-query';
import { fetchLessons } from '../utils/network';

const useLessonsQuery = (id) => {
  return useQuery({
    queryFn: () => fetchLessons(id),

    queryKey: ['lessons'],
    initialData: [],
  });
};

export default useLessonsQuery;
