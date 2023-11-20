import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  showRectangleDiv,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBorderRadius,
  property1DefaultBackgroundColor,
  property1DefaultBorder,
  property1DefaultBoxSizing,
  rectangleDivBorderRadius,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      borderRadius: property1DefaultBorderRadius,
      backgroundColor: property1DefaultBackgroundColor,
      border: property1DefaultBorder,
      boxSizing: property1DefaultBoxSizing,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBorderRadius,
    property1DefaultBackgroundColor,
    property1DefaultBorder,
    property1DefaultBoxSizing,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBorderRadius]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      {showRectangleDiv && (
        <div className="property-1default-child" style={rectangleDivStyle} />
      )}
    </div>
  );
};

export default Property1Default;
