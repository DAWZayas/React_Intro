import React from "react"

const Task = ({ id, name, color }) => {
    console.log("render Task " + id);
    return <div style={{ backgroundColor: color }} className="task">
        {name}
    </div>
}


export default Task;