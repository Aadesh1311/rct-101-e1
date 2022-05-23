import React, { useState } from "react";
import styles from "./tasks.module.css";

const Tasks = ({task}) => {
  console.log(task.done)
  const [isDone,setIsDone]=useState(task.done)
  const[count,setCount]=useState(task.count)
  // NOTE: do not delete `data-cy` key value pair
  return (
    

    <div key={task.id}  className="tasks">
      <ul data-cy="tasks" className={styles.tasks} key={task.id} >
        <input type="checkbox" checked={isDone} onChange={(e)=>{setIsDone(!isDone)}}/>
        
        <div key={task.id} className={isDone ? styles.striked:""} >{task.text}</div>
        
        
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <div>{count}</div>
          <button onClick={()=>{setCount(count-1)}}>-</button>
          
          <button>delete</button>
             
        
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </div>
  );
};

export default Tasks;
