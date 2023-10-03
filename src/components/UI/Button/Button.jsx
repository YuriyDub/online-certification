import styles from './Button.module.scss';

export const Button = ({ children, variant = 'default', ...props }) => {
  return (
    <button className={styles.button + ' ' + styles[variant]} {...props}>
      {children}
    </button>
  );
};
