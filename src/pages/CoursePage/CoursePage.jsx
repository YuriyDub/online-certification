import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCourseQuery from '../../hooks/useCourseQuery';
import placeholder from '../../assets/img/placeholder.jpg';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import styles from './CoursePage.module.scss';

export const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const { data, isLoading } = useCourseQuery(id, token);

  useEffect(() => {
    if (!data) {
      navigate('/log-in');
    }
  }, []);

  return (
    <div className={styles.page}>
      <Container>
        <Divider />
        {isLoading ? (
          <p>loading</p>
        ) : (
          <>
            <div className={styles.course}>
              <section className={styles.description}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.details}>{data.description}</p>
                <span className={styles.author}>{data.author}</span>
              </section>
              <img src={placeholder} alt="placeholder" className={styles.preview} />
            </div>
          </>
        )}
        <Divider />
      </Container>
    </div>
  );
};
