import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/placeholder.jpg';
import { Button } from '../UI/Button';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  author = 'Ivan Ivanov',
  description = 'Nostrud laboris ea eiusmod ullamco sunt veniam excepteur dolor ipsum sunt quis.',
  onClick,
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={img} alt="Course preview" />
          <p className={styles.description}>{description}</p>
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
