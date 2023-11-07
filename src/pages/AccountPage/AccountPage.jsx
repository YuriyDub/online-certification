import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import placeholder from '../../assets/img/placeholder.jpg';
import styles from './AccountPage.module.scss';
import { useEffect } from 'react';
import { getProfile } from '../../store/slices/authSlice';

export const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.avatar}>
          <img src={placeholder} alt="avatar" />
        </div>
        <h1 className={styles.title}>Hello {user ? 'User' : user?.username}!</h1>
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
        <Divider />
        <h2 className={styles.subTitle}>Your Courses:</h2>
        <div className={styles.courses}>
          <div className={styles.course}>
            <img src={placeholder} alt="Course" />
            <div className={styles.details}>
              <h3 className={styles.courseTitle}>Professional React and Redux Tool Kit</h3>
              <div className={styles.progressBar}>
                <div className={styles.progress}></div>
              </div>
              <div className={styles.accuracy}>Accuracy 100%</div>
            </div>
          </div>
          <div className={styles.course}>
            <img src={placeholder} alt="Course" />
            <div className={styles.details}>
              <h3 className={styles.courseTitle}>State Managing in React</h3>
              <div className={styles.progressBar}>
                <div className={styles.progress}></div>
              </div>
              <div className={styles.accuracy}>Accuracy 90%</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
