import styles from './Loader.module.scss';

export const Loader = ({ className, variant }) => {
  return (
    <div className={`${styles.loader} ${className} ${styles[variant]}`}>
      <h3>Loading</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        className={styles.spinner}
        viewBox="0 0 32 32">
        <path
          className={styles.bg}
          d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24"
        />
        <path
          className={styles.fg}
          d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4V0zm0 32A16 16 0 0 1 0 16h4a12 12 0 0 0 12 12v4z"
        />
      </svg>
    </div>
  );
};
