import Input from 'components/Input/Input';
import sprite from '../../images/sprite.svg';
import css from './Filters.module.css';

const Filters = props => {
  return (
    <form className={css.form}>
      <Input
        label="Location"
        type="text"
        placeholder="City"
        location="true"
        icon={sprite + '#icon-map-pin'}
      />
    </form>
  );
};

export default Filters;
