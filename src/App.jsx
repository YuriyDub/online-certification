import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

import styles from './App.module.scss';
import { HomePage } from './pages/HomePage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
