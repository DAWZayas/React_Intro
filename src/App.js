import React, { useRef, useState } from "react";
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
  let actualId = useRef(tasks.length);

  const addTask = taskName => {
    actualId.current = actualId.current + 1;
    setTasks(tasks.concat({
      id: actualId.current,
      name: taskName,
      color: "orange"
    }))
  };

  const removeTask = taskId => setTasks(tasks.filter(task => task.id !== taskId));

  console.log("render APP")

  return (
    <>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <AddTask addTask={addTask} />
    </>
  );
}

export default App;
