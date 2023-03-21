import { ComponentPropsWithoutRef, forwardRef } from "react";
import ITask from "../../classes/Task";

interface Props extends ComponentPropsWithoutRef<"div"> {
  task: ITask;
}

const Task = forwardRef<HTMLDivElement, Props>(({ task, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className="border border-neutral-700 p-4">
      <details className="format" open={false}>
        <summary>{task.summary}</summary>
        {task.details}
      </details>
    </div>
  );
});

Task.displayName = "Task";
export default Task;
