import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import Data from "./data/tasks.json"
import {v4 as uuidv4} from 'uuid'

function App() {

  const[data,setData]=useState(Data);

  const dataHandler=(title)=> {
    var newdata={
      "id":uuidv4(),
      "text":title,
      "done":true,
      "count":1
    };
    setData([...data,newdata])
  }
  return <div>{/* Code Here */}
  <AddTask onData={dataHandler}/>
  {Data.map((task)=>
      <Tasks key={task.id} task={task}/>
  )}
  </div>;
}

export default App;

