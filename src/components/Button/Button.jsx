import css from './Button.module.css';

const Button = props => {
  return (
    <button
      className={
        props.class + ' ' + (props.loadMore ? css['load-more'] : css.button)
      }
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
