import styles from './IconButton.module.scss';

export const IconButton = ({ children, variant = 'default', ...props }) => {
  return (
    <button className={styles.iconButton + ' ' + styles[variant]} {...props}>
      {children}
    </button>
  );
};
