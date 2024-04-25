import { Rings } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <Rings
        wrapperClass={css.loader}
        visible={true}
        height="80"
        width="80"
        color="#FFC531"
        ariaLabel="rings-loading"
      />
    </>
  );
};

export default Loader;
