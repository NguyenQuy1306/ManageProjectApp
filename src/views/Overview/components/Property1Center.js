import { useMemo } from "react";
import "./Property1Center.css";

const Property1Center = ({
  leadingCompaniesTrustUs,
  property1CenterJustifyContent,
  property1CenterGap,
  property1CenterWidth,
  property1CenterHeight,
  property1CenterPosition,
  property1CenterTop,
  property1CenterLeft,
  leadingCompaniesTrustMargin,
  toDevelopSoftwareFontFamily,
  toDevelopSoftwareFontWeight,
}) => {
  const property1CenterStyle = useMemo(() => {
    return {
      justifyContent: property1CenterJustifyContent,
      gap: property1CenterGap,
      width: property1CenterWidth,
      height: property1CenterHeight,
      position: property1CenterPosition,
      top: property1CenterTop,
      left: property1CenterLeft,
    };
  }, [
    property1CenterJustifyContent,
    property1CenterGap,
    property1CenterWidth,
    property1CenterHeight,
    property1CenterPosition,
    property1CenterTop,
    property1CenterLeft,
  ]);

  const leadingCompaniesTrustStyle = useMemo(() => {
    return {
      margin: leadingCompaniesTrustMargin,
    };
  }, [leadingCompaniesTrustMargin]);

  const toDevelopSoftwareStyle = useMemo(() => {
    return {
      fontFamily: toDevelopSoftwareFontFamily,
      fontWeight: toDevelopSoftwareFontWeight,
    };
  }, [toDevelopSoftwareFontFamily, toDevelopSoftwareFontWeight]);

  return (
    <div className="property-1center" style={property1CenterStyle}>
      <div className="deco-line" />
      <div className="leading-companies-trust-container">
        <span style={leadingCompaniesTrustStyle}>
          {leadingCompaniesTrustUs}
        </span>
        <b style={toDevelopSoftwareStyle}> to develop software</b>
      </div>
    </div>
  );
};

export default Property1Center;
