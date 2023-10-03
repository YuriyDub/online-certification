import styles from './Divider.module.scss';

export const Divider = ({ variant = 'horizontal' }) => {
  return <hr className={`${styles.divider} ${styles[variant]}`} />;
};
