import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Footer from "./components/Footer";
import About from "./components/About";

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
      showTasks: false,
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
      <Router>
        <div className="App">
          <Header
            title="Task Tracker"
            onShow={() => this.setState({ showTasks: !this.state.showTasks })}
            showStatus={this.state.showTasks}
          />
          <Route exact={true} path="/">
            {this.state.showTasks ? <Form onAdd={this.handleAdd} /> : ""}
            <Tasks
              tasks={this.state.tasks}
              onDelete={this.handleDelete}
              onToggle={this.handleToggle}
            />
          </Route>
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
