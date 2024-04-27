import Input from 'components/Input/Input';
import css from './Form.module.css';
import Button from 'components/Button/Button';

const Form = () => {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>

      <Input
        class={css.input}
        type="text"
        name="name"
        pattern="[A-Za-zА-Яа-яЁё\s]+"
        placeholder="Name"
        required={true}
      />
      <Input
        class={css.input}
        type="email"
        name="email"
        placeholder="Email"
        required={true}
      />

      <Input
        class={css.input}
        type="date"
        name="date"
        placeholder="Booking date"
        required={true}
      />
      <textarea
        className={css.textarea}
        name="comment"
        id="comment"
        placeholder="Comment"
      ></textarea>
      <Button type="submit" text="Send" />
    </form>
  );
};

export default Form;
