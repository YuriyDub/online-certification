import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '../UI/IconButton';
import { Button } from '../UI/Button';
import { clearAuth } from '../../store/slices/authSlice';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import styles from './AccountButtonGroup.module.scss';

export const AccountButtonGroup = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearAuth());
  };

  return (
    <div className={styles.group}>
      <IconButton>
        <AccountIcon />
      </IconButton>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
};
