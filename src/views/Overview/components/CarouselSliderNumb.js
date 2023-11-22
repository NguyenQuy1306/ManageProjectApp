import { useMemo } from "react";
import "./CarouselSliderNumb.css";

const CarouselSliderNumb = ({
  carouselSliderNumbPosition,
  carouselSliderNumbTop,
  carouselSliderNumbLeft,
}) => {
  const carouselSliderNumbStyle = useMemo(() => {
    return {
      position: carouselSliderNumbPosition,
      top: carouselSliderNumbTop,
      left: carouselSliderNumbLeft,
    };
  }, [
    carouselSliderNumbPosition,
    carouselSliderNumbTop,
    carouselSliderNumbLeft,
  ]);

  return (
    <div className="carousel-slider-numb" style={carouselSliderNumbStyle}>
      <div className="div">01</div>
      <div className="div1">05</div>
      <div className="carousel-slider-numb-child" />
      <div className="carousel-slider-numb-item" />
    </div>
  );
};

export default CarouselSliderNumb;
