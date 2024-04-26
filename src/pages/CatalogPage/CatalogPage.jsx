import Button from 'components/Button/Button';
import CamperCard from 'components/CamperCard/CamperCard';
import Tag from 'components/Tag/Tag';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'store/api';
import { selectAdverts, selectError, selectIsLoading } from 'store/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);

  console.log(adverts);
  return (
    <section>
      <h1 className="visually-hidden">Catalog of campers</h1>
      <Tag icon="#icon-air" text="AC"></Tag>
      <Tag icon="#icon-air" text="AC"></Tag>
      <Button text="Search"></Button>
      <ul>
        {!isLoading &&
          !error &&
          adverts.map(item => {
            return <CamperCard key={item._id} item={item}></CamperCard>;
          })}
      </ul>
    </section>
  );
};

export default CatalogPage;
