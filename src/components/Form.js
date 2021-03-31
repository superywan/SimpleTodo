import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      day: "",
      reminder: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    if (!this.state.text) {
      alert("Please Enter a Task!");
      return;
    }
    const text = this.state.text;
    const day = this.state.day;
    const reminder = this.state.reminder;
    this.props.onAdd({ id: Date.now(), text, day, reminder });
  }
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={this.state.day}
            onChange={(event) => this.setState({ day: event.target.value })}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={this.state.reminder}
            value={this.state.reminder}
            onChange={(event) =>
              this.setState({ reminder: event.target.checked })
            }
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    );
  }
}

export default Form;
