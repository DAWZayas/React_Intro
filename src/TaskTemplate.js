import React from 'react';

export const TaskTemplateOdd = ({ taskName, color }) => <div style={{ color: color, display: "inline-block", backgroundColor: "white" }} className="task">
    {taskName}
</div>

export const TaskTemplateEven = ({ taskName, color }) => <div style={{ color: color, display: "inline-block", backgroundColor: "grey" }} className="task">
    {taskName}
</div>