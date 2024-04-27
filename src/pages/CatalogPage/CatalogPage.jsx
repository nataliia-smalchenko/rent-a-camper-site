import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'store/api';
import {
  selectAdverts,
  selectCamperById,
  selectError,
  selectIsLoading,
  selectModalShowId,
} from 'store/selectors';
import css from './CatalogPage.module.css';
import Filters from 'components/Filters/Filters';
import Error from 'components/Error/Error';
import CamperCard from 'components/CamperCard/CamperCard';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

// const CamperCard = lazy(() => import('components/CamperCard/CamperCard'));

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const showModal = useSelector(selectModalShowId);
  const selectedCamper = useSelector(selectCamperById);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const pageChange = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      <h1 className="visually-hidden">Catalog of campers</h1>
      {error && <Error />}
      {!isLoading && !error && (
        <div className={css.catalog}>
          <Filters />
          <div>
            <ul className={css.list}>
              {adverts.slice(0, page * 4).map(item => {
                return <CamperCard key={item._id} item={item}></CamperCard>;
              })}
            </ul>
            {adverts.length / 4 > page && (
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
        </div>
      )}
    </section>
  );
};

export default CatalogPage;
