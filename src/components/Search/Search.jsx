import { IconButton } from '../UI/IconButton';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import styles from './Search.module.scss';

export const Search = ({ placeHolder = 'Search...', className, onChange, value, ...props }) => {
  return (
    <div className={`${styles.frame} ${className}`} {...props}>
      <input placeholder={placeHolder} onChange={onChange} value={value} />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};
