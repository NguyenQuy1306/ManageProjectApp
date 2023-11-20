import PersonBadge from "./PersonBadge";
import "./FormContainer.css";

const FormContainer = ({ ellipse185 }) => {
  return (
    <div className="way-building-details">
      <div className="build-the-right-team-to-scale-parent">
        <div className="build-the-right">Build the right team to scale</div>
        <div className="finding-the-right-talent-is-no-parent">
          <div className="finding-the-right">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers
          </div>
          <div className="our-delivery-model-helps-you-c-parent">
            <div className="our-delivery-model-container">
              <span>{`Our `}</span>
              <span className="delivery-model">delivery model</span>
              <span> helps you cut costs and deliver within budget.</span>
            </div>
            <div className="rectangle-group">
              <div className="frame-child3" />
              <i className="simform-is-quick">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </i>
            </div>
          </div>
        </div>
      </div>
      <PersonBadge ellipse185="/ellipse-185@2x.png" />
    </div>
  );
};

export default FormContainer;
