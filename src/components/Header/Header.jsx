import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import { IconButton } from '../UI/IconButton';
import { Search } from '../UI/Search';

import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container style={{gap: '5px'}}>
        <div className={styles.tooltip}>
          <IconButton>
            <LogoIcon />
          </IconButton>
          <Search className={styles.search} />
          <Button variant="inverse">
            Sigh in
            <AccountIcon />
          </Button>
        </div>
        <Search className={styles.searchMobile} />
      </Container>
    </header>
  );
};
