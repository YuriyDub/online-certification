import { Button } from '../UI/Button';
import { Divider } from '../UI/Divider';

import styles from './AuthButtonGroup.module.scss';
import { NavLink } from 'react-router-dom';

export const AuthButtonGroup = () => {
  return (
    <div className={styles.group}>
      <NavLink to="/sign-in">
        <Button>Sigh in</Button>
      </NavLink>
      <NavLink to="/log-in">
        <Button>Log in</Button>
      </NavLink>
    </div>
  );
};
