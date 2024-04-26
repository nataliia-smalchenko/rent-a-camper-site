import Input from 'components/Input/Input';

const Filters = props => {
  return (
    <Input
      type="text"
      placeholder="City"
      location="true"
      icon="#icon-map-pin"
    />
  );
};

export default Filters;
