import Task from "./Task";
import "../css/Tasks.css";

function Tasks(props) {
  return (
    <div className="tasks">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
}

export default Tasks;
