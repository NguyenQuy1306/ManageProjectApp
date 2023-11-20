import { useMemo } from "react";
import LinkClick from "./LinkClick";
import "./BlogPost.css";

const BlogPost = ({
  rectangle10,
  howToBuildAScalableApplic,
  seeMoreInformations,
  blogPostWidth,
  blogPostHeight,
  groupDivHeight,
  howToBuildFontSize,
  howToBuildFontWeight,
  howToBuildFontFamily,
  howToBuildWhiteSpace,
  howToBuildTextAlign,
  linkClickDisplay,
  linkClickFlexDirection,
  linkClickAlignItems,
  linkClickJustifyContent,
  linkClickGap,
  linkClickMargin,
  seeMoreInformationsPosition,
  seeMoreInformationsFontSize,
  seeMoreInformationsLineHeight,
  seeMoreInformationsFontWeight,
  seeMoreInformationsColor,
  seeMoreInformationsTextAlign,
  seeMoreInformationsDisplay,
  arrowRightLineIconPosition,
  arrowRightLineIconWidth,
  arrowRightLineIconHeight,
  arrowRightLineIconOverflow,
  arrowRightLineIconFlexShrink,
}) => {
  const blogPostStyle = useMemo(() => {
    return {
      width: blogPostWidth,
      height: blogPostHeight,
    };
  }, [blogPostWidth, blogPostHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const howToBuildStyle = useMemo(() => {
    return {
      fontSize: howToBuildFontSize,
      fontWeight: howToBuildFontWeight,
      fontFamily: howToBuildFontFamily,
      whiteSpace: howToBuildWhiteSpace,
      textAlign: howToBuildTextAlign,
    };
  }, [
    howToBuildFontSize,
    howToBuildFontWeight,
    howToBuildFontFamily,
    howToBuildWhiteSpace,
    howToBuildTextAlign,
  ]);

  const linkClickStyle = useMemo(() => {
    return {
      display: linkClickDisplay,
      flexDirection: linkClickFlexDirection,
      alignItems: linkClickAlignItems,
      justifyContent: linkClickJustifyContent,
      gap: linkClickGap,
      margin: linkClickMargin,
    };
  }, [
    linkClickDisplay,
    linkClickFlexDirection,
    linkClickAlignItems,
    linkClickJustifyContent,
    linkClickGap,
    linkClickMargin,
  ]);

  const seeMoreInformationsStyle = useMemo(() => {
    return {
      position: seeMoreInformationsPosition,
      fontSize: seeMoreInformationsFontSize,
      lineHeight: seeMoreInformationsLineHeight,
      fontWeight: seeMoreInformationsFontWeight,
      color: seeMoreInformationsColor,
      textAlign: seeMoreInformationsTextAlign,
      display: seeMoreInformationsDisplay,
    };
  }, [
    seeMoreInformationsPosition,
    seeMoreInformationsFontSize,
    seeMoreInformationsLineHeight,
    seeMoreInformationsFontWeight,
    seeMoreInformationsColor,
    seeMoreInformationsTextAlign,
    seeMoreInformationsDisplay,
  ]);

  const arrowRightLineIconStyle = useMemo(() => {
    return {
      position: arrowRightLineIconPosition,
      width: arrowRightLineIconWidth,
      height: arrowRightLineIconHeight,
      overflow: arrowRightLineIconOverflow,
      flexShrink: arrowRightLineIconFlexShrink,
    };
  }, [
    arrowRightLineIconPosition,
    arrowRightLineIconWidth,
    arrowRightLineIconHeight,
    arrowRightLineIconOverflow,
    arrowRightLineIconFlexShrink,
  ]);

  return (
    <div className="blog-post" style={blogPostStyle}>
      <div className="rectangle-parent">
        <img className="frame-child" alt="" src={rectangle10} />
        <div
          className="how-to-build-a-scalable-applic-wrapper"
          style={groupDivStyle}
        >
          <div className="how-to-build" style={howToBuildStyle}>
            {howToBuildAScalableApplic}
          </div>
        </div>
      </div>
      <LinkClick buttonText="Read More" />
    </div>
  );
};

export default BlogPost;
