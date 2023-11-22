import { useMemo } from "react";
import "./Property1Primary.css";
import { useNavigate } from "react-router-dom";

const Property1Primary = ({
  property1PrimaryBackgroundColor,
  property1PrimaryCursor,
  onBtnPrimaryContainerClick,
}) => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    // Assuming successful login, navigate to the user page
    navigate("/Login2");
  };
  const property1PrimaryStyle = useMemo(() => {
    return {
      backgroundColor: property1PrimaryBackgroundColor,
      cursor: property1PrimaryCursor,
    };
  }, [property1PrimaryBackgroundColor, property1PrimaryCursor]);

  return (
    <div
      className="property-1primary"
      style={property1PrimaryStyle}
      onClick={() => handleToLogin()}
    >
      <button className="lets-get-started" onClick={() => handleToLogin()}>
        Let’s get started!
      </button>
    </div>
  );
};

export default Property1Primary;
