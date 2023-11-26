import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/slices/authSlice';
import { Button } from '../UI/Button';
import styles from './AccountButtonGroup.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '../UI/Avatar';

export const AccountButtonGroup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const resetAuth = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div className={styles.group}>
      <Button onClick={resetAuth}>Log out</Button>
      <Link
        to="/profile"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar size="small" imgUrl={user.avatar} />
      </Link>
    </div>
  );
};
