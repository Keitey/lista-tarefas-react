import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
 
  };

  const handleAddTaskClick = (e) => {
    if(inputData === "") {
      return;
    }else{
      handleTaskAddition(inputData);
      setInputData("");
    }
  };

  document.addEventListener("keydown", function (e) {
    if(inputData === "" && e.key === "Enter") {
      return setInputData("");
    }
    if (e.key === "Enter") {
      handleTaskAddition(inputData);
      setInputData("");
    }
  });

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;