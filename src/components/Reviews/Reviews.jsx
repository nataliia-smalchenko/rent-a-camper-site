import css from './Reviews.module.css';
import sprite from '../../images/sprite.svg';

const Reviews = props => {
  const drawStars = rating => {
    const list = [];
    for (let i = 0; i < rating; i += 1) list.push(true);
    for (let i = 0; i < 5 - rating; i += 1) list.push(false);

    return (
      <ul className={css.stars}>
        {list.map(star => {
          return (
            <li>
              <svg width="16" height="16">
                <use href={sprite + (star ? '#icon-star' : '#icon-star-2')} />
              </svg>
            </li>
          );
        })}
      </ul>
    );
  };

  if (props.list.lenght === 0) {
    return <p className={css['no-review']}>No review available yet.</p>;
  }

  return (
    <ul className={css.reviews}>
      {props.list.map(review => {
        return (
          <li>
            <div className={css['author-wrapper']}>
              <div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>
              <div className={css['name-wrapper']}>
                <p>{review.reviewer_name}</p>
                {drawStars(review.reviewer_rating)}
              </div>
            </div>
            <p className={review.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
