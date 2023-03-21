import { ComponentPropsWithoutRef, forwardRef } from "react";
import ITask from "../../classes/Task";
import Button from "../../ui/Button";

interface Props extends ComponentPropsWithoutRef<"div"> {
  task: ITask;
}

const Task = forwardRef<HTMLDivElement, Props>(({ task, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="format max-w-none group flex flex-row gap-1"
    >
      <details className="grow">
        <summary className="as-handle border border-neutral-700 p-2">
          {task.summary}
        </summary>
        <div className="border border-neutral-800 p-2">{task.details}</div>
      </details>
      <aside className="hidden sm:flex opacity-0 hover:opacity-100 transition-opacity flex-row flex-nowrap self-start gap-1">
        <Button>Done</Button>
        <Button data-variant="alt">Delete</Button>
      </aside>
    </div>
  );
});

Task.displayName = "Task";
export default Task;
