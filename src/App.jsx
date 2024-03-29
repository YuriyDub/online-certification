import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { AccountPage } from './pages/AccountPage';
import { CoursePage } from './pages/CoursePage';
import { EnrolledCoursePage } from './pages/EnrolledCoursePage';
import styles from './App.module.scss';
import { LessonPage } from './pages/LessonPage';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/enrolled-courses/:id" element={<EnrolledCoursePage />} />
        <Route path="/enrolled-courses/:courseId/lesson/:id" element={<LessonPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<AccountPage />} />
      </Routes>
    </div>
  );
};

export default App;
