import { useMemo } from "react";
import Property1CardSelected from "./Property1CardSelected";
import "./CardCarousel.css";

const CardCarousel = ({
  codePerspectiveMatte,
  webDesignDevelopment,
  aWebsiteIsAnExtensionOfYo,
  codePerspectiveMatte1,
  webDesignDevelopment1,
  aWebsiteIsAnExtensionOfYo1,
  showCodePerspectiveMatteIcon,
  showGroupDiv,
  cardCarouselPosition,
  cardCarouselTop,
  cardCarouselLeft,
  groupDivOpacity,
  webDesignMargin,
  webDesignPosition,
  webDesignFontSize,
  webDesignLineHeight,
  webDesignFontFamily,
  webDesignColor,
  webDesignTextAlign,
  webDesignDisplay,
  webDesignWidth,
  aWebsiteIsPosition,
  aWebsiteIsFontSize,
  aWebsiteIsLineHeight,
  aWebsiteIsFontFamily,
  aWebsiteIsColor,
  aWebsiteIsTextAlign,
  aWebsiteIsDisplay,
  aWebsiteIsWidth,
  aWebsiteIsHeight,
  aWebsiteIsTop,
  aWebsiteIsRight,
  aWebsiteIsBottom,
  aWebsiteIsLeft,
  serviceCardHeight,
  serviceCardWidth,
  serviceCardBottom,
  serviceCardLeft,
  serviceCardBorderRadius,
  serviceCardBackgroundColor,
  serviceCardBoxShadow,
  cardWrapperHeight,
  cardWrapperWidth,
  cardWrapperTop,
  cardWrapperRight,
  cardWrapperBottom,
  cardWrapperLeft,
  cardWrapperDisplay,
  cardWrapperFlexDirection,
  cardWrapperAlignItems,
  cardWrapperJustifyContent,
  cardWrapperGap,
  rectangleDivPosition,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  rectangleDivBoxShadow,
  rectangleDivDisplay,
  rectangleDivFlexDirection,
  rectangleDivAlignItems,
  rectangleDivJustifyContent,
  rectangleDivGap,
  frameDivPosition,
  frameDivHeight,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivBottom,
  frameDivLeft,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivGap,
  frameDivDisplay1,
  frameDivFlexDirection1,
  frameDivAlignItems1,
  frameDivJustifyContent1,
  frameDivGap1,
  frameDivPosition1,
  frameDivTop1,
  frameDivLeft1,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivWidth1,
  frameDivHeight1,
  groupDivPosition,
  groupDivWidth,
  groupDivHeight,
  groupDivTop,
  groupDivLeft,
  groupDivObjectFit,
  ellipseDivPosition,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivBorderRadius,
  ellipseDivBackgroundColor,
  ellipseDivWidth,
  ellipseDivHeight,
  ellipseDivFontSize,
  ellipseDivLineHeight,
  ellipseDivFontWeight,
  ellipseDivFontFamily,
  ellipseDivColor,
  ellipseDivTextAlign,
  ellipseDivDisplay,
  ellipseDivFlexShrink,
  codePerspectiveMatteIconPosition,
  codePerspectiveMatteIconTop,
  codePerspectiveMatteIconLeft,
  codePerspectiveMatteIconWidth,
  codePerspectiveMatteIconHeight,
  codePerspectiveMatteIconObjectFit,
  codePerspectiveMatteIconFontSize,
  codePerspectiveMatteIconLineHeight,
  codePerspectiveMatteIconFontFamily,
  codePerspectiveMatteIconColor,
  codePerspectiveMatteIconTextAlign,
  codePerspectiveMatteIconDisplay,
  webDesignContainerPosition,
  webDesignContainerFontSize,
  webDesignContainerLineHeight,
  webDesignContainerFontWeight,
  webDesignContainerFontFamily,
  webDesignContainerColor,
  webDesignContainerTextAlign,
  webDesignContainerDisplay,
  webDesignContainerWidth,
  webDesignContainerHeight,
  webDesignContainerFlexShrink,
  webDesignContainerTop,
  webDesignContainerRight,
  webDesignContainerBottom,
  webDesignContainerLeft,
  webDesignMargin1,
  webDesignPosition1,
  webDesignHeight,
  webDesignWidth1,
  webDesignTop,
  webDesignRight,
  webDesignBottom,
  webDesignLeft,
  aWebsiteIsPosition1,
  aWebsiteIsFontSize1,
  aWebsiteIsLineHeight1,
  aWebsiteIsFontFamily1,
  aWebsiteIsColor1,
  aWebsiteIsTextAlign1,
  aWebsiteIsDisplay1,
  aWebsiteIsWidth1,
  aWebsiteIsHeight1,
  aWebsiteIsTop1,
  aWebsiteIsRight1,
  aWebsiteIsBottom1,
  aWebsiteIsLeft1,
  aWebsiteIsFlexDirection,
  aWebsiteIsAlignItems,
  aWebsiteIsJustifyContent,
  aWebsiteIsGap,
  serviceCardPosition,
  serviceCardHeight1,
  serviceCardWidth1,
  serviceCardTop,
  serviceCardRight,
  serviceCardBottom1,
  serviceCardLeft1,
  serviceCardDisplay,
  serviceCardFlexDirection,
  serviceCardAlignItems,
  serviceCardJustifyContent,
  serviceCardGap,
  cardWrapperPosition,
  cardWrapperHeight1,
  cardWrapperWidth1,
  cardWrapperTop1,
  cardWrapperRight1,
  cardWrapperBottom1,
  cardWrapperLeft1,
  rectangleDivHeight1,
  rectangleDivWidth1,
  rectangleDivTop1,
  rectangleDivRight1,
  rectangleDivBottom1,
  rectangleDivLeft1,
  rectangleDivBorderRadius1,
  rectangleDivBoxShadow1,
  frameDivHeight2,
  frameDivWidth2,
  frameDivTop2,
  frameDivRight1,
  frameDivBottom1,
  frameDivLeft2,
  frameDivDisplay2,
  frameDivFlexDirection2,
  frameDivAlignItems2,
  frameDivJustifyContent2,
  frameDivGap2,
  frameDivObjectFit,
  frameDivDisplay3,
  frameDivFlexDirection3,
  frameDivAlignItems3,
  frameDivJustifyContent3,
  frameDivGap3,
  frameDivPosition2,
  frameDivFontSize,
  frameDivLineHeight,
  frameDivFontWeight,
  frameDivFontFamily,
  frameDivBackground,
  frameDivWebkitBackgroundClip,
  frameDivWebkitTextFillColor,
  frameDivTextAlign,
  frameDivWidth3,
  frameDivHeight3,
  frameDivFlexShrink,
  groupDivWidth1,
  groupDivHeight1,
  groupDivFontSize,
  groupDivLineHeight,
  groupDivFontFamily,
  groupDivColor,
  groupDivTextAlign,
  groupDivDisplay,
}) => {
  const cardCarouselStyle = useMemo(() => {
    return {
      position: cardCarouselPosition,
      top: cardCarouselTop,
      left: cardCarouselLeft,
    };
  }, [cardCarouselPosition, cardCarouselTop, cardCarouselLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      opacity: groupDivOpacity,
    };
  }, [groupDivOpacity]);

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
      position: aWebsiteIsPosition,
      fontSize: aWebsiteIsFontSize,
      lineHeight: aWebsiteIsLineHeight,
      fontFamily: aWebsiteIsFontFamily,
      color: aWebsiteIsColor,
      textAlign: aWebsiteIsTextAlign,
      display: aWebsiteIsDisplay,
      width: aWebsiteIsWidth,
      height: aWebsiteIsHeight,
      top: aWebsiteIsTop,
      right: aWebsiteIsRight,
      bottom: aWebsiteIsBottom,
      left: aWebsiteIsLeft,
    };
  }, [
    aWebsiteIsPosition,
    aWebsiteIsFontSize,
    aWebsiteIsLineHeight,
    aWebsiteIsFontFamily,
    aWebsiteIsColor,
    aWebsiteIsTextAlign,
    aWebsiteIsDisplay,
    aWebsiteIsWidth,
    aWebsiteIsHeight,
    aWebsiteIsTop,
    aWebsiteIsRight,
    aWebsiteIsBottom,
    aWebsiteIsLeft,
  ]);

  const property1CardSelectedStyle = useMemo(() => {
    return {
      height: serviceCardHeight,
      width: serviceCardWidth,
      bottom: serviceCardBottom,
      left: serviceCardLeft,
      borderRadius: serviceCardBorderRadius,
      backgroundColor: serviceCardBackgroundColor,
      boxShadow: serviceCardBoxShadow,
    };
  }, [
    serviceCardHeight,
    serviceCardWidth,
    serviceCardBottom,
    serviceCardLeft,
    serviceCardBorderRadius,
    serviceCardBackgroundColor,
    serviceCardBoxShadow,
  ]);

  const cardWrapperStyle = useMemo(() => {
    return {
      height: cardWrapperHeight,
      width: cardWrapperWidth,
      top: cardWrapperTop,
      right: cardWrapperRight,
      bottom: cardWrapperBottom,
      left: cardWrapperLeft,
      display: cardWrapperDisplay,
      flexDirection: cardWrapperFlexDirection,
      alignItems: cardWrapperAlignItems,
      justifyContent: cardWrapperJustifyContent,
      gap: cardWrapperGap,
    };
  }, [
    cardWrapperHeight,
    cardWrapperWidth,
    cardWrapperTop,
    cardWrapperRight,
    cardWrapperBottom,
    cardWrapperLeft,
    cardWrapperDisplay,
    cardWrapperFlexDirection,
    cardWrapperAlignItems,
    cardWrapperJustifyContent,
    cardWrapperGap,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      position: rectangleDivPosition,
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
      boxShadow: rectangleDivBoxShadow,
      display: rectangleDivDisplay,
      flexDirection: rectangleDivFlexDirection,
      alignItems: rectangleDivAlignItems,
      justifyContent: rectangleDivJustifyContent,
      gap: rectangleDivGap,
    };
  }, [
    rectangleDivPosition,
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBorderRadius,
    rectangleDivBackgroundColor,
    rectangleDivBoxShadow,
    rectangleDivDisplay,
    rectangleDivFlexDirection,
    rectangleDivAlignItems,
    rectangleDivJustifyContent,
    rectangleDivGap,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      height: frameDivHeight,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      bottom: frameDivBottom,
      left: frameDivLeft,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [
    frameDivPosition,
    frameDivHeight,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivBottom,
    frameDivLeft,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivGap,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      display: frameDivDisplay1,
      flexDirection: frameDivFlexDirection1,
      alignItems: frameDivAlignItems1,
      justifyContent: frameDivJustifyContent1,
      gap: frameDivGap1,
      position: frameDivPosition1,
      top: frameDivTop1,
      left: frameDivLeft1,
      borderRadius: frameDivBorderRadius,
      backgroundColor: frameDivBackgroundColor,
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [
    frameDivDisplay1,
    frameDivFlexDirection1,
    frameDivAlignItems1,
    frameDivJustifyContent1,
    frameDivGap1,
    frameDivPosition1,
    frameDivTop1,
    frameDivLeft1,
    frameDivBorderRadius,
    frameDivBackgroundColor,
    frameDivWidth1,
    frameDivHeight1,
  ]);

  const groupDiv1Style1 = useMemo(() => {
    return {
      position: groupDivPosition,
      width: groupDivWidth,
      height: groupDivHeight,
      top: groupDivTop,
      left: groupDivLeft,
      objectFit: groupDivObjectFit,
    };
  }, [
    groupDivPosition,
    groupDivWidth,
    groupDivHeight,
    groupDivTop,
    groupDivLeft,
    groupDivObjectFit,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
      borderRadius: ellipseDivBorderRadius,
      backgroundColor: ellipseDivBackgroundColor,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
      fontSize: ellipseDivFontSize,
      lineHeight: ellipseDivLineHeight,
      fontWeight: ellipseDivFontWeight,
      fontFamily: ellipseDivFontFamily,
      color: ellipseDivColor,
      textAlign: ellipseDivTextAlign,
      display: ellipseDivDisplay,
      flexShrink: ellipseDivFlexShrink,
    };
  }, [
    ellipseDivPosition,
    ellipseDivTop,
    ellipseDivLeft,
    ellipseDivBorderRadius,
    ellipseDivBackgroundColor,
    ellipseDivWidth,
    ellipseDivHeight,
    ellipseDivFontSize,
    ellipseDivLineHeight,
    ellipseDivFontWeight,
    ellipseDivFontFamily,
    ellipseDivColor,
    ellipseDivTextAlign,
    ellipseDivDisplay,
    ellipseDivFlexShrink,
  ]);

  const codePerspectiveMatteIconStyle = useMemo(() => {
    return {
      position: codePerspectiveMatteIconPosition,
      top: codePerspectiveMatteIconTop,
      left: codePerspectiveMatteIconLeft,
      width: codePerspectiveMatteIconWidth,
      height: codePerspectiveMatteIconHeight,
      objectFit: codePerspectiveMatteIconObjectFit,
      fontSize: codePerspectiveMatteIconFontSize,
      lineHeight: codePerspectiveMatteIconLineHeight,
      fontFamily: codePerspectiveMatteIconFontFamily,
      color: codePerspectiveMatteIconColor,
      textAlign: codePerspectiveMatteIconTextAlign,
      display: codePerspectiveMatteIconDisplay,
    };
  }, [
    codePerspectiveMatteIconPosition,
    codePerspectiveMatteIconTop,
    codePerspectiveMatteIconLeft,
    codePerspectiveMatteIconWidth,
    codePerspectiveMatteIconHeight,
    codePerspectiveMatteIconObjectFit,
    codePerspectiveMatteIconFontSize,
    codePerspectiveMatteIconLineHeight,
    codePerspectiveMatteIconFontFamily,
    codePerspectiveMatteIconColor,
    codePerspectiveMatteIconTextAlign,
    codePerspectiveMatteIconDisplay,
  ]);

  const webDesignContainerStyle = useMemo(() => {
    return {
      position: webDesignContainerPosition,
      fontSize: webDesignContainerFontSize,
      lineHeight: webDesignContainerLineHeight,
      fontWeight: webDesignContainerFontWeight,
      fontFamily: webDesignContainerFontFamily,
      color: webDesignContainerColor,
      textAlign: webDesignContainerTextAlign,
      display: webDesignContainerDisplay,
      width: webDesignContainerWidth,
      height: webDesignContainerHeight,
      flexShrink: webDesignContainerFlexShrink,
      top: webDesignContainerTop,
      right: webDesignContainerRight,
      bottom: webDesignContainerBottom,
      left: webDesignContainerLeft,
    };
  }, [
    webDesignContainerPosition,
    webDesignContainerFontSize,
    webDesignContainerLineHeight,
    webDesignContainerFontWeight,
    webDesignContainerFontFamily,
    webDesignContainerColor,
    webDesignContainerTextAlign,
    webDesignContainerDisplay,
    webDesignContainerWidth,
    webDesignContainerHeight,
    webDesignContainerFlexShrink,
    webDesignContainerTop,
    webDesignContainerRight,
    webDesignContainerBottom,
    webDesignContainerLeft,
  ]);

  const webDesignStyle1 = useMemo(() => {
    return {
      margin: webDesignMargin1,
      position: webDesignPosition1,
      height: webDesignHeight,
      width: webDesignWidth1,
      top: webDesignTop,
      right: webDesignRight,
      bottom: webDesignBottom,
      left: webDesignLeft,
    };
  }, [
    webDesignMargin1,
    webDesignPosition1,
    webDesignHeight,
    webDesignWidth1,
    webDesignTop,
    webDesignRight,
    webDesignBottom,
    webDesignLeft,
  ]);

  const aWebsiteIsContainerStyle1 = useMemo(() => {
    return {
      position: aWebsiteIsPosition1,
      fontSize: aWebsiteIsFontSize1,
      lineHeight: aWebsiteIsLineHeight1,
      fontFamily: aWebsiteIsFontFamily1,
      color: aWebsiteIsColor1,
      textAlign: aWebsiteIsTextAlign1,
      display: aWebsiteIsDisplay1,
      width: aWebsiteIsWidth1,
      height: aWebsiteIsHeight1,
      top: aWebsiteIsTop1,
      right: aWebsiteIsRight1,
      bottom: aWebsiteIsBottom1,
      left: aWebsiteIsLeft1,
      flexDirection: aWebsiteIsFlexDirection,
      alignItems: aWebsiteIsAlignItems,
      justifyContent: aWebsiteIsJustifyContent,
      gap: aWebsiteIsGap,
    };
  }, [
    aWebsiteIsPosition1,
    aWebsiteIsFontSize1,
    aWebsiteIsLineHeight1,
    aWebsiteIsFontFamily1,
    aWebsiteIsColor1,
    aWebsiteIsTextAlign1,
    aWebsiteIsDisplay1,
    aWebsiteIsWidth1,
    aWebsiteIsHeight1,
    aWebsiteIsTop1,
    aWebsiteIsRight1,
    aWebsiteIsBottom1,
    aWebsiteIsLeft1,
    aWebsiteIsFlexDirection,
    aWebsiteIsAlignItems,
    aWebsiteIsJustifyContent,
    aWebsiteIsGap,
  ]);

  const property1CardSelectedStyle1 = useMemo(() => {
    return {
      position: serviceCardPosition,
      height: serviceCardHeight1,
      width: serviceCardWidth1,
      top: serviceCardTop,
      right: serviceCardRight,
      bottom: serviceCardBottom1,
      left: serviceCardLeft1,
      display: serviceCardDisplay,
      flexDirection: serviceCardFlexDirection,
      alignItems: serviceCardAlignItems,
      justifyContent: serviceCardJustifyContent,
      gap: serviceCardGap,
    };
  }, [
    serviceCardPosition,
    serviceCardHeight1,
    serviceCardWidth1,
    serviceCardTop,
    serviceCardRight,
    serviceCardBottom1,
    serviceCardLeft1,
    serviceCardDisplay,
    serviceCardFlexDirection,
    serviceCardAlignItems,
    serviceCardJustifyContent,
    serviceCardGap,
  ]);

  const cardWrapperStyle1 = useMemo(() => {
    return {
      position: cardWrapperPosition,
      height: cardWrapperHeight1,
      width: cardWrapperWidth1,
      top: cardWrapperTop1,
      right: cardWrapperRight1,
      bottom: cardWrapperBottom1,
      left: cardWrapperLeft1,
    };
  }, [
    cardWrapperPosition,
    cardWrapperHeight1,
    cardWrapperWidth1,
    cardWrapperTop1,
    cardWrapperRight1,
    cardWrapperBottom1,
    cardWrapperLeft1,
  ]);

  const rectangleDiv1Style1 = useMemo(() => {
    return {
      height: rectangleDivHeight1,
      width: rectangleDivWidth1,
      top: rectangleDivTop1,
      right: rectangleDivRight1,
      bottom: rectangleDivBottom1,
      left: rectangleDivLeft1,
      borderRadius: rectangleDivBorderRadius1,
      boxShadow: rectangleDivBoxShadow1,
    };
  }, [
    rectangleDivHeight1,
    rectangleDivWidth1,
    rectangleDivTop1,
    rectangleDivRight1,
    rectangleDivBottom1,
    rectangleDivLeft1,
    rectangleDivBorderRadius1,
    rectangleDivBoxShadow1,
  ]);

  const frameDivStyle1 = useMemo(() => {
    return {
      height: frameDivHeight2,
      width: frameDivWidth2,
      top: frameDivTop2,
      right: frameDivRight1,
      bottom: frameDivBottom1,
      left: frameDivLeft2,
      display: frameDivDisplay2,
      flexDirection: frameDivFlexDirection2,
      alignItems: frameDivAlignItems2,
      justifyContent: frameDivJustifyContent2,
      gap: frameDivGap2,
      objectFit: frameDivObjectFit,
    };
  }, [
    frameDivHeight2,
    frameDivWidth2,
    frameDivTop2,
    frameDivRight1,
    frameDivBottom1,
    frameDivLeft2,
    frameDivDisplay2,
    frameDivFlexDirection2,
    frameDivAlignItems2,
    frameDivJustifyContent2,
    frameDivGap2,
    frameDivObjectFit,
  ]);

  const frameDiv1Style1 = useMemo(() => {
    return {
      display: frameDivDisplay3,
      flexDirection: frameDivFlexDirection3,
      alignItems: frameDivAlignItems3,
      justifyContent: frameDivJustifyContent3,
      gap: frameDivGap3,
      position: frameDivPosition2,
      fontSize: frameDivFontSize,
      lineHeight: frameDivLineHeight,
      fontWeight: frameDivFontWeight,
      fontFamily: frameDivFontFamily,
      background: frameDivBackground,
      webkitBackgroundClip: frameDivWebkitBackgroundClip,
      webkitTextFillColor: frameDivWebkitTextFillColor,
      textAlign: frameDivTextAlign,
      width: frameDivWidth3,
      height: frameDivHeight3,
      flexShrink: frameDivFlexShrink,
    };
  }, [
    frameDivDisplay3,
    frameDivFlexDirection3,
    frameDivAlignItems3,
    frameDivJustifyContent3,
    frameDivGap3,
    frameDivPosition2,
    frameDivFontSize,
    frameDivLineHeight,
    frameDivFontWeight,
    frameDivFontFamily,
    frameDivBackground,
    frameDivWebkitBackgroundClip,
    frameDivWebkitTextFillColor,
    frameDivTextAlign,
    frameDivWidth3,
    frameDivHeight3,
    frameDivFlexShrink,
  ]);

  const groupDiv1Style2 = useMemo(() => {
    return {
      width: groupDivWidth1,
      height: groupDivHeight1,
      fontSize: groupDivFontSize,
      lineHeight: groupDivLineHeight,
      fontFamily: groupDivFontFamily,
      color: groupDivColor,
      textAlign: groupDivTextAlign,
      display: groupDivDisplay,
    };
  }, [
    groupDivWidth1,
    groupDivHeight1,
    groupDivFontSize,
    groupDivLineHeight,
    groupDivFontFamily,
    groupDivColor,
    groupDivTextAlign,
    groupDivDisplay,
  ]);

  return (
    <div className="card-carousel" style={cardCarouselStyle}>
      <Property1CardSelected
        codePerspectiveMatte="/code-perspective-matte@2x.png"
        webDesignDevelopment={`Web Design & Development`}
        showFrameDiv
        showCodePerspectiveMatteIcon
        property1CardSelectedWidth="30.86%"
        property1CardSelectedHeight="88.04%"
        property1CardSelectedPosition="absolute"
        property1CardSelectedTop="0%"
        property1CardSelectedRight="69.14%"
        property1CardSelectedBottom="11.96%"
        property1CardSelectedLeft="0%"
        rectangleDivBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.05)"
        frameDivHeight="74.91%"
        frameDivTop="12.54%"
        frameDivBottom="12.54%"
        frameDivGap="20px"
        groupDivOpacity="unset"
        webDesignContainerBackground="unset"
        webDesignContainerWebkitBackgroundClip="unset"
        webDesignContainerWebkitTextFillColor="unset"
        webDesignContainerColor="#2d3748"
        webDesignMargin="0"
        webDesignPosition="unset"
        webDesignFontSize="unset"
        webDesignLineHeight="unset"
        webDesignFontFamily="unset"
        webDesignColor="unset"
        webDesignTextAlign="unset"
        webDesignDisplay="unset"
        webDesignWidth="unset"
        aWebsiteIsContainerColor="#718096"
      />
      <Property1CardSelected
        codePerspectiveMatte="/code-perspective-matte@2x.png"
        webDesignDevelopment={`Web Design & Development`}
        showFrameDiv
        showCodePerspectiveMatteIcon
        property1CardSelectedWidth="30.86%"
        property1CardSelectedHeight="88.04%"
        property1CardSelectedPosition="absolute"
        property1CardSelectedTop="0%"
        property1CardSelectedRight="0%"
        property1CardSelectedBottom="11.96%"
        property1CardSelectedLeft="69.14%"
        rectangleDivBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.05)"
        frameDivHeight="74.91%"
        frameDivTop="12.54%"
        frameDivBottom="12.54%"
        frameDivGap="20px"
        groupDivOpacity="unset"
        webDesignContainerBackground="unset"
        webDesignContainerWebkitBackgroundClip="unset"
        webDesignContainerWebkitTextFillColor="unset"
        webDesignContainerColor="#2d3748"
        webDesignMargin="0"
        webDesignPosition="unset"
        webDesignFontSize="unset"
        webDesignLineHeight="unset"
        webDesignFontFamily="unset"
        webDesignColor="unset"
        webDesignTextAlign="unset"
        webDesignDisplay="unset"
        webDesignWidth="unset"
        aWebsiteIsContainerColor="#718096"
      />
      <Property1CardSelected
        codePerspectiveMatte="/code-perspective-matte1@2x.png"
        webDesignDevelopment={`Web Design & Development`}
        showFrameDiv
        showCodePerspectiveMatteIcon
        property1CardSelectedWidth="30.86%"
        property1CardSelectedHeight="88.04%"
        property1CardSelectedPosition="absolute"
        property1CardSelectedTop="11.96%"
        property1CardSelectedRight="34.57%"
        property1CardSelectedBottom="0%"
        property1CardSelectedLeft="34.57%"
        rectangleDivBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.1)"
        frameDivHeight="73.17%"
        frameDivTop="13.41%"
        frameDivBottom="13.41%"
        frameDivGap="15px"
        groupDivOpacity="unset"
        webDesignContainerBackground="linear-gradient(225deg, #f76680, #57007b)"
        webDesignContainerWebkitBackgroundClip="unset"
        webDesignContainerWebkitTextFillColor="unset"
        webDesignContainerColor="unset"
        webDesignMargin="0"
        webDesignPosition="unset"
        webDesignFontSize="unset"
        webDesignLineHeight="unset"
        webDesignFontFamily="unset"
        webDesignColor="unset"
        webDesignTextAlign="unset"
        webDesignDisplay="unset"
        webDesignWidth="unset"
        aWebsiteIsContainerColor="#4a5568"
      />
    </div>
  );
};

export default CardCarousel;
