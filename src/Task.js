import React from "react"

const Task = ({ removeTask, children }) => {
    console.log("render Task");
    return (
        <div>
            {children("Task")}
            <button onClick={removeTask}>remove</button>
        </div>
    );
}


export default Task;