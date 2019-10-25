import React from "react";
import Task from "./Task";
import { TaskTemplateOdd, TaskTemplateEven } from "./TaskTemplate";


const TaskList = ({ tasks, removeTask }) => {
    console.log("render TaskList");

    return tasks.map((task, i) => {

        const taskTemplete = (prefix) => i % 2 === 0
            ? <TaskTemplateEven taskName={`${prefix} ${task.name}`} color={task.color} />
            : <TaskTemplateOdd taskName={`${prefix} ${task.name}`} color={task.color} />

        return <Task
            key={task.id}
            id={task.id}
            name={task.name}
            color={task.color}
            removeTask={() => removeTask(task.id)}>
            {taskTemplete}
        </Task>
    })
}

export default TaskList;