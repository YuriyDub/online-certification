import { useEffect, useState } from 'react';
import useCoursesQuery from '../../hooks/useCoursesQuery';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import banner from '../../assets/img/banner1.jpg';
import styles from './HomePage.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/UI/Loader';

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

  const { data, isLoading, refetch, isFetching } = useCoursesQuery(page, category);

  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [page, category, refetch]);

  const toCourse = (id) => navigate(`/courses/${id}`);

  const changeCategory = (category) => {
    if (!isFetching) {
      setCategory(category);
    }
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
          <Categories categories={categories} setCategory={changeCategory} category={category} />
          {isFetching ? (
            <Loader className={styles.loader} />
          ) : (
            <>
              <Divider />
              <section className={styles.courses}>
                {data?.courses.map((c) => (
                  <CourseCard
                    title={c.title}
                    author={c.instructor.name}
                    key={c._id}
                    description={c.description}
                    duration={c.duration}
                    level={c.level}
                    onClick={() => toCourse(c._id)}
                  />
                ))}
              </section>
              <Pagination
                isNext={data?.accessNextPage}
                isPrev={data?.accessPreviousPage}
                page={page}
                setPage={setPage}
              />
            </>
          )}
        </Container>
      </section>
    </div>
  );
};
