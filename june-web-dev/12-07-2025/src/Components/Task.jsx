import "./Task.css";
import { Trash2 } from "lucide-react";

function Task(props) {
  return (
    <li className="task-item">
      {props.task}
      <Trash2 onClick={()=>props.deleteTask(props.index)}/>
    </li>
  );
}

export default Task;
