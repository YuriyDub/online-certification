import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import { useQuery } from 'react-query';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import { fetchCourses } from '../../utils/network';
import banner from '../../assets/img/banner1.jpg';
import { Button } from '../../components/UI/Button';
import styles from './HomePage.module.scss';

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

  const token = localStorage.getItem('token');

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => fetchCourses(token, page),
    queryKey: ['courses'],
  });

  console.log(data);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const filterCourses = (courses = []) => {
    return category === 'All' ? courses : courses.filter((c) => c.category === category);
  };

  const nextPage = () => {
    data.accessNextPage && setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    data.accessPreviousPage && setPage((prev) => prev - 1);
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
          <div className={styles.pagination}>
            <Divider />
            <Button onClick={prevPage}>Prev</Button>
            <div className={styles.number}>{page}</div>
            <Button onClick={nextPage}>Next</Button>
            <Divider />
          </div>
        </Container>
      </section>
    </div>
  );
};
