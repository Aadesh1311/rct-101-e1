import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setValue]=useState("");
  const handleChange = (e)=>{
    setValue(e.target.value);
  }
  const addHandler=()=>{
    props.onData(value)
  }
  return (
    <div className={styles.todoForm}>
      <div className="todoForm">
      <input data-cy="add-task-input" type="text" onChange={handleChange}  />
      <button data-cy="add-task-button" onClick={addHandler} className="btn">
        +
      </button>
    </div>
    </div>
  );
};

export default AddTask


        
      
