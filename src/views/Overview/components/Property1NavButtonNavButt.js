import { useMemo } from "react";
import "./Property1NavButtonNavButt.css";

const Property1NavButtonNavButt = ({
  contactUs,
  property1NavButtonNavButtBackground,
  property1NavButtonNavButtPosition,
  property1NavButtonNavButtTop,
  property1NavButtonNavButtLeft,
  property1NavButtonNavButtBorder,
  property1NavButtonNavButtWidth,
  property1NavButtonNavButtHeight,
  property1NavButtonNavButtCursor,
  contactUsFontSize,
  contactUsLineHeight,
  contactUsFontWeight,
  onNavButtonContainerClick,
}) => {
  const property1NavButtonNavButtStyle = useMemo(() => {
    return {
      background: property1NavButtonNavButtBackground,
      position: property1NavButtonNavButtPosition,
      top: property1NavButtonNavButtTop,
      left: property1NavButtonNavButtLeft,
      border: property1NavButtonNavButtBorder,
      width: property1NavButtonNavButtWidth,
      height: property1NavButtonNavButtHeight,
      cursor: property1NavButtonNavButtCursor,
    };
  }, [
    property1NavButtonNavButtBackground,
    property1NavButtonNavButtPosition,
    property1NavButtonNavButtTop,
    property1NavButtonNavButtLeft,
    property1NavButtonNavButtBorder,
    property1NavButtonNavButtWidth,
    property1NavButtonNavButtHeight,
    property1NavButtonNavButtCursor,
  ]);

  const contactUsStyle = useMemo(() => {
    return {
      fontSize: contactUsFontSize,
      lineHeight: contactUsLineHeight,
      fontWeight: contactUsFontWeight,
    };
  }, [contactUsFontSize, contactUsLineHeight, contactUsFontWeight]);

  return (
    <div
      className="property-1nav-buttonnav-butt"
      style={property1NavButtonNavButtStyle}
      onClick={onNavButtonContainerClick}
    >
      <div className="contact-us1" style={contactUsStyle}>
        {contactUs}
      </div>
    </div>
  );
};

export default Property1NavButtonNavButt;
