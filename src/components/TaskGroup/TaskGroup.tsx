import Task from "../../classes/Task";

const TaskGroup = ({ tasks }: { tasks: Task[] }) => {
  return (
    <section>
      {tasks.map((task, i) => (
        <details key={task.createdAt + i}>
          <summary>{task.summary}</summary>
          {task.details}
        </details>
      ))}
    </section>
  );
};

export default TaskGroup;
