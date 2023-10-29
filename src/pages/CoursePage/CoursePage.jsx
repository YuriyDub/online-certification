import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useCourseQuery from '../../hooks/useCourseQuery';
import placeholder from '../../assets/img/placeholder.jpg';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import styles from './CoursePage.module.scss';
import { Loader } from '../../components/UI/Loader';

export const CoursePage = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);

  const { data, isLoading, isError } = useCourseQuery(id, token);

  const navigate = useNavigate();

  if (isError) {
    navigate('/login');
  }

  return (
    <div className={styles.page}>
      <Container>
        <Divider />
        {isLoading ? (
          <Loader className={styles.loader} variant={'dark'} />
        ) : (
          <>
            <div className={styles.course}>
              <section className={styles.details}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.chips}>
                  <span className={styles.chip}>{data.category}</span>
                  <span className={styles.chip}>{data.duration} duration</span>
                  <span className={styles.chip}>{data.level} level</span>
                  <span className={styles.chip}>{data.language}</span>
                  <span className={styles.chip}>{data?.lessons?.length} lessons</span>
                </div>
                <ul className={styles.lessons}>
                  {data?.lessons?.map((l) => (
                    <li className={styles.lesson}>
                      <div className={styles.description}>
                        <h2>{l.title}</h2>
                        <p>{l.description}</p>
                      </div>
                      <span className={styles.duration}>{l.duration}</span>
                    </li>
                  ))}
                </ul>
                <span className={styles.author}>{data.instructor.name}</span>
              </section>
              <section>
                <img src={placeholder} alt="placeholder" className={styles.preview} />
              </section>
            </div>
          </>
        )}
        <Divider />
      </Container>
    </div>
  );
};
