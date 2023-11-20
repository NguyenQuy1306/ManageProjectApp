import { useMemo } from "react";
import "./BrandLogo.css";

const BrandLogo = ({
  imageDimensions,
  brandLogoIconWidth,
  brandLogoIconHeight,
  brandLogoIconPosition,
}) => {
  const brandLogoIconStyle = useMemo(() => {
    return {
      width: brandLogoIconWidth,
      height: brandLogoIconHeight,
      position: brandLogoIconPosition,
    };
  }, [brandLogoIconWidth, brandLogoIconHeight, brandLogoIconPosition]);

  return (
    <img
      className="brandlogo-icon"
      alt=""
      src={imageDimensions}
      style={brandLogoIconStyle}
    />
  );
};

export default BrandLogo;
