import React, { useRef } from "react";

const AddTask = ({ addTask }) => {
    const taskNameRef = useRef(null);

    console.log("render AddTask")
    return <>
        <input ref={taskNameRef} id="taskName" />
        <button onClick={() => {
            addTask(taskNameRef.current.value);
        }}>Add Task</button>
    </>
}

export default AddTask;