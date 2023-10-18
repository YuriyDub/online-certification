import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useCourseQuery from '../../hooks/useCourseQuery';
import placeholder from '../../assets/img/placeholder.jpg';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import styles from './CoursePage.module.scss';

export const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const { data, isLoading, isSuccess } = useCourseQuery(id, token);

  useEffect(() => {
    if (isSuccess && data.status === 401) {
      navigate('/log-in');
    }
  }, [data, navigate, isSuccess]);

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
