import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AccountButtonGroup } from '../AccountButtonGroup';
import { AuthButtonGroup } from '../AuthButtonGroup';
import { Container } from '../UI/Container';
import { IconButton } from '../UI/IconButton';
import { Search } from '../Search';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  const isAuth = useSelector((store) => store.auth.isAuth);

  return (
    <header className={styles.header}>
      <Container style={{ gap: '5px' }}>
        <div className={styles.tooltip}>
          <NavLink to="/">
            <IconButton>
              <LogoIcon />
            </IconButton>
          </NavLink>
          <Search className={styles.search} />
          {isAuth ? <AccountButtonGroup /> : <AuthButtonGroup />}
        </div>
        <Search className={styles.searchMobile} />
      </Container>
    </header>
  );
};
