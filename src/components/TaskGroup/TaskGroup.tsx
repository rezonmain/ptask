import ITask from "../../classes/Task";
import Task from "./Task";

const TaskGroup = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <section>
      {byPriority(tasks).map((task, i) => (
        <Task key={task.createdAt + i} task={task} />
      ))}
    </section>
  );
};

const byPriority = (tasks: ITask[]): ITask[] =>
  tasks.sort((a, b) => a.priority - b.priority);

export default TaskGroup;
