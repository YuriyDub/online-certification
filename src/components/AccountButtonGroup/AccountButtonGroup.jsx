import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/authSlice';
import { IconButton } from '../UI/IconButton';
import { Button } from '../UI/Button';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import styles from './AccountButtonGroup.module.scss';
import { Link } from 'react-router-dom';

export const AccountButtonGroup = () => {
  const dispatch = useDispatch();

  const resetAuth = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.group}>
      <Link to="/account">
        <IconButton>
          <AccountIcon />
        </IconButton>
      </Link>
      <Button onClick={resetAuth}>Log out</Button>
    </div>
  );
};
