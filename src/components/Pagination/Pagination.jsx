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
      <Divider />
      <Button inactive={!isPrev} onClick={prevPage}>
        prev
      </Button>
      <div className={styles.number}>{page}</div>
      <Button inactive={!isNext} onClick={nextPage}>
        next
      </Button>
      <Divider />
    </div>
  );
};
