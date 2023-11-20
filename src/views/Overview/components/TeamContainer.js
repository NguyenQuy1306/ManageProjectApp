import { useMemo } from "react";
import "./TeamContainer.css";

const TeamContainer = ({
  prop,
  assembleTheRightTeam,
  weHandleAllAspectsOfVetti,
  propLeft,
  propTop,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="rectangle-parent3" style={groupDiv3Style}>
      <div className="group-child9" />
      <div className="frame-parent6">
        <div className="parent">
          <b className="b">{prop}</b>
          <b className="assemble-the-right">{assembleTheRightTeam}</b>
        </div>
        <div className="we-handle-all">{weHandleAllAspectsOfVetti}</div>
      </div>
    </div>
  );
};

export default TeamContainer;
