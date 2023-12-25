import { useNavigate, useParams } from 'react-router-dom';
import useCourseQuery from '../../hooks/useCourseQuery';
import placeholder from '../../assets/img/placeholder.jpg';
import { Container } from '../../components/UI/Container';
import { Divider } from '../../components/UI/Divider';
import { Loader } from '../../components/UI/Loader';
import { Button } from '../../components/UI/Button';
import { enrollCourse, unenrollCourse } from '../../utils/network';
import styles from './CoursePage.module.scss';

export const CoursePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: {
      instructor,
      image,
      title,
      description,
      duration,
      level,
      category,
      language,
      lessons,
      isEnrolled,
    },
    isFetching,
    isError,
    refetch,
  } = useCourseQuery(id);

  const enrollToCourse = (id) => {
    enrollCourse(id).then(refetch);
  };

  const unenrollFromCourse = (id) => {
    unenrollCourse(id).then(refetch);
  };

  return (
    <div className={styles.page}>
      <Container>
        <Button variant="inverse" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </Button>
        <Divider />
        {isFetching ? (
          <Loader className={styles.loader} variant={'dark'} />
        ) : isError ? (
          <h1>Error</h1>
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
                  <Button variant="gradient" onClick={() => enrollToCourse(id)}>
                    Enroll in course
                  </Button>
                ) : (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Button variant="gradient" onClick={() => unenrollFromCourse(id)}>
                      Unenroll from course
                    </Button>
                    <Button variant="gradient">{'to course >'}</Button>
                  </div>
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
