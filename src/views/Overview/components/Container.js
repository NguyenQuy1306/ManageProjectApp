import TeamContainer from "./TeamContainer";
import "./Container.css";

const Container = () => {
  return (
    <div className="line-parent">
      <div className="line-div" />
      <div className="group-child10" />
      <div className="group-child11" />
      <div className="group-child12" />
      <div className="group-child13" />
      <div className="group-child14" />
      <div className="group-child15" />
      <TeamContainer
        prop="#1"
        assembleTheRightTeam="Assemble the right team"
        weHandleAllAspectsOfVetti="We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
      />
      <TeamContainer
        prop="#3"
        assembleTheRightTeam="Tech architecture"
        weHandleAllAspectsOfVetti="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently"
        propLeft="408px"
        propTop="0px"
      />
      <TeamContainer
        prop="#5"
        assembleTheRightTeam="Code reviews"
        weHandleAllAspectsOfVetti="Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells"
        propLeft="798px"
        propTop="0px"
      />
      <TeamContainer
        prop="#2"
        assembleTheRightTeam="Sprint planning"
        weHandleAllAspectsOfVetti="Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
        propLeft="93px"
        propTop="249px"
      />
      <TeamContainer
        prop="#4"
        assembleTheRightTeam={`Standups & weekly demos`}
        weHandleAllAspectsOfVetti="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
        propLeft="473px"
        propTop="249px"
      />
      <TeamContainer
        prop="#6"
        assembleTheRightTeam="Iterative delivery"
        weHandleAllAspectsOfVetti="We divide the implementation process into several checkpoints rather than a single deadline."
        propLeft="863px"
        propTop="249px"
      />
      <img
        className="trophy-perspective-matte-icon"
        alt=""
        src="/trophy-perspective-matte@2x.png"
      />
    </div>
  );
};

export default Container;
