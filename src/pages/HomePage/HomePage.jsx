import { useEffect } from 'react';
import useCoursesQuery from '../../hooks/useCoursesQuery';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import { Pagination } from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/UI/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../../store/slices/homeSlice';
import { useDebounce } from '../../hooks/useDebounce';
import banner from '../../assets/img/banner1.jpg';
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
  const { page, category } = useSelector((state) => state.home);

  const searchLine = useDebounce(
    useSelector((state) => state.home.searchLine),
    500,
  );

  const { data, refetch, isFetching } = useCoursesQuery(page, category, searchLine);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [category, page, searchLine, refetch]);

  const toCourse = (id) => navigate(`/courses/${id}`);

  const changeCategory = (category) => {
    if (!isFetching) {
      dispatch(setCategory(category));
    }
  };

  const changePage = (page) => {
    if (!isFetching) {
      dispatch(setPage(page));
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
              {!data?.courses?.length ? (
                <h2
                  style={{
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    margin: '200px',
                    color: 'var(--colors-text-secondary)',
                  }}>
                  Nothing found...
                </h2>
              ) : (
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
                      img={c.image}
                    />
                  ))}
                </section>
              )}
              <Pagination
                isNext={data?.accessNextPage}
                isPrev={data?.accessPreviousPage}
                page={page}
                setPage={changePage}
              />
            </>
          )}
        </Container>
      </section>
    </div>
  );
};
