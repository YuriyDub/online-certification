import styles from './Avatar.module.scss';
import placeholder from '../../../assets/img/placeholder.jpg';

export const Avatar = ({ imgUrl = placeholder }) => {
  return (
    <div className={styles.border}>
      <div className={styles.avatar}>
        <img src={imgUrl} alt="avatar" />
      </div>
    </div>
  );
};
