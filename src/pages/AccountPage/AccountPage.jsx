import { useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import placeholder from '../../assets/img/placeholder.jpg';
import styles from './AccountPage.module.scss';

export const AccountPage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Hello {user ? 'User' : user?.name}!</h1>
        <Divider />
        <h2 className={styles.coursesTitle}>Your Courses:</h2>
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
        <div className={styles.email}>Email {user.email}</div>
      </Container>
    </div>
  );
};
