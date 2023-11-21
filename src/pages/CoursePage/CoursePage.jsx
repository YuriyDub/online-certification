import { useParams } from 'react-router-dom';
import useCourseQuery from '../../hooks/useCourseQuery';
import placeholder from '../../assets/img/placeholder.jpg';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { Loader } from '../../components/UI/Loader';
import { Button } from '../../components/UI/Button';
import { enrollCourse } from '../../utils/network';
import styles from './CoursePage.module.scss';

export const CoursePage = () => {
  const { id } = useParams();

  const {
    data: {
      course: {
        instructor,
        image,
        title,
        description,
        duration,
        level,
        category,
        language,
        lessons,
      },
      isEnrolled,
    },
    isFetching,
  } = useCourseQuery(id);

  return (
    <div className={styles.page}>
      <Container>
        <Divider />
        {isFetching ? (
          <Loader className={styles.loader} variant={'dark'} />
        ) : (
          <div className={styles.course}>
            <section className={styles.details}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
              <div className={styles.chips}>
                <span className={styles.chip}>{category}</span>
                <span className={styles.chip}>{duration} duration</span>
                <span className={styles.chip}>{level} level</span>
                <span className={styles.chip}>{language}</span>
                <span className={styles.chip}>{lessons?.length} lessons</span>
              </div>
              <ul className={styles.lessons}>
                {lessons?.map((l) => (
                  <li className={styles.lesson}>
                    <div className={styles.description}>
                      <h2>{l.title}</h2>
                      <p>{l.description}</p>
                    </div>
                    <span className={styles.duration}>{l.duration}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                {!isEnrolled ? (
                  <Button variant="gradient" onClick={() => enrollCourse(id)}>
                    enroll in course
                  </Button>
                ) : (
                  <Button variant="gradient">{'to course >'}</Button>
                )}
                <span className={styles.author}>{instructor?.name}</span>
              </div>
            </section>
            <section>
              <img src={image || placeholder} alt="placeholder" className={styles.preview} />
            </section>
          </div>
        )}
        <Divider />
      </Container>
    </div>
  );
};
