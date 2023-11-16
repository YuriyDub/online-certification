import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { useEffect } from 'react';
import { getProfile } from '../../store/slices/authSlice';
import { EnrolledCourseCard } from '../../components/EnrolledCourseCard';
import { Avatar } from '../../components/UI/Avatar';
import styles from './AccountPage.module.scss';

export const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.page}>
      <Container style={{ alignItems: 'center' }}>
        <Avatar />
        {/* <input type="file" name="avatar" accept="image/png, image/jpeg" /> */}
        <h1 className={styles.title}>Hello {user ? user?.username : 'User'}!</h1>
      </Container>
      <section className={styles.coursesSection}>
        <Container>
          <h2 className={styles.subTitle} style={{ color: 'var(--colors-text-secondary)' }}>
            Your Courses:
          </h2>
          <Divider />
          <div className={styles.courses}>
            {user.enrolledCourses?.map((course) => (
              <EnrolledCourseCard
                key={course._id}
                title={course.courseTitle}
                progress={course.progress}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className={styles.profile}>
        <Container>
          <h2 className={styles.subTitle}>Profile:</h2>
          <Divider />
          <ul className={styles.description}>
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
      </section>
    </div>
  );
};
