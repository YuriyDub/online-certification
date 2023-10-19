import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import useCoursesQuery from '../../hooks/useCoursesQuery';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import banner from '../../assets/img/banner1.jpg';
import styles from './HomePage.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

  const { data, isLoading, refetch } = useCoursesQuery(page, category);

  const navigate = useNavigate();

  const isAuth = useSelector((store) => store.auth.isAuth);

  useEffect(() => {
    refetch();
  }, [page, category, refetch]);

  const toCourse = (id) => {
    if (isAuth) {
      navigate(`/courses/${id}`);
    } else {
      navigate(`/log-in`);
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
          <Categories categories={categories} setCategory={setCategory} category={category} />
          <Divider />
          <section className={styles.courses}>
            {isLoading ? (
              <CircleLoader />
            ) : (
              data?.courses.map((c) => (
                <CourseCard
                  title={c.title}
                  author={c.author}
                  key={c._id}
                  description={c.description}
                  duration={c.duration}
                  level={c.level}
                  language={c.language}
                  onClick={() => toCourse(c._id)}
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
