import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const ChildComponent = (props) => {
  const [stateshow, setStateshow] = useState(false);
  let { myarr } = props;

  const handleClickshow = () => {
    setStateshow(true);
  };
  const handleClickhide = () => {
    setStateshow(false);
  };
  const handleRemove = (job) => {
    props.deleteJob(job);
  };
  return (
    <>
      {stateshow === false ? (
        <div>
          <button onClick={handleClickshow}>Show</button>
        </div>
      ) : (
        <>
          <div className="count array">
            {myarr.map((item, index) => {
              if (item.salary > 500) {
                return (
                  <div key={index}>
                    {item.title} - salary: {item.salary} - index: {index} <></>{" "}
                    <span>
                      <AiFillDelete
                        values="Remove"
                        onClick={() => handleRemove(item)}
                      />
                    </span>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div>
            <button onClick={handleClickhide}>Hide</button>
          </div>
        </>
      )}
    </>
  );
};

export default ChildComponent;
