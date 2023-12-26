import useLessonsQuery from '../../hooks/useLessonsQuery';
import { Container } from '../../components/UI/Container';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EnrolledCoursePage.module.scss';
import { Button } from '../../components/UI/Button';
import { Loader } from '../../components/UI/Loader';
import { Divider } from '../../components/UI/Divider';

export const EnrolledCoursePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: { allLessons, completedLessons },
    isFetching,
    isError,
  } = useLessonsQuery(id);

  const toLesson = (courseId, id) => navigate(`/enrolled-courses/${courseId}/lesson/${id}`);

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
              <h1 className={styles.title}>Lessons:</h1>
              <ul className={styles.lessons}>
                {allLessons?.map((l, index) => {
                  const isCompleted = completedLessons.some((cl) => l.index === cl.lessonIndex);
                  return (
                    <li
                      className={`${styles.lesson} ${styles[isCompleted ? 'completed' : '']}`}
                      onClick={() => toLesson(id, index)}>
                      <div className={styles.materials}>
                        <div className={styles.description}>
                          <h2>{l.title}</h2>
                          <p>{l.description}</p>
                        </div>
                        {isCompleted ? (
                          <span className={styles.result}>
                            {
                              completedLessons.find((cl) => cl.lessonIndex === l.index)
                                ?.testResults[0]?.userScore
                            }
                            /
                            {
                              completedLessons.find((cl) => cl.lessonIndex === l.index)
                                ?.testResults[0]?.maxScore
                            }{' '}
                            is correct
                          </span>
                        ) : (
                          <span className={styles.duration}>{l.duration}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        )}
        <Divider />
      </Container>
    </div>
  );
};
