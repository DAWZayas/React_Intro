import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export const initialTasks = [
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks,
      actualId: initialTasks.length
    }
    this.removeTask = function (taskId) {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id !== taskId)
      })
    }.bind(this);
  }

  addTask = (taskName) => {
    this.setState({
      actualId: this.state.actualId + 1,
    }, () => {
      console.log("Incremented actualId");
      this.setState({
        tasks: this.state.tasks.concat({
          id: this.state.actualId,
          name: taskName,
          color: "orange"
        })
      }, () => console.log("Task Added"))
    });
  }

  render() {
    console.log("render App")
    const { tasks } = this.state;

    return (<div>
      <TaskList tasks={tasks} removeTask={this.removeTask} />
      <AddTask addTask={this.addTask} />
    </div>);
  }
}

export default App;
