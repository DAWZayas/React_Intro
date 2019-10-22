import React, { useState } from "react";

const AddTask = ({ addTask }) => {
    const [taskName, setTaskName] = useState("");

    console.log("render AddTask")
    return <>
        <form onSubmit={(event) => {
            addTask(taskName);
            setTaskName("");
            event.preventDefault();
        }}>
            <input value={taskName} onChange={event => setTaskName(event.target.value)} id="taskName" />
            <input type="submit" value="Add task" />
        </form>
    </>
}

export default AddTask;