import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';

import banner from '../../assets/img/banner1.jpg';

import styles from './HomePage.module.scss';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Categories } from '../../components/Categories';
import { useState } from 'react';

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
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </section>
        </Container>
      </section>
    </div>
  );
};
