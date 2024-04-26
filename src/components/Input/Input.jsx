import css from './Input.module.css';

const Input = props => {
  if (props.location === undefined) {
    return (
      <input
        className={css.input}
        type={props.type}
        name={props.name}
        pattern={props.pattern}
        placeholder={props.placeholder}
      ></input>
    );
  } else {
    return (
      <>
        <label className={css.label} htmlFor="location">
          {props.label}
        </label>
        <div className={css['input-container']}>
          <input
            className={css.input + ' ' + css['with-icon']}
            name="location"
            type={props.type}
            pattern={props.pattern}
            placeholder={props.placeholder}
          ></input>
          <svg className={css.icon} width="20" height="20">
            <use href={props.icon} />
          </svg>
        </div>
      </>
    );
  }
};

export default Input;
