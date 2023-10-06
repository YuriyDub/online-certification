import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/banner.jpg';
import { Button } from '../UI/Button';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  description = 'Ivan Ivanov',
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <img src={img} alt="Course preview" />
        <div className={styles.description}>
          <article>
            <h2>{title} </h2>
            <p>{description}</p>
          </article>
          <Button variant="gradient" className={styles.detailsButton}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
