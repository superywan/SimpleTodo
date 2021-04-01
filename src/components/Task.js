import { FaTimes } from "react-icons/fa";
import "../css/Task.css";

function Task(props) {
  return (
    <div
      className={`task ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.onToggle(props.task.id)}
    >
      <div className="task__main">
        <h3 className="task__main--heading">{props.task.text}</h3>
        <i className="task__main--icon">
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => props.onDelete(props.task.id)}
          />
        </i>
      </div>
      <p className="task__date">{props.task.day}</p>
    </div>
  );
}

export default Task;
