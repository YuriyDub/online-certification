import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

import styles from './App.module.scss';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
