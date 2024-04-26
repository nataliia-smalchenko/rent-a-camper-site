import Tag from 'components/Tag/Tag';
import sprite from '../../images/sprite.svg';
import css from './CamperCard.module.css';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from 'store/favoritesSlice';
import { selectFavorites } from 'store/selectors';
import { toggleModal } from 'store/advertsSlice';

const CamperCard = props => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const localToggleModal = () => {
    dispatch(toggleModal(props.item._id));
  };

  const toggleFavorite = () => {
    dispatch(toggleFavorites(props.item._id));
  };

  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={props.item.gallery[0] ?? '../../images/no-image.jpg'}
        alt=""
      />
      <div className={css['descr-wrapper']}>
        <div className={css['title-wrapper']}>
          <h3 className={css.title}>{props.item.name}</h3>
          <div className={css['price-wrapper']}>
            <span className={css.price}>
              {'€' + props.item.price.toFixed(2)}
            </span>
            <button className={css['favorite-button']} onClick={toggleFavorite}>
              <svg
                className={
                  favorites.includes(props.item._id)
                    ? `${css['icon-favorite']} ${css.active}`
                    : css['icon-favorite']
                }
                width="24"
                height="24"
              >
                <use href={sprite + '#icon-heart'} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css['loc-price-wrapper']}>
          <div className={css.tag}>
            <svg className={css.icon} width="16" height="16">
              <use href={sprite + '#icon-star'} />
            </svg>
            <span
              className={css.rating}
            >{`${props.item.rating} (${props.item.reviews.length} Reviews)`}</span>
          </div>
          <div className={css.tag}>
            <svg className={css.icon} width="16" height="16">
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <span>{props.item.location}</span>
          </div>
        </div>
        <p className={css.descr}>{props.item.description}</p>
        <ul className={css.details}>
          <Tag
            icon="#icon-peoples"
            text={
              props.item.adults + (props.item.adults > 1 ? ' adults' : ' adult')
            }
          />
          <Tag icon="#icon-transmission" text={props.item.transmission} />
          <Tag icon="#icon-engine" text={props.item.engine} />
          {props.item.details.kitchen > 0 && (
            <Tag icon="#icon-kitchen" text="kitchen" />
          )}
          <Tag
            icon="#icon-beds"
            text={
              props.item.details.beds +
              (props.item.details.beds > 1 ? ' beds' : ' bed')
            }
          />
          {props.item.details.airConditioner > 0 && (
            <Tag icon="#icon-air" text="AC" />
          )}
        </ul>
        <Button
          text="Show more"
          type="button"
          loadMore=""
          onClick={localToggleModal}
        />
      </div>
    </div>
  );
};

export default CamperCard;
