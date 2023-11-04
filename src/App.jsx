import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { AccountPage } from './pages/AccountPage';
import { CoursePage } from './pages/CoursePage';
import { refreshAuth } from './store/slices/authSlice';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
};

export default App;
