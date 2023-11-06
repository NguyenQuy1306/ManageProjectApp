import React from "react";

const TextInput = (props) => {
  return (
    <div
      style={{
        ...styles.style,
        ...props.style,
      }}
    >
      <div style={styles.labelStyle}>{props.label}</div>

      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        placeholder={props.placeholder}
        style={styles.inputStyle}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

const styles = {
  style: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    paddingBottom: "12px",
  },
  labelStyle: {
    position: "absolute",
    top: "8px",
    left: "18px",
    fontSize: "11px",
    color: "rgb(175, 175, 175)",
    fontFamily: "VisbyRoundCF-DemiBold",
    width: "100px",
  },
  inputStyle: {
    backgroundColor: "#3e404b",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    outline: "none",
    border: "none",
    borderRadius: "8px",
    padding: "24px 18px 12px 18px",
    width: "calc(100% - 36px)", // Subtract padding from total width
  },
};

export default TextInput;
