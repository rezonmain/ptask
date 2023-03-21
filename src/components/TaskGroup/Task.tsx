import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import ITask from "../../classes/Task";
import { useDrag } from "@use-gesture/react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  task: ITask;
}

const Task = forwardRef<HTMLDivElement, Props>(({ task, ...props }, ref) => {
  const [{ y }, api] = useSpring(() => ({ y: 0 }));

  const bind = useDrag(({ down, movement: [, my] }) => {
    api.start({ y: down ? my : 0, immediate: down });
  });

  return (
    <animated.div
      ref={ref}
      {...props}
      {...bind()}
      style={{ y }}
      className="touch-none"
    >
      <details className="format">
        <summary>{task.summary}</summary>
        {task.details}
      </details>
    </animated.div>
  );
});

Task.displayName = "Task";
export default Task;
