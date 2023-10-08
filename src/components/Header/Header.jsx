import { Container } from '../UI/Container';
import { IconButton } from '../UI/IconButton';
import { Search } from '../Search';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { AuthButtonGroup } from '../AuthButtonGroup';

export const Header = () => {
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
          <AuthButtonGroup />
        </div>
        <Search className={styles.searchMobile} />
      </Container>
    </header>
  );
};
