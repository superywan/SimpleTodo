import React from "react";
import "../css/Form.css";

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
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__component">
          <label className="form__component--label">Task</label>
          <input
            className="form__component--input"
            type="text"
            placeholder="Add Task"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
        </div>
        <div className="form__component">
          <label className="form__component--label">Day & Time</label>
          <input
            className="form__component--input"
            type="text"
            placeholder="Add Day & Time"
            value={this.state.day}
            onChange={(event) => this.setState({ day: event.target.value })}
          />
        </div>
        <div className="form__component">
          <labeli className="form__component--label">Set Reminder</labeli>
          <input
            className="form__component--check"
            type="checkbox"
            checked={this.state.reminder}
            value={this.state.reminder}
            onChange={(event) =>
              this.setState({ reminder: event.target.checked })
            }
          />
        </div>
        <input type="submit" value="Save Task" className="form__submit" />
      </form>
    );
  }
}

export default Form;
