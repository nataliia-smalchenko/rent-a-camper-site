import sprite from '../../images/sprite.svg';
import css from './CamperCard.moodule.css';

const CamperCard = props => {
  console.log(props.item);
  return (
    <div>
      <img
        className=""
        src={props.item.gallery[0] ?? '../../images/no-image.jpg'}
        alt=""
      />
      <h3>{props.item.name}</h3>
      <div>
        <svg className={css.icon} width="16" height="16">
          <use href={sprite + '#icon-star'} />
        </svg>
        <span>{`${props.item.rating} (${props.item.reviews.length} Reviews)`}</span>
      </div>
      <div>
        <svg className={css.icon} width="16" height="16">
          <use href={sprite + '#icon-map-pin'} />
        </svg>
        <span>{props.item.location}</span>
      </div>
    </div>
  );
};

export default CamperCard;
