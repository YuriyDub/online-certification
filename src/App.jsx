import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { CoursePage } from './pages/CoursePage';
import { refreshAuth } from './store/slices/authSlice';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  console.log(`Bearer ${JSON.parse(localStorage.getItem('persist:auth')).token}`);

  useEffect(() => {
    if (localStorage.getItem('persist:auth')) {
      dispatch(refreshAuth());
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
