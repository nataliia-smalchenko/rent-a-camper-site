import CamperCard from 'components/CamperCard/CamperCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'store/api';
import { selectAdverts, selectError, selectIsLoading } from 'store/selectors';
import css from './CatalogPage.module.css';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Filters from 'components/Filters/Filters';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  // const [showingAdverts]
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const pageChange = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      <h1 className="visually-hidden">Catalog of campers</h1>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && !error && (
        <div className={css.catalog}>
          <Filters />
          <ul className={css.list}>
            {adverts.slice(0, page * 4).map(item => {
              return <CamperCard key={item._id} item={item}></CamperCard>;
            })}
          </ul>
        </div>
      )}
      {adverts.length / 4 > page && (
        <Button
          class={css.button}
          text="Load more"
          type="button"
          loadMore="true"
          onClick={pageChange}
        />
      )}
    </section>
  );
};

export default CatalogPage;
