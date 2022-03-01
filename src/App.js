import "./App.css";
import React, { useState } from "react";
import { Title } from "./compontents/Title";
import { Form } from "./compontents/Form";
import { TaskList } from "./compontents/TaskList";
import { BadList } from "./compontents/BadList";
import { TotalHours } from "./compontents/TotalHours";

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const addNewTask = (task) =>{
    setTaskList([ ...taskList, task ]);
  }
  return (
    <>
      <div className="wrap container">
        <Title />
        <Form  addNewTask={addNewTask} />
        <div className="row">
          <TaskList  taskList={taskList} />
          <BadList />
        </div>
        <TotalHours />
      </div>
    </>
  );
}

export default App;
