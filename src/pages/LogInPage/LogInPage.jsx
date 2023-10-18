import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../store/slices/authSlice';
import { Button } from '../../components/UI/Button';
import { Container } from '../../components/UI/Container';
import { Input } from '../../components/UI/Input/Input';
import { signIn } from '../../utils/network';
import styles from './LogInPage.module.scss';

export const LogInPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    onSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const dispatch = useDispatch();

  const isAuth = useSelector((store) => store.auth.isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const handleLogIn = async (username, password) => {
    try {
      const newToken = await signIn(username, password);
      dispatch(setToken(newToken.token));
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = (data) => {
    const { username, password } = data;
    handleLogIn(username, password);
    reset();
  };

  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <h2>Log in</h2>
          <Controller
            name="username"
            control={control}
            rules={{
              required: 'username is required',
              pattern: {
                required: 'username is required',
                minLength: { value: 8, message: 'Min length is 8 symbols' },
                maxLength: { value: 20, message: 'Max length is 20 symbols' },
              },
            }}
            defaultValue=""
            render={({ field }) => (
              <Input
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeHolder="username"
                label="username"
                errorMessage={errors?.username?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'password is required',
              minLength: { value: 8, message: 'Min length is 8 symbols' },
              maxLength: { value: 20, message: 'Max length is 20 symbols' },
            }}
            defaultValue=""
            render={({ field }) => (
              <Input
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeHolder="password"
                label="password"
                errorMessage={errors?.password?.message}
              />
            )}
          />
          <Button
            variant="gradient"
            style={{ width: '100%' }}
            className={styles.submitButton}
            onClick={onSubmit}>
            Log in
          </Button>
        </form>
      </Container>
    </div>
  );
};
