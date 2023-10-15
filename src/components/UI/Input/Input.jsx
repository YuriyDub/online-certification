import styles from './Input.module.scss';

export const Input = ({
  placeHolder = 'Input field',
  errorMessage = null,
  label,
  className,
  ...props
}) => {
  return (
    <div style={{ position: 'relative' }}>
      {label ? <label className={styles.label}>{label}:</label> : label}
      <div className={`${styles.frame} ${className}`}>
        <input placeholder={placeHolder} {...props} />
      </div>
      {errorMessage ? <label className={styles.errorMessage}>*{errorMessage}</label> : null}
    </div>
  );
};
