import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../components/UI/Button';
import { Container } from '../../components/UI/Container';
import { Input } from '../../components/UI/Input/Input';

import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    onSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const submitHandler = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <h2>Sign up</h2>
          <Controller
            name="username"
            control={control}
            rules={{
              required: 'username is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                message: 'incorrect email address',
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
                errorMessage={errors?.email?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                message: 'incorrect email address',
              },
            }}
            defaultValue=""
            render={({ field }) => (
              <Input
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                placeHolder="email"
                label="email"
                errorMessage={errors?.email?.message}
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
