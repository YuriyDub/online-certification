import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/banner.jpg';
import { Divider } from '../UI/Divider';
import { Button } from '../UI/Button';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  description = 'Amet conseqeuat do irue aliqua labore do exesdrcitation est velit condectetur et.',
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <img src={img} alt="Course preview" />
        <article>
          <h2>{title} </h2>
          <Divider />
          <p>{description}</p>
          <Button variant="gradient" className={styles.detailsButton}>
            Details
          </Button>
        </article>
      </div>
    </div>
  );
};
