import { useQuery } from 'react-query';
import { fetchCourse } from '../utils/network';

const useCourseQuery = (id) => {
  return useQuery({
    queryFn: () => fetchCourse(id),
    queryKey: ['course'],
    initialData: {
      course: {
        instructor: {
          name: null,
          image: null,
        },
        image: null,
        title: null,
        description: null,
        duration: null,
        level: null,
        category: null,
        language: null,
        lessons: null,
      },
      isEnrolled: false,
    },
  });
};

export default useCourseQuery;
