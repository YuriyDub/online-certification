import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/authSlice';
import { Button } from '../UI/Button';
import styles from './AccountButtonGroup.module.scss';
import { Link } from 'react-router-dom';
import { Avatar } from '../UI/Avatar';

export const AccountButtonGroup = () => {
  const dispatch = useDispatch();

  const resetAuth = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.group}>
      <Button onClick={resetAuth}>Log out</Button>
      <Link
        to="/account"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar size="small" />
      </Link>
    </div>
  );
};
