import "./PersonBadge.css";

const PersonBadge = ({ ellipse185 }) => {
  return (
    <div className="person-badge">
      <img className="person-badge-child" alt="" src={ellipse185} />
      <div className="jeewa-markram-parent">
        <div className="jeewa-markram">Jeewa markram</div>
        <div className="ceo">CEO</div>
      </div>
    </div>
  );
};

export default PersonBadge;
