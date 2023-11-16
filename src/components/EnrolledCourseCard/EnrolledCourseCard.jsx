import { Bar } from '../UI/Bar';
import placeholder from '../../assets/img/placeholder.jpg';
import styles from './EnrolledCourseCard.module.scss';

export const EnrolledCourseCard = ({
  imgUrl = placeholder,
  title = 'Professional React and Redux Tool Kit',
  progress = 0,
  accuracy = 100,
  category = 'Design',
  level = 'Beginner',
  description = 'Lorem ipsum sa ury jds kos de taus das, lorem ipsum sa ury jds kos de taus das, lorem ipsum sa ury jds kos de taus das, lorem ipsum sa ury jds kos de taus das',
}) => {
  return (
    <div className={styles.course}>
      <img src={placeholder} alt="Course" />
      <div className={styles.details}>
        <h3 className={styles.courseTitle}>Professional React and Redux Tool Kit</h3>
        <Bar progress={progress} />
        <div className={styles.info}>
          <div className={styles.level}>{level}</div>
          <div className={styles.category}>{category}</div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.accuracy}>Accuracy {accuracy}%</div>
      </div>
    </div>
  );
};
