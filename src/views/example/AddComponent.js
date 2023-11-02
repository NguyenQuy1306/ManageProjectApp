import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Addcomponent = ({ addNewjob }) => {
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleClickfunction = () => {
    alert("update successfully");
  };
  const resetState = () => {
    setTitle("");
    setSalary("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewjob({
      id: Math.floor(Math.random() * 100),
      title: title,
      salary: salary,
    });
    resetState();
  };

  return (
    <>
      <div className="my_component">
        {/* <Componentt /> */}
        <div className="search_icon">
          <FaSearch style={{ marginRight: "5px" }} />
        </div>
        <label htmlFor="input">Enter text:</label>
        <input
          type="text"
          id="input"
          placeholder="Search..."
          value={title}
          onChange={handleTitle}
        />
        nguyen quý
      </div>
      <div className="Second">
        <input value={salary} onChange={handleSalary} />
      </div>
      <div className="Second">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className="Third">
        <button onClick={handleClickfunction}>Click here</button>
      </div>
    </>
  );
};

export default Addcomponent;
