import React from "react"

const Task = ({ id, name, color, removeTask }) => {
    console.log("render Task " + id);
    return (
        <div>
            <div style={{ backgroundColor: color, display: "inline-block" }} className="task">
                {name}
            </div>
            <button onClick={() => removeTask(id)}>remove</button>
        </div>
    );
}


export default Task;