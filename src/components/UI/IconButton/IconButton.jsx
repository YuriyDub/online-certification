import styles from './IconButton.module.scss';

export const IconButton = ({
  children,
  variant = 'default',
  size = 'normal',
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.iconButton} + ' ' + ${styles[variant]} + ${styles[size]} + ${className}`}
      {...props}>
      {children}
    </button>
  );
};
