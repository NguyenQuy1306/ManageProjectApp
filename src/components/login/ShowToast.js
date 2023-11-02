import React from "react";
import { Toast } from "react-bootstrap";

/**
* @author
* @function ShowToast

**/

const ShowToast = ({ showToast, setShowToast, shortTitle, message }) => {
  return (
    <Toast
      show={showToast}
      onClose={() => setShowToast(!showToast)}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>{shortTitle}</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ShowToast;
