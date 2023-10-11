import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';

import banner from '../../assets/img/banner1.jpg';

import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import { useEffect, useState } from 'react';

import { COURSES_CARDS_URL } from '../../constants';
import { fetchData } from '../../utils/network';

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData(COURSES_CARDS_URL).then((res) => setCourses(res.data));
  }, []);

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
            {courses?.map((c) => (
              <CourseCard title={c.title} author={c.author} key={c._id} />
            ))}
          </section>
        </Container>
      </section>
    </div>
  );
};
