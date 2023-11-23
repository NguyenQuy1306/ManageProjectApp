import { useCallback } from "react";
import Property1Primary from "../components/Property1Primary";
import SliderNodes from "../components/SliderNodes";
import CarouselNodes from "../components/CarouselNodes";
import CardCarousel from "../components/CardCarousel";
import Property1CardSelected from "../components/Property1CardSelected";
import CarouselSliderNumb from "../components/CarouselSliderNumb";
import Property1Center from "../components/Property1Center";
import WebsiteDesignContainer from "../components/WebsiteDesignContainer";
import TeamBuilderContainer2 from "../components/TeamBuilderContainer2";
import TeamBuilderContainer from "../components/TeamBuilderContainer";
import TeamBuilderContainer1 from "../components/TeamBuilderContainer1";
import ScalableApplicationSection from "../components/ScalableApplicationSection";
import ProtaslFreeAccountForm from "../components/ProtaslFreeAccountForm";
import Container from "../components/Container";
import Header from "../components/Header";
import "./PageIntroduce.css";
import "./global.css";
import { useNavigate } from "react-router-dom";
const PageIntroduce = () => {
  const navigate = useNavigate();

  const onBtnPrimaryContainerClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/Login");
  }, []);

  const onNavButtonContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="page-introduce">
      <div className="hero-wrapper">
        <div className="hero-wrapper-text">
          <div className="header-text">
            <div className="h1-primary-text">
              <p className="good-workflow-is">
                <span className="good-workflow">
                  <span className="good">{` Good `}</span>
                  <b className="workflow">Workflow</b>
                </span>
                <span>
                  <span className="good-workflow">
                    <span className="span"> is</span>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="span"></span>
                  </span>
                </span>
              </p>
              <p className="good-workflow-is">
                <span>
                  <span className="built-by-great-teams1">
                    <span>{`built by great `}</span>
                    <span className="teams">teams</span>
                  </span>
                </span>
              </p>
            </div>
            <div className="span-decorative-text">
              Plan smarter, collaborate better, and ship faster with a set of
              modern services.
            </div>
          </div>
          <Property1Primary
            property1PrimaryBackgroundColor="#3d63ea"
            property1PrimaryCursor="pointer"
            onBtnPrimaryContainerClick={onBtnPrimaryContainerClick}
          />
        </div>
        <div className="hero-wrapper-image">
          <div className="hero-wrapper-image-center">
            <img
              className="web-development-1-icon"
              alt=""
              src="/webdevelopment-1@2x.png"
            />
          </div>
        </div>
      </div>
      <img className="page-introduce-child" alt="" src="/group-13.svg" />
      <div className="page-introduce-item" />
      <img className="page-introduce-inner" alt="" src="/group-16.svg" />
      <img className="group-icon" alt="" src="/group-19.svg" />
      <div className="page-introduce-child1" />
      <div className="page-introduce-child2" />
      <div className="our-service-wrapper-wrapper">
        <div className="our-service-wrapper">
          <div className="our-service-wrapper-child" />
          <div className="card-parent">
            <div className="card123">
              <div className="shadow" />
              <div className="background" />
            </div>
            <b className="dch-v-cung">Dịch vụ cung cấp</b>
            <SliderNodes
              sliderNodesHeight="2.4px"
              sliderNodesPosition="absolute"
              sliderNodesTop="48.6px"
              sliderNodesLeft="88px"
            />
          </div>
          <CarouselNodes
            carouselNodesPosition="absolute"
            carouselNodesTop="1277.8px"
            carouselNodesLeft="861px"
            ellipseDivBackgroundColor="unset"
            ellipseDivBackground="linear-gradient(225deg, #f76680, #57007b)"
          />
          <CardCarousel
            codePerspectiveMatte="/code-perspective-matte2@2x.png"
            webDesignDevelopment="Quản lý bất kỳ dự án nào từ đầu đến cuối với các chế độ xem có khả năng tùy chỉnh cao giúp việc lập kế hoạch dự án trở nên dễ dàng."
            showCodePerspectiveMatteIcon={false}
            showGroupDiv={false}
            cardCarouselPosition="absolute"
            cardCarouselTop="910.8px"
            cardCarouselLeft="372px"
            groupDivOpacity="0.5"
            webDesignMargin="unset"
            webDesignPosition="relative"
            webDesignFontSize="14px"
            webDesignLineHeight="162.02%"
            webDesignFontFamily="Inter"
            webDesignColor="#718096"
            webDesignTextAlign="left"
            webDesignDisplay="inline-block"
            webDesignWidth="301px"
            aWebsiteIsPosition="absolute"
            aWebsiteIsFontSize="unset"
            aWebsiteIsLineHeight="unset"
            aWebsiteIsFontFamily="unset"
            aWebsiteIsColor="unset"
            aWebsiteIsTextAlign="unset"
            aWebsiteIsDisplay="unset"
            aWebsiteIsWidth="100%"
            aWebsiteIsHeight="100%"
            aWebsiteIsTop="0%"
            aWebsiteIsRight="0%"
            aWebsiteIsBottom="0%"
            aWebsiteIsLeft="0%"
            serviceCardHeight="100%"
            serviceCardWidth="100%"
            serviceCardBottom="0%"
            serviceCardLeft="0%"
            serviceCardBorderRadius="7px"
            serviceCardBackgroundColor="#fafafa"
            serviceCardBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.05)"
            cardWrapperHeight="66.9%"
            cardWrapperWidth="90.39%"
            cardWrapperTop="16.55%"
            cardWrapperRight="4.8%"
            cardWrapperBottom="16.55%"
            cardWrapperLeft="4.8%"
            cardWrapperDisplay="flex"
            cardWrapperFlexDirection="column"
            cardWrapperAlignItems="flex-start"
            cardWrapperJustifyContent="flex-start"
            cardWrapperGap="20px"
            rectangleDivPosition="unset"
            rectangleDivHeight="unset"
            rectangleDivWidth="unset"
            rectangleDivTop="unset"
            rectangleDivRight="unset"
            rectangleDivBottom="unset"
            rectangleDivLeft="unset"
            rectangleDivBorderRadius="unset"
            rectangleDivBackgroundColor="unset"
            rectangleDivBoxShadow="unset"
            rectangleDivDisplay="flex"
            rectangleDivFlexDirection="column"
            rectangleDivAlignItems="flex-start"
            rectangleDivJustifyContent="flex-start"
            rectangleDivGap="20px"
            frameDivPosition="relative"
            frameDivHeight="58px"
            frameDivWidth="58px"
            frameDivTop="unset"
            frameDivRight="unset"
            frameDivBottom="unset"
            frameDivLeft="unset"
            frameDivDisplay="unset"
            frameDivFlexDirection="unset"
            frameDivAlignItems="unset"
            frameDivJustifyContent="unset"
            frameDivGap="unset"
            frameDivDisplay1="unset"
            frameDivFlexDirection1="unset"
            frameDivAlignItems1="unset"
            frameDivJustifyContent1="unset"
            frameDivGap1="unset"
            frameDivPosition1="absolute"
            frameDivTop1="0px"
            frameDivLeft1="0px"
            frameDivBorderRadius="50%"
            frameDivBackgroundColor="#fafafa"
            frameDivWidth1="58px"
            frameDivHeight1="58px"
            groupDivPosition="absolute"
            groupDivWidth="34px"
            groupDivHeight="34px"
            groupDivTop="12px"
            groupDivLeft="12px"
            groupDivObjectFit="cover"
            ellipseDivPosition="relative"
            ellipseDivTop="unset"
            ellipseDivLeft="unset"
            ellipseDivBorderRadius="unset"
            ellipseDivBackgroundColor="unset"
            ellipseDivWidth="271px"
            ellipseDivHeight="25px"
            ellipseDivFontSize="20px"
            ellipseDivLineHeight="136.52%"
            ellipseDivFontWeight="600"
            ellipseDivFontFamily="Inter"
            ellipseDivColor="#2d3748"
            ellipseDivTextAlign="left"
            ellipseDivDisplay="inline-block"
            ellipseDivFlexShrink="0"
            codePerspectiveMatteIconPosition="relative"
            codePerspectiveMatteIconTop="unset"
            codePerspectiveMatteIconLeft="unset"
            codePerspectiveMatteIconWidth="301px"
            codePerspectiveMatteIconHeight="unset"
            codePerspectiveMatteIconObjectFit="unset"
            codePerspectiveMatteIconFontSize="14px"
            codePerspectiveMatteIconLineHeight="162.02%"
            codePerspectiveMatteIconFontFamily="Inter"
            codePerspectiveMatteIconColor="#718096"
            codePerspectiveMatteIconTextAlign="left"
            codePerspectiveMatteIconDisplay="inline-block"
            webDesignContainerPosition="absolute"
            webDesignContainerFontSize="unset"
            webDesignContainerLineHeight="unset"
            webDesignContainerFontWeight="unset"
            webDesignContainerFontFamily="unset"
            webDesignContainerColor="unset"
            webDesignContainerTextAlign="unset"
            webDesignContainerDisplay="unset"
            webDesignContainerWidth="30.86%"
            webDesignContainerHeight="88.04%"
            webDesignContainerFlexShrink="unset"
            webDesignContainerTop="11.96%"
            webDesignContainerRight="34.57%"
            webDesignContainerBottom="0%"
            webDesignContainerLeft="34.57%"
            webDesignMargin1="unset"
            webDesignPosition1="absolute"
            webDesignHeight="100%"
            webDesignWidth1="100%"
            webDesignTop="0%"
            webDesignRight="0%"
            webDesignBottom="0%"
            webDesignLeft="0%"
            aWebsiteIsPosition1="absolute"
            aWebsiteIsFontSize1="unset"
            aWebsiteIsLineHeight1="unset"
            aWebsiteIsFontFamily1="unset"
            aWebsiteIsColor1="unset"
            aWebsiteIsTextAlign1="unset"
            aWebsiteIsDisplay1="flex"
            aWebsiteIsWidth1="90.39%"
            aWebsiteIsHeight1="81.18%"
            aWebsiteIsTop1="9.41%"
            aWebsiteIsRight1="4.8%"
            aWebsiteIsBottom1="9.41%"
            aWebsiteIsLeft1="4.8%"
            aWebsiteIsFlexDirection="column"
            aWebsiteIsAlignItems="flex-start"
            aWebsiteIsJustifyContent="flex-start"
            aWebsiteIsGap="20px"
            serviceCardPosition="unset"
            serviceCardHeight1="unset"
            serviceCardWidth1="unset"
            serviceCardTop="unset"
            serviceCardRight="unset"
            serviceCardBottom1="unset"
            serviceCardLeft1="unset"
            serviceCardDisplay="flex"
            serviceCardFlexDirection="column"
            serviceCardAlignItems="flex-start"
            serviceCardJustifyContent="flex-start"
            serviceCardGap="15px"
            cardWrapperPosition="relative"
            cardWrapperHeight1="58px"
            cardWrapperWidth1="58px"
            cardWrapperTop1="unset"
            cardWrapperRight1="unset"
            cardWrapperBottom1="unset"
            cardWrapperLeft1="unset"
            rectangleDivHeight1="58px"
            rectangleDivWidth1="58px"
            rectangleDivTop1="0px"
            rectangleDivRight1="unset"
            rectangleDivBottom1="unset"
            rectangleDivLeft1="0px"
            rectangleDivBorderRadius1="50%"
            rectangleDivBoxShadow1="unset"
            frameDivHeight2="34px"
            frameDivWidth2="34px"
            frameDivTop2="12px"
            frameDivRight1="unset"
            frameDivBottom1="unset"
            frameDivLeft2="12px"
            frameDivDisplay2="unset"
            frameDivFlexDirection2="unset"
            frameDivAlignItems2="unset"
            frameDivJustifyContent2="unset"
            frameDivGap2="unset"
            frameDivObjectFit="cover"
            frameDivDisplay3="inline-block"
            frameDivFlexDirection3="unset"
            frameDivAlignItems3="unset"
            frameDivJustifyContent3="unset"
            frameDivGap3="unset"
            frameDivPosition2="relative"
            frameDivFontSize="20px"
            frameDivLineHeight="136.52%"
            frameDivFontWeight="600"
            frameDivFontFamily="Inter"
            frameDivBackground="linear-gradient(225deg, #f76680, #57007b)"
            frameDivWebkitBackgroundClip="unset"
            frameDivWebkitTextFillColor="unset"
            frameDivTextAlign="left"
            frameDivWidth3="271px"
            frameDivHeight3="25px"
            frameDivFlexShrink="0"
            groupDivWidth1="301px"
            groupDivHeight1="unset"
            groupDivFontSize="14px"
            groupDivLineHeight="162.02%"
            groupDivFontFamily="Inter"
            groupDivColor="#4a5568"
            groupDivTextAlign="left"
            groupDivDisplay="inline-block"
          />
          <Property1CardSelected
            codePerspectiveMatte="/code-perspective-matte4@2x.png"
            webDesignDevelopment="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
            showFrameDiv={false}
            showCodePerspectiveMatteIcon
            property1CardSelectedWidth="18.27%"
            property1CardSelectedHeight="3.65%"
            property1CardSelectedPosition="absolute"
            property1CardSelectedTop="0%"
            property1CardSelectedRight="0%"
            property1CardSelectedBottom="96.35%"
            property1CardSelectedLeft="81.73%"
            rectangleDivBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.05)"
            frameDivHeight="83%"
            frameDivTop="8.5%"
            frameDivBottom="8.5%"
            frameDivGap="20px"
            groupDivOpacity="unset"
            webDesignContainerBackground="unset"
            webDesignContainerWebkitBackgroundClip="unset"
            webDesignContainerWebkitTextFillColor="unset"
            webDesignContainerColor="#2d3748"
            webDesignMargin="unset"
            webDesignPosition="relative"
            webDesignFontSize="14px"
            webDesignLineHeight="162.02%"
            webDesignFontFamily="Inter"
            webDesignColor="#718096"
            webDesignTextAlign="left"
            webDesignDisplay="inline-block"
            webDesignWidth="301px"
          />
          <Property1CardSelected
            codePerspectiveMatte="/code-perspective-matte4@2x.png"
            webDesignDevelopment="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
            showFrameDiv={false}
            showCodePerspectiveMatteIcon={false}
            property1CardSelectedWidth="18.27%"
            property1CardSelectedHeight="3.65%"
            property1CardSelectedPosition="absolute"
            property1CardSelectedTop="0%"
            property1CardSelectedRight="81.73%"
            property1CardSelectedBottom="96.35%"
            property1CardSelectedLeft="0%"
            rectangleDivBoxShadow="0px 4px 30px rgba(0, 0, 0, 0.05)"
            frameDivHeight="83%"
            frameDivTop="8.5%"
            frameDivBottom="8.5%"
            frameDivGap="20px"
            groupDivOpacity="0.5"
            webDesignContainerBackground="unset"
            webDesignContainerWebkitBackgroundClip="unset"
            webDesignContainerWebkitTextFillColor="unset"
            webDesignContainerColor="#2d3748"
            webDesignMargin="unset"
            webDesignPosition="relative"
            webDesignFontSize="14px"
            webDesignLineHeight="162.02%"
            webDesignFontFamily="Inter"
            webDesignColor="#718096"
            webDesignTextAlign="left"
            webDesignDisplay="inline-block"
            webDesignWidth="301px"
          />
          <img
            className="mobile-app-perspective-matte-icon"
            alt=""
            src="/mobile-app-perspective-matte@2x.png"
          />
          <img
            className="dashboard-perspective-matte-icon"
            alt=""
            src="/dashboard-perspective-matte@2x.png"
          />
          <img className="our-service-wrapper-item" alt="" src="/line-1.svg" />
          <img className="our-service-wrapper-inner" alt="" src="/line-1.svg" />
          <img className="btn-left-icon" alt="" src="/btnleft.svg" />
          <img className="btn-right-icon" alt="" src="/btnright.svg" />
        </div>
      </div>
      <CarouselSliderNumb
        carouselSliderNumbPosition="absolute"
        carouselSliderNumbTop="1330px"
        carouselSliderNumbLeft="1095px"
      />
      <div className="right-arrow-20-1-parent">
        <img className="right-arrow-20-1" alt="" src="/rightarrow-20-1.svg" />
        <div className="group-inner" />
        <div className="rectangle-div" />
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <img className="frame-item" alt="" src="/group-5.svg" />
          <div className="star-perspective-matte-parent">
            <img
              className="star-perspective-matte-icon"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon1"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon2"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon3"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon4"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
          </div>
          <div className="romeena-de-silva-parent">
            <div className="romeena-de-silva">Romeena De Silva</div>
            <div className="janet-cosmetics">Janet Cosmetics</div>
          </div>
        </div>
        <div className="group-parent1">
          <img className="frame-item" alt="" src="/group-7.svg" />
          <div className="star-perspective-matte-parent">
            <img
              className="star-perspective-matte-icon"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon1"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon2"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon3"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
            <img
              className="star-perspective-matte-icon4"
              alt=""
              src="/star-perspective-matte@2x.png"
            />
          </div>
          <div className="romeena-de-silva-parent">
            <div className="romeena-de-silva">Romeena De Silva</div>
            <div className="janet-cosmetics">Janet Cosmetics</div>
          </div>
        </div>
        <div className="group-parent2">
          <img className="frame-child1" alt="" src="/group-4.svg" />
          <div className="star-perspective-matte-container">
            <img
              className="star-perspective-matte-icon10"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon11"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon12"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon13"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
          </div>
          <div className="romeena-de-silva-container">
            <div className="romeena-de-silva2">Romeena De Silva</div>
            <div className="janet-cosmetics2">Janet Cosmetics</div>
          </div>
        </div>
        <div className="group-parent3">
          <img className="frame-child2" alt="" src="/group-6.svg" />
          <div className="group-div">
            <img
              className="star-perspective-matte-icon10"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon11"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon12"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
            <img
              className="star-perspective-matte-icon13"
              alt=""
              src="/star-perspective-matte1@2x.png"
            />
          </div>
          <div className="romeena-de-silva-parent">
            <div className="romeena-de-silva2">Romeena De Silva</div>
            <div className="janet-cosmetics2">Janet Cosmetics</div>
          </div>
        </div>
      </div>
      <img className="page-introduce-child3" alt="" src="/group-18.svg" />
      <img className="deco-img-arrow-icon" alt="" src="/decoimgarrow.svg" />
      <img className="deco-img-arrow-icon1" alt="" src="/decoimgarrow1.svg" />
      <div className="frame-parent1">
        <div className="heading-h2-left-parent">
          <Property1Center
            leadingCompaniesTrustUs="Our recent "
            property1CenterJustifyContent="space-between"
            property1CenterGap="unset"
            property1CenterWidth="1233px"
            property1CenterHeight="133px"
            property1CenterPosition="unset"
            property1CenterTop="unset"
            property1CenterLeft="unset"
            leadingCompaniesTrustMargin="0"
          />
          <div className="frame-parent2">
            <div className="case-study-card-parent">
              <div className="case-study-card">
                <div className="casestudt-card-wrapper">
                  <div className="casestudt-card-wrapper-child" />
                  <div className="casestudt-card-wrapper-item" />
                </div>
                <div className="case-study-header-text">
                  <div className="case-study-name-parent">
                    <b className="case-study-name">Case study name</b>
                    <div className="a-website-is2">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="raed-more-parent">
                    <div className="raed-more">Raed more</div>
                    <img
                      className="arrow-right-s-line-icon1"
                      alt=""
                      src="/arrowrightsline1.svg"
                    />
                    <img
                      className="arrow-right-circle-fill-icon"
                      alt=""
                      src="/arrowrightcirclefill.svg"
                    />
                  </div>
                </div>
                <img
                  className="case-study-image-icon"
                  alt=""
                  src="/casestudy--image@2x.png"
                />
              </div>
              <div className="case-study-card">
                <div className="casestudt-card-wrapper">
                  <div className="casestudt-card-wrapper-child" />
                  <div className="casestudt-card-wrapper-item" />
                </div>
                <div className="case-study-header-text">
                  <div className="case-study-name-parent">
                    <b className="case-study-name">Case study name</b>
                    <div className="a-website-is2">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="raed-more-parent">
                    <div className="raed-more">Raed more</div>
                    <img
                      className="arrow-right-s-line-icon1"
                      alt=""
                      src="/arrowrightsline1.svg"
                    />
                    <img
                      className="arrow-right-circle-fill-icon"
                      alt=""
                      src="/arrowrightcirclefill.svg"
                    />
                  </div>
                </div>
                <img
                  className="case-study-image-icon"
                  alt=""
                  src="/casestudy--image1@2x.png"
                />
              </div>
            </div>
            <div className="case-study-card-parent">
              <div className="case-study-card">
                <div className="casestudt-card-wrapper">
                  <div className="casestudt-card-wrapper-child" />
                  <div className="casestudt-card-wrapper-item" />
                </div>
                <div className="case-study-header-text">
                  <div className="case-study-name-parent">
                    <b className="case-study-name">Case study name</b>
                    <div className="a-website-is2">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="raed-more-parent">
                    <div className="raed-more">Raed more</div>
                    <img
                      className="arrow-right-s-line-icon1"
                      alt=""
                      src="/arrowrightsline1.svg"
                    />
                    <img
                      className="arrow-right-circle-fill-icon"
                      alt=""
                      src="/arrowrightcirclefill.svg"
                    />
                  </div>
                </div>
                <img
                  className="case-study-image-icon"
                  alt=""
                  src="/casestudy--image2@2x.png"
                />
              </div>
              <div className="case-study-card">
                <div className="casestudt-card-wrapper">
                  <div className="casestudt-card-wrapper-child" />
                  <div className="casestudt-card-wrapper-item" />
                </div>
                <div className="case-study-header-text">
                  <div className="case-study-name-parent">
                    <b className="case-study-name">Case study name</b>
                    <div className="a-website-is2">
                      A Website is an extension of yourself and we can help you
                      to express it properly. Your website is your number one
                      marketing asset because we live in a digital age.
                    </div>
                  </div>
                  <div className="raed-more-parent">
                    <div className="raed-more">Raed more</div>
                    <img
                      className="arrow-right-s-line-icon1"
                      alt=""
                      src="/arrowrightsline1.svg"
                    />
                    <img
                      className="arrow-right-circle-fill-icon"
                      alt=""
                      src="/arrowrightcirclefill.svg"
                    />
                  </div>
                </div>
                <img
                  className="case-study-image-icon"
                  alt=""
                  src="/casestudy--image3@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="read-more-case-studies-parent">
          <div className="read-more-case">Read more case studies</div>
          <img
            className="arrow-right-s-line-icon5"
            alt=""
            src="/arrowrightsline2.svg"
          />
        </div>
      </div>
      <div className="page-introduce-child4" />
      <div className="page-introduce-child5" />
      <WebsiteDesignContainer />
      <WebsiteDesignContainer
        propTop="4265px"
        propHeight="416px"
        propBackgroundColor="#f0fff7"
        propHeight1="416px"
        propBackgroundColor1="#f0fff7"
        propHeight2="unset"
      />
      <Property1Center
        leadingCompaniesTrustUs="Our recent "
        property1CenterJustifyContent="flex-start"
        property1CenterGap="20px"
        property1CenterWidth="unset"
        property1CenterHeight="unset"
        property1CenterPosition="absolute"
        property1CenterTop="3600px"
        property1CenterLeft="483px"
        leadingCompaniesTrustMargin="0"
      />
      <Property1Center
        leadingCompaniesTrustUs="Way of building"
        property1CenterJustifyContent="flex-start"
        property1CenterGap="20px"
        property1CenterWidth="unset"
        property1CenterHeight="unset"
        property1CenterPosition="absolute"
        property1CenterTop="5367px"
        property1CenterLeft="483px"
        leadingCompaniesTrustMargin="0"
      />
      <img className="page-introduce-child6" alt="" src="/group-20.svg" />
      <div className="frame-parent3">
        <TeamBuilderContainer2 />
        <TeamBuilderContainer />
        <TeamBuilderContainer1 />
      </div>
      <ScalableApplicationSection />
      <img className="page-introduce-child7" alt="" src="/line-1.svg" />
      <Property1Center
        leadingCompaniesTrustUs="How development "
        property1CenterJustifyContent="flex-start"
        property1CenterGap="20px"
        property1CenterWidth="unset"
        property1CenterHeight="unset"
        property1CenterPosition="absolute"
        property1CenterTop="9199px"
        property1CenterLeft="483px"
        leadingCompaniesTrustMargin="0"
      />
      <div className="heading-h2-left-group">
        <Property1Center
          leadingCompaniesTrustUs="Our"
          property1CenterJustifyContent="flex-start"
          property1CenterGap="20px"
          property1CenterWidth="unset"
          property1CenterHeight="unset"
          property1CenterPosition="unset"
          property1CenterTop="unset"
          property1CenterLeft="unset"
          leadingCompaniesTrustMargin="0"
        />
        <div className="group-parent4">
          <div className="ellipse-container">
            <div className="group-child1" />
            <div className="backend">Backend</div>
            <div className="group-child2" />
          </div>
          <div className="frontend">Frontend</div>
          <div className="frontend">Databases</div>
          <div className="frontend">CMS</div>
          <div className="frontend">CloudTesting</div>
          <div className="frontend">DevOps</div>
        </div>
      </div>
      <ProtaslFreeAccountForm />
      <Container />
      <div className="frame-parent4">
        <div className="nodejs-parent">
          <img className="nodejs-icon" alt="" src="/nodejs.svg" />
          <img className="nodejs-icon" alt="" src="/php.svg" />
          <img
            className="kisspng-mysqli-php-database-li-icon"
            alt=""
            src="/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png"
          />
          <img className="nodejs-icon" alt="" src="/java.svg" />
          <img className="nodejs-icon" alt="" src="/netcore.svg" />
        </div>
        <div className="python-parent">
          <img className="nodejs-icon" alt="" src="/python.svg" />
          <img className="nodejs-icon" alt="" src="/rubyonrails.svg" />
          <img className="nodejs-icon" alt="" src="/go.svg" />
          <img className="mon-1-icon" alt="" src="/mon-1@2x.png" />
        </div>
      </div>
      <div className="read-more-case-studies-group">
        <div className="read-more-case">Read more case studies</div>
        <img
          className="arrow-right-s-line-icon5"
          alt=""
          src="/arrowrightsline2.svg"
        />
      </div>
      <div className="ik-developers">Ik developers</div>
      <Header />
      <div className="page-introduce-child8" />
      <b className="protask">ProTask</b>
      <img className="icon" alt="" src="/icon1.svg" />
      <div className="protask-gip-bn-container">
        <p className="protask-gip-bn-lm-c-nhi">
          <b>ProTasK giúp bạn làm được nhiều việc hơn</b>
        </p>
        <p className="good-workflow-is">
          <b>&nbsp;</b>
        </p>
        <p className="cc-tnh-nng">
          Các tính năng trực quan của Trello mang đến cho mọi đội nhóm khả
        </p>
        <p className="cc-tnh-nng">
          {" "}
          năng thiết lập và tùy chỉnh nhanh chóng quy trình làm việc, sẵn sàng
          đáp ứng mọi nhu cầu.
        </p>
      </div>
    </div>
  );
};

export default PageIntroduce;
