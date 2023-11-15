import styles from './Bar.module.scss';

export const Bar = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
