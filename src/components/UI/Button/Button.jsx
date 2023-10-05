import styles from './Button.module.scss';

export const Button = ({ children, variant = 'default', className, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
