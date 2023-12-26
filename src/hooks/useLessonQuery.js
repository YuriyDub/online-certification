import { useQuery } from 'react-query';
import { fetchLesson } from '../utils/network';

const useLessonQuery = (courseId, lessonId) => {
  return useQuery({
    queryFn: () => fetchLesson(courseId, lessonId),
    refetchOnWindowFocus: false,
    queryKey: ['lesson'],
    initialData: {},
  });
};

export default useLessonQuery;
