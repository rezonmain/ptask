import { useEffect, useRef } from "react";
import Task from "../../classes/Task";
import RTask from "./Task";
import Sortable from "sortablejs";

const TaskGroup = ({ tasks }: { tasks: Task[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    new Sortable(ref.current, {
      animation: 150,
      ghostClass: "opacity-30",
    });
  }, [ref]);
  return (
    <div ref={ref}>
      {tasks.map((task) => (
        <RTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskGroup;
