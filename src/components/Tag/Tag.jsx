import css from './Tag.module.css';

import sprite from '../../images/sprite.svg';

const Tag = props => {
  return (
    <div className={css.tag}>
      <svg className={css.icon} width="20" height="20">
        <use href={sprite + props.icon} />
      </svg>
      <span>{props.text}</span>
    </div>
  );
};

export default Tag;
