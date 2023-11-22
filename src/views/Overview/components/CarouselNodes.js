import { useMemo } from "react";
import "./CarouselNodes.css";

const CarouselNodes = ({
  carouselNodesPosition,
  carouselNodesTop,
  carouselNodesLeft,
  ellipseDivBackgroundColor,
  ellipseDivBackground,
}) => {
  const carouselNodesStyle = useMemo(() => {
    return {
      position: carouselNodesPosition,
      top: carouselNodesTop,
      left: carouselNodesLeft,
    };
  }, [carouselNodesPosition, carouselNodesTop, carouselNodesLeft]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
      background: ellipseDivBackground,
    };
  }, [ellipseDivBackgroundColor, ellipseDivBackground]);

  return (
    <div className="carousel-nodes" style={carouselNodesStyle}>
      <div className="carousel-nodes-child" />
      <div className="carousel-nodes-child" />
      <div className="carousel-nodes-inner" style={ellipseDiv1Style} />
      <div className="carousel-nodes-child" />
      <div className="carousel-nodes-child" />
    </div>
  );
};

export default CarouselNodes;
