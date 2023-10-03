import { Container } from '../../components/UI/Container';

import banner from '../../assets/img/banner3.jpg';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Container className={styles.banner}>
        <h1>PASS QUALIFICATION ON OUT PORTAL</h1>
        <img src={banner} alt="Background" />
      </Container>
    </div>
  );
};
