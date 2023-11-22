import { useCallback } from "react";
import Property1NavButtonNavButt from "./Property1NavButtonNavButt";
import "./ProtaslFreeAccountForm.css";

const ProtaslFreeAccountForm = () => {
  const onNavButtonContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="ready-when-you-arelets-set-u-parent">
      <b className="ready-when-you">
        Ready when you are—let's set up your Protasl free account
      </b>
      <Property1NavButtonNavButt
        contactUs="Try ProTask for free"
        property1NavButtonNavButtBackground="linear-gradient(225deg, #ffc656, #f16063)"
        property1NavButtonNavButtPosition="absolute"
        property1NavButtonNavButtTop="67px"
        property1NavButtonNavButtLeft="800px"
        property1NavButtonNavButtBorder="1px solid var(--base-white)"
        property1NavButtonNavButtWidth="262px"
        property1NavButtonNavButtHeight="57px"
        property1NavButtonNavButtCursor="pointer"
        contactUsFontSize="18px"
        contactUsLineHeight="unset"
        contactUsFontWeight="bold"
        onNavButtonContainerClick={onNavButtonContainerClick}
      />
      <div className="group-parent5">
        <div className="rectangle-parent1">
          <div className="group-child3" />
          <div className="group-child4" />
          <div className="group-child5" />
        </div>
        <div className="rectangle-parent2">
          <div className="group-child6" />
          <div className="group-child7" />
          <div className="group-child8" />
        </div>
      </div>
    </div>
  );
};

export default ProtaslFreeAccountForm;
