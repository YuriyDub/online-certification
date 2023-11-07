import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import placeholder from '../../assets/img/placeholder.jpg';
import styles from './AccountPage.module.scss';
import { useEffect } from 'react';
import { getProfile } from '../../store/slices/authSlice';
import { Avatar } from '../../components/UI/Avatar';
import { EnrolledCourseCard } from '../../components/EnrolledCourseCard';

export const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.page}>
      <Container>
        <Avatar />
        <h1 className={styles.title}>Hello {user ? user?.username : 'User'}!</h1>
        <Divider />
        <h2 className={styles.subTitle}>Profile:</h2>
        <ul className={styles.profile}>
          <li>
            user name: <span>{user.username ? user.username : '*not identified'}</span>
          </li>
          <li>
            email: <span>{user.email ? user.email : '*not identified'}</span>
          </li>
          <li>
            age: <span>{user.age ? user.age : '*not identified'}</span>
          </li>
          <li>
            gender: <span>{user.sex ? user.sex : '*not identified'}</span>
          </li>
          <li>
            city: <span>{user.city ? user.city : '*not identified'}</span>
          </li>
        </ul>
      </Container>
      <section className={styles.coursesSection}>
        <Container>
          <Divider />
          <h2 className={styles.subTitle} style={{ color: 'var(--colors-text-secondary)' }}>
            Your Courses:
          </h2>
          <Divider />
          <div className={styles.courses}>
            <EnrolledCourseCard />
            <EnrolledCourseCard />
            <EnrolledCourseCard />
          </div>
        </Container>
      </section>
    </div>
  );
};
