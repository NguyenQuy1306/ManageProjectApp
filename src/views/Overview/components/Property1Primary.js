import { useMemo } from "react";
import "./Property1Primary.css";

const Property1Primary = ({
  property1PrimaryBackgroundColor,
  property1PrimaryCursor,
  onBtnPrimaryContainerClick,
}) => {
  const property1PrimaryStyle = useMemo(() => {
    return {
      backgroundColor: property1PrimaryBackgroundColor,
      cursor: property1PrimaryCursor,
    };
  }, [property1PrimaryBackgroundColor, property1PrimaryCursor]);

  return (
    <div
      className="property-1primary"
      style={property1PrimaryStyle}
      onClick={onBtnPrimaryContainerClick}
    >
      <div className="lets-get-started">Let’s get started!</div>
    </div>
  );
};

export default Property1Primary;
