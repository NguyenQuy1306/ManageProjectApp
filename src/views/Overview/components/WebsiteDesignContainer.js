import { useMemo } from "react";
import Property1Default from "./Property1Default";
import "./WebsiteDesignContainer.css";

const WebsiteDesignContainer = ({
  propTop,
  propHeight,
  propBackgroundColor,
  propHeight1,
  propBackgroundColor1,
  propHeight2,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      height: propHeight1,
    };
  }, [propBackgroundColor, propHeight1]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      height: propHeight2,
    };
  }, [propBackgroundColor1, propHeight2]);

  return (
    <div className="card-wrapper-parent" style={groupDiv2Style}>
      <Property1Default
        showRectangleDiv={false}
        property1DefaultWidth="723px"
        property1DefaultHeight="399px"
        property1DefaultPosition="absolute"
        property1DefaultTop="0px"
        property1DefaultLeft="0px"
        property1DefaultBorderRadius="0px var(--br-11xl) var(--br-11xl) 0px"
        property1DefaultBackgroundColor="#f1f2ff"
        property1DefaultBorder="1px solid var(--shade-primary-lite-bg)"
        property1DefaultBoxSizing="border-box"
        rectangleDivBorderRadius="0px var(--br-3xs) var(--br-3xs) 0px"
      />
      <div className="frame-parent5" style={frameDiv2Style}>
        <div className="website-design-for-scfc-canada-parent">
          <div className="website-design-for">
            Website Design for SCFC Canada
          </div>
          <div className="born-out-of">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="raed-more-parent2">
            <div className="raed-more4">Raed more</div>
            <img
              className="arrow-right-s-line-icon7"
              alt=""
              src="/arrowrightsline1.svg"
            />
            <img
              className="arrow-right-circle-fill-icon4"
              alt=""
              src="/arrowrightcirclefill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesignContainer;
