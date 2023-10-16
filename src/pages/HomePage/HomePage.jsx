import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import useCourseQuery from '../../hooks/useCourseQuery';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import banner from '../../assets/img/banner1.jpg';
import styles from './HomePage.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';

const categories = [
  'All',
  'Design',
  'Development',
  'Marketing',
  'Personal Development',
  'Business',
  'Photography',
  'Music',
];

export const HomePage = () => {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useCourseQuery(page);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const filterCourses = (courses = []) => {
    return category === 'All' ? courses : courses.filter((c) => c.category === category);
  };

  return (
    <div className={styles.page}>
      <Container>
        <Divider />
        <div className={styles.banner}>
          <img src={banner} alt="Background" />
          <h1>GET CERTIFICATION WITH OUR SERVICE</h1>
        </div>
        <Divider />
      </Container>
      <section className={styles.coursesBackground}>
        <Container>
          <h1 className={styles.title}>Recommended</h1>
          <Categories categories={categories} setCategory={setCategory} category={category} />
          <Divider />
          <section className={styles.courses}>
            {isLoading ? (
              <CircleLoader />
            ) : (
              filterCourses(data.courses).map((c) => (
                <CourseCard
                  title={c.title}
                  author={c.author}
                  key={c._id}
                  description={c.description}
                />
              ))
            )}
          </section>
          <Pagination
            isNext={data?.accessNextPage}
            isPrev={data?.accessPreviousPage}
            page={page}
            setPage={setPage}
          />
        </Container>
      </section>
    </div>
  );
};
