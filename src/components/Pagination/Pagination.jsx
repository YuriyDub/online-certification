import { Divider } from '../UI/Divider';
import { Button } from '../UI/Button';
import styles from './Pagination.module.scss';

export const Pagination = ({ isPrev, isNext, page, setPage }) => {
  const nextPage = () => {
    isNext && setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    isPrev && setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.pagination}>
      <Divider variant="horizontal solid" />
      <div className={styles.display}>
        <Button inactive={!isPrev} onClick={prevPage} variant="inverse">
          prev
        </Button>
        <div className={styles.number}>{page}</div>
        <Button inactive={!isNext} onClick={nextPage} variant="inverse">
          next
        </Button>
      </div>
      <Divider variant="solid" />
    </div>
  );
};
