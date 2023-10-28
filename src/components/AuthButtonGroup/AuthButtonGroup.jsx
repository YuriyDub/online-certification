import { Button } from '../UI/Button';
import { NavLink } from 'react-router-dom';

import styles from './AuthButtonGroup.module.scss';

export const AuthButtonGroup = () => {
  return (
    <div className={styles.group}>
      <NavLink to="/signup">
        <Button>Sigh up</Button>
      </NavLink>
      <NavLink to="/login">
        <Button>Log in</Button>
      </NavLink>
    </div>
  );
};
