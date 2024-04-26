import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.header}>
        Explore the Great Outdoors: Premier Camper Rentals for Your Next
        Adventure
      </h1>
      <Link className={css.link} to="/catalog">
        Open catalog
      </Link>
    </section>
  );
};

export default HomePage;
