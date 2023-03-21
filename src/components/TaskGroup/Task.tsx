import ITask from "../../classes/Task";

const Task = ({ task }: { task: ITask }) => {
  return (
    <details className="format">
      <summary>{task.summary}</summary>
      {task.details}
    </details>
  );
};

export default Task;
