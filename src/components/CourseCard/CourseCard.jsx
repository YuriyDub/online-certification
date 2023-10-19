import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/placeholder.jpg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { Button } from '../UI/Button';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  author = 'Ivan Ivanov',
  description = 'Nostrud laboris ea eiusmod ullamco sunt veniam excepteur dolor ipsum sunt quis.',
  duration = 'unlimited',
  level = 'Beginner',
  language = 'English',
  onClick,
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={img} alt="Course preview" />
          <p className={styles.description}>{description}</p>
          <div className={styles.addInfo}>
            <span className={styles.level}>{level}</span>
            <span className={styles.duration}>
              <ClockIcon className={styles.icon} />
              {duration}
            </span>
            <span className={styles.language}>{language}</span>
          </div>
        </div>
        <div className={styles.info}>
          <article>
            <h2>{title} </h2>
            <p>{author}</p>
          </article>
          <Button variant="gradient" className={styles.infoButton} onClick={onClick}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
