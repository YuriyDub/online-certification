import { IconButton } from '../IconButton';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

import styles from './Search.module.scss';

export const Search = ({ placeHolder = 'Search...', className, onChange, ...props }) => {
  return (
    <div className={styles.frame + ' ' + className} {...props}>
      <input placeholder={placeHolder} onChange={onChange} />
      <IconButton variant="inverse">
        <SearchIcon />
      </IconButton>
    </div>
  );
};
