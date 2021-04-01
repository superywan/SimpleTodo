import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import About from "./components/About";
import Footer from "./components/Footer";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          text: "food shopping 🍔",
          day: "Feb 5th at 2:30pm",
          reminder: false,
        },
        {
          id: 2,
          text: "go to gym 🏋️‍♀️",
          day: "Feb 8th at 5:32pm",
          reminder: true,
        },
        {
          id: 3,
          text: "do the dishies 🧼",
          day: "Feb 9th at 12:30pm",
          reminder: false,
        },
        {
          id: 4,
          text: "take my dog walk 🐕",
          day: "Feb 19th at 1:30pm",
          reminder: false,
        },
      ],
      showTasks: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAdd(newTask) {
    const updatedTasks = this.state.tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks,
    });
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

  render() {
    return (
      <Router>
        <div id="container">
          <Header
            title="📝 To Do List"
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
