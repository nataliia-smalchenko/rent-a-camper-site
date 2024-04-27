import css from './Features.module.css';
import Tag from 'components/Tag/Tag';

const Feautures = props => {
  return (
    <div className={css.features}>
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
    </div>
  );
};
export default Feautures;
