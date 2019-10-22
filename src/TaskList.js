import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
    console.log("render TaskList")
    return tasks.map(task => <Task key={task.id} id={task.id} name={task.name} color={task.color} />)
}

export default TaskList;