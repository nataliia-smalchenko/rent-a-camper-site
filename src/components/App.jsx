import { selectAdverts } from 'store/selectors';

export const App = () => {
  return <div>{console.log(selectAdverts)}</div>;
};
