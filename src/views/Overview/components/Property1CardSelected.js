import { useMemo } from "react";
import "./Property1CardSelected.css";

const Property1CardSelected = ({
  codePerspectiveMatte,
  webDesignDevelopment,
  showFrameDiv,
  showCodePerspectiveMatteIcon,
  property1CardSelectedWidth,
  property1CardSelectedHeight,
  property1CardSelectedPosition,
  property1CardSelectedTop,
  property1CardSelectedRight,
  property1CardSelectedBottom,
  property1CardSelectedLeft,
  rectangleDivBoxShadow,
  frameDivHeight,
  frameDivTop,
  frameDivBottom,
  frameDivGap,
  groupDivOpacity,
  webDesignContainerBackground,
  webDesignContainerWebkitBackgroundClip,
  webDesignContainerWebkitTextFillColor,
  webDesignContainerColor,
  webDesignMargin,
  webDesignPosition,
  webDesignFontSize,
  webDesignLineHeight,
  webDesignFontFamily,
  webDesignColor,
  webDesignTextAlign,
  webDesignDisplay,
  webDesignWidth,
  aWebsiteIsContainerColor,
}) => {
  const property1CardSelectedStyle = useMemo(() => {
    return {
      width: property1CardSelectedWidth,
      height: property1CardSelectedHeight,
      position: property1CardSelectedPosition,
      top: property1CardSelectedTop,
      right: property1CardSelectedRight,
      bottom: property1CardSelectedBottom,
      left: property1CardSelectedLeft,
    };
  }, [
    property1CardSelectedWidth,
    property1CardSelectedHeight,
    property1CardSelectedPosition,
    property1CardSelectedTop,
    property1CardSelectedRight,
    property1CardSelectedBottom,
    property1CardSelectedLeft,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      boxShadow: rectangleDivBoxShadow,
    };
  }, [rectangleDivBoxShadow]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      top: frameDivTop,
      bottom: frameDivBottom,
    };
  }, [frameDivHeight, frameDivTop, frameDivBottom]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const groupDiv1Style = useMemo(() => {
    return {
      opacity: groupDivOpacity,
    };
  }, [groupDivOpacity]);

  const webDesignContainerStyle = useMemo(() => {
    return {
      background: webDesignContainerBackground,
      webkitBackgroundClip: webDesignContainerWebkitBackgroundClip,
      webkitTextFillColor: webDesignContainerWebkitTextFillColor,
      color: webDesignContainerColor,
    };
  }, [
    webDesignContainerBackground,
    webDesignContainerWebkitBackgroundClip,
    webDesignContainerWebkitTextFillColor,
    webDesignContainerColor,
  ]);

  const webDesignStyle = useMemo(() => {
    return {
      margin: webDesignMargin,
      position: webDesignPosition,
      fontSize: webDesignFontSize,
      lineHeight: webDesignLineHeight,
      fontFamily: webDesignFontFamily,
      color: webDesignColor,
      textAlign: webDesignTextAlign,
      display: webDesignDisplay,
      width: webDesignWidth,
    };
  }, [
    webDesignMargin,
    webDesignPosition,
    webDesignFontSize,
    webDesignLineHeight,
    webDesignFontFamily,
    webDesignColor,
    webDesignTextAlign,
    webDesignDisplay,
    webDesignWidth,
  ]);

  const aWebsiteIsContainerStyle = useMemo(() => {
    return {
      color: aWebsiteIsContainerColor,
    };
  }, [aWebsiteIsContainerColor]);

  return (
    <div className="property-1card-selected" style={property1CardSelectedStyle}>
      <div className="card-wrapper">
        <div className="card-wrapper-child" style={rectangleDiv1Style} />
      </div>
      {showFrameDiv && (
        <div className="frame-parent" style={frameDivStyle}>
          <div className="group-parent" style={frameDiv1Style}>
            <div className="ellipse-parent" style={groupDiv1Style}>
              <div className="group-child" />
              {showCodePerspectiveMatteIcon && (
                <img
                  className="code-perspective-matte-icon"
                  alt=""
                  src={codePerspectiveMatte}
                />
              )}
            </div>
            <div
              className="web-design-container"
              style={webDesignContainerStyle}
            >
              <p className="web-design" style={webDesignStyle}>
                {webDesignDevelopment}
              </p>
            </div>
          </div>
          <div
            className="a-website-is-container"
            style={aWebsiteIsContainerStyle}
          >
            <p className="web-design">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we
            </p>
            <p className="web-design">live in a digital age.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property1CardSelected;
