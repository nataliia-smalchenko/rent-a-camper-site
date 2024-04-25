const CamperCard = props => {
  return (
    <div>
      <img
        className=""
        src={props.gallery[0] ?? '../../images/no-image.jpg'}
        alt=""
      />
    </div>
  );
};

export default CamperCard;
