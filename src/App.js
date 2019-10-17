import React from "react";

const tasks = [
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
  return (
    <>
      {tasks.map(({ id, name, color }) => (
        <div style={{ backgroundColor: color }} key={id} className="task">
          {name}
        </div>
      ))}

      <button>Add task</button>
    </>
  );
}

export default App;
