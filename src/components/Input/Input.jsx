import css from './Input.module.css';

const Input = props => {
  console.log(props.location !== 'undefined');
  return props.location !== 'undefined' ? (
    <input
      className={css.input}
      type={props.type}
      name={props.name}
      pattern={props.pattern}
      placeholder={props.placeholder}
    ></input>
  ) : (
    <>
      <label htmlFor="location"></label>
      <input
        className={css.s}
        name="location"
        type={props.type}
        pattern={props.pattern}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};

export default Input;
