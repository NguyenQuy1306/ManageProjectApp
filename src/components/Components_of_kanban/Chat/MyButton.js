import { useState } from "react";

const MyButton = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.style,
        ...(hovered && styles.hoverStyle),
        ...props.style,
        width: "calc(100% - 36px)", // Subtract padding from total width
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

const styles = {
  style: {
    height: "53px",
    color: "white",
    backgroundColor: "#fa541c",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    fontFamily: "VisbyRoundCF-DemiBold",
    cursor: "pointer",
    transition: "all .44s ease",
    WebkitTransition: "all .44s ease",
    MozTransition: "all .44s ease",
    padding: "0px 18px", // Add left and right padding
  },
  hoverStyle: { filter: "brightness(145%)" },
};

export default MyButton;
