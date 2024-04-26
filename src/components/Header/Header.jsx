import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Header.module.css';
import Loader from 'components/Loader/Loader';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css['nav-list']}>
            <li>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
