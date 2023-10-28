import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/authSlice';
import { IconButton } from '../UI/IconButton';
import { Button } from '../UI/Button';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import styles from './AccountButtonGroup.module.scss';

export const AccountButtonGroup = () => {
  const dispatch = useDispatch();

  const resetAuth = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.group}>
      <IconButton>
        <AccountIcon />
      </IconButton>
      <Button onClick={resetAuth}>Log out</Button>
    </div>
  );
};
