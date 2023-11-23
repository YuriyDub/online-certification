import styles from './CourseCard.module.scss';
import placeholder from '../../assets/img/placeholder.jpg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { Button } from '../UI/Button';
import { Divider } from '../UI/Divider';

export const CourseCard = ({
  img = placeholder,
  title = 'New Course',
  author = 'Ivan Ivanov',
  description = 'Nostrud laboris ea eiusmod ullamco sunt veniam excepteur dolor ipsum sunt quis.',
  duration = 'unlimited',
  level = 'Beginner',
  onClick,
}) => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={img} alt="Course preview" />
			 <Divider/>
          <p className={styles.description}>
            {description}
            <div className={styles.addInfo}>
              <span className={styles.level}>{level}</span>
              <span className={styles.duration}>
                <ClockIcon className={styles.icon} />
                {duration}
              </span>
            </div>
          </p>
        </div>
        <div className={styles.info}>
          <article>
            <h2>{title} </h2>
            <span>{author}</span>
          </article>
          <Button variant="gradient" className={styles.infoButton} onClick={onClick}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
