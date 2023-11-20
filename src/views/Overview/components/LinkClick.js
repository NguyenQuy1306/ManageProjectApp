import "./LinkClick.css";

const LinkClick = ({ buttonText }) => {
  return (
    <div className="link-click">
      <div className="see-more-informations">{buttonText}</div>
      <img
        className="arrow-right-line-icon1"
        alt=""
        src="/arrowrightline1.svg"
      />
    </div>
  );
};

export default LinkClick;
