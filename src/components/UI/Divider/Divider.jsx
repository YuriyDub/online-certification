import styles from './Divider.module.scss';

export const Divider = ({ orientation = 'horizontal' }) => {
  return <hr className={`${styles.divider} ${styles[orientation]}`} />;
};
