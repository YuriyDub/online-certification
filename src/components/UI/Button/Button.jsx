import styles from './Button.module.scss';

export const Button = ({ children, variant = 'default', inactive, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className} ${inactive && styles.inactive}`}
      {...props}>
      {children}
    </button>
  );
};
