import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export const initialTasks = [
  {
    id: 1,
    name: "Ir a clase",
    color: "red"
  },
  {
    id: 2,
    name: "Descansar",
    color: "green"
  }
];

function App() {

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = taskName => setTasks(tasks.concat({
    id: tasks.length + 1,
    name: taskName,
    color: "orange"
  }));

  console.log("render APP")

  return (
    <>
      <TaskList tasks={tasks} />
      <AddTask addTask={addTask} />
    </>
  );
}

export default App;
