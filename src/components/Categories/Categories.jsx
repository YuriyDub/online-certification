import { v1 } from 'uuid';
import styles from './Categories.module.scss';

export const Categories = ({ categories, setCategory, category }) => {
  return (
    <section className={styles.categories}>
      {categories.map((c) => (
        <Category
          key={v1()}
          name={c}
          onClick={() => {
            setCategory(c);
          }}
          isActive={c === category}
        />
      ))}
    </section>
  );
};

export const Category = ({ name, isActive, ...props }) => {
  return (
    <div className={`${styles.category} ${isActive && styles.active}`} {...props}>
      {name}
    </div>
  );
};
