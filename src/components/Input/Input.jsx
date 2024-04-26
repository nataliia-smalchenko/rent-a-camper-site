import css from './Input.module.css';

const Input = props => {
  return props.location != 'undefined' ? (
    <input
      className={css.input}
      type={props.type}
      pattern={props.pattern}
      placeholder={props.placeholder}
    ></input>
  ) : (
    <>
      <label htmlFor="location"></label>
      <input
        className={css.input + ' ' + css.s}
        name="location"
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};

export default Input;
