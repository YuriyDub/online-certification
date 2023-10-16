import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';

import banner from '../../assets/img/banner1.jpg';

import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import { useEffect, useState } from 'react';

import { fetchCourses } from '../../utils/network';

import styles from './HomePage.module.scss';
import { Button } from '../../components/UI/Button';
// import { useSelector } from 'react-redux';

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
  const [courses, setCourses] = useState([]);

  const filterCourses = (courses = []) => {
    return category === 'All' ? courses : courses.filter((c) => c.category === category);
  };

  const sortedCourses = filterCourses(courses);

  //   const token = useSelector((state) => state.auth.token);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const newCourses = await fetchCourses(token, page);
      setCourses(newCourses);
    };

    fetchData();
  }, [token, page]);

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
            {sortedCourses?.map((c) => (
              <CourseCard
                title={c.title}
                author={c.author}
                key={c._id}
                description={c.description}
              />
            ))}
          </section>
          <div className={styles.pagination}>
            <Divider />
            <Button
              onClick={() => {
                setPage((prev) => prev - 1);
              }}>
              Prev
            </Button>
            <div className={styles.number}>{page}</div>
            <Button
              onClick={() => {
                setPage((prev) => prev + 1);
              }}>
              Next
            </Button>
            <Divider />
          </div>
        </Container>
      </section>
    </div>
  );
};
