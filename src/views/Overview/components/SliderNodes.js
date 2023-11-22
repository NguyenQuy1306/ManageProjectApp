import { useMemo } from "react";
import "./SliderNodes.css";

const SliderNodes = ({
  sliderNodesHeight,
  sliderNodesPosition,
  sliderNodesTop,
  sliderNodesLeft,
}) => {
  const sliderNodesStyle = useMemo(() => {
    return {
      height: sliderNodesHeight,
      position: sliderNodesPosition,
      top: sliderNodesTop,
      left: sliderNodesLeft,
    };
  }, [sliderNodesHeight, sliderNodesPosition, sliderNodesTop, sliderNodesLeft]);

  return <div className="slider-nodes" style={sliderNodesStyle} />;
};

export default SliderNodes;
