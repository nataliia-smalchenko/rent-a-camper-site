import CamperCard from 'components/CamperCard/CamperCard';
import { useEffect, useState } from 'react';
import css from './FavoritesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectModalShowId,
  selectVisibleAdverts,
} from 'store/selectors';
import Button from 'components/Button/Button';
import { fetchAdverts } from 'store/api';
import Modal from 'components/Modal/Modal';

const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const visibleAdverts = useSelector(selectVisibleAdverts);
  const dispatch = useDispatch();
  const showModal = useSelector(selectModalShowId);
  const selectedCamper = useSelector(selectCamperById);

  const pageChange = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <section>
      <h1 className="visually-hidden">Favorite campers</h1>
      <div className={css['list-wrapper']}>
        <ul className={css.list}>
          {visibleAdverts.slice(0, page * 4).map(item => {
            return <CamperCard key={item._id} item={item}></CamperCard>;
          })}
        </ul>
        {visibleAdverts.length / 4 > page && (
          <Button
            class={css.button}
            text="Load more"
            type="button"
            loadMore="true"
            onClick={pageChange}
          />
        )}
      </div>
      {showModal && <Modal item={selectedCamper} />}
    </section>
  );
};

export default FavoritesPage;
