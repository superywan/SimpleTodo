import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          text: "Testing Task1",
          day: "Feb 1",
          reminder: false,
        },
        {
          id: 2,
          text: "Testing Task2",
          day: "Feb 2",
          reminder: true,
        },
        {
          id: 3,
          text: "Testing Task3",
          day: "Feb 3",
          reminder: true,
        },
      ],
      showTasks: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete(id) {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  handleToggle(id) {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    this.setState({
      tasks: updatedTasks,
    });
  }

  handleAdd(newTask) {
    const updatedTasks = this.state.tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          title="Task Tracker"
          onShow={() => this.setState({ showTasks: !this.state.showTasks })}
          showStatus={this.state.showTasks}
        />
        {this.state.showTasks ? <Form onAdd={this.handleAdd} /> : ""}
        <Tasks
          tasks={this.state.tasks}
          onDelete={this.handleDelete}
          onToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
