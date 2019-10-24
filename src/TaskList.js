import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
    console.log("render TaskList")
    return tasks.map(task => <Task key={task.id} id={task.id} name={task.name} color={task.color} removeTask={removeTask} />)
}

export default TaskList;