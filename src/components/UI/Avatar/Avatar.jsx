import styles from './Avatar.module.scss';
import placeholder from '../../../assets/img/placeholder.jpg';

export const Avatar = ({ imgUrl = placeholder, size, ...params }) => {
  return (
    <div className={`${styles.border} ${styles[size]}`} {...params}>
      <div className={styles.avatar}>
        <img src={imgUrl} alt="avatar" />
      </div>
    </div>
  );
};
