import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '../UI/IconButton';
import { Button } from '../UI/Button';
import { clearToken } from '../../store/slices/authSlice';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import styles from './AccoundButtonGroup.module.scss';

export const AccountButtonGroup = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearToken());
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
