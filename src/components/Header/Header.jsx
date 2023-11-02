import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AccountButtonGroup } from '../AccountButtonGroup';
import { AuthButtonGroup } from '../AuthButtonGroup';
import { Container } from '../UI/Container';
import { IconButton } from '../UI/IconButton';
import { Search } from '../Search';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { setSearch } from '../../store/slices/homeSlice';
import styles from './Header.module.scss';

export const Header = () => {
  const isAuth = useSelector((store) => store.auth.isAuth);

  const searchLine = useSelector((state) => state.home.searchLine);

  const dispatch = useDispatch();

  const changeSearchLine = (searchLine) => {
    dispatch(setSearch(searchLine));
  };

  return (
    <header className={styles.header}>
      <Container style={{ gap: '5px' }}>
        <div className={styles.tooltip}>
          <NavLink to="/">
            <IconButton>
              <LogoIcon />
            </IconButton>
          </NavLink>
          <Search
            className={styles.search}
            value={searchLine}
            onChange={(e) => changeSearchLine(e.target.value)}
          />
          {isAuth ? <AccountButtonGroup /> : <AuthButtonGroup />}
        </div>
        <Search className={styles.searchMobile} />
      </Container>
    </header>
  );
};
