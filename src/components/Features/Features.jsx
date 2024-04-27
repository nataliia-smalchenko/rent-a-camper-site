import css from './Features.module.css';
import Tag from 'components/Tag/Tag';

const Feautures = props => {
  return (
    <div className={css.features}>
      <ul className={css.tags}>
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
        {props.item.details.TV > 0 && <Tag icon="#icon-tv" text="TV" />}
        {props.item.details.CD > 0 && <Tag icon="#icon-cd" text="CD" />}
        {props.item.details.radio > 0 && (
          <Tag icon="#icon-radio" text="radio" />
        )}
        <Tag
          icon="#icon-hob"
          text={
            props.item.details.hob +
            (props.item.details.hob > 1 ? ' hobs' : ' hob')
          }
        />
        {props.item.details.toilet > 0 && (
          <Tag icon="#icon-toilet-paper" text="toilet" />
        )}
        {props.item.details.shower > 0 && (
          <Tag icon="#icon-shower" text="shower" />
        )}
        {props.item.details.freezer > 0 && (
          <Tag icon="#icon-freezer" text="freezer" />
        )}
        {props.item.details.microwave > 0 && (
          <Tag icon="#icon-microwave" text="microwave" />
        )}
        {props.item.details.gas && <Tag icon="#icon-gas" text="gas" />}
        {props.item.details.water && <Tag icon="#icon-water" text="water" />}
      </ul>
      <h3 className={css['details-title']}>Vehicle details</h3>
      <hr className={css.line} />
      <ul className={css['details-list']}>
        <li className={css['details-item']}>
          <span>Form</span>
          <span className={css.detail}>{props.item.form}</span>
        </li>
        <li className={css['details-item']}>
          <span>Length</span>
          <span className={css.detail}>{props.item.length}</span>
        </li>
        <li className={css['details-item']}>
          <span>Width</span>
          <span className={css.detail}>{props.item.width}</span>
        </li>
        <li className={css['details-item']}>
          <span>Height</span>
          <span className={css.detail}>{props.item.height}</span>
        </li>
        <li className={css['details-item']}>
          <span>Tank</span>
          <span className={css.detail}>{props.item.tank}</span>
        </li>
        <li className={css['details-item']}>
          <span>Consumption</span>
          <span className={css.detail}>{props.item.consumption}</span>
        </li>
      </ul>
    </div>
  );
};
export default Feautures;
