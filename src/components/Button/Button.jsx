import css from './Button.module.css';

const Button = props => {
  return <button className={css.button}>{props.text}</button>;
};

export default Button;
