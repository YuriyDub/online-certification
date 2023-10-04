import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/banner.jpg';
import { Divider } from '../UI/Divider';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  description = 'Amet consequat do irue aliqua labore do exercitation est velit consectetur et.',
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <img src={img} alt="Course preview" />
        <article>
          <h2>{title} </h2>
          <Divider />
          <p>{description}</p>
        </article>
      </div>
    </div>
  );
};
