import Fake from "../classes/Fake";
import TaskGroup from "./TaskGroup/TaskGroup";

const Editor = () => {
  return (
    <>
      <main className="flex flex-col items-center mx-auto my-0 h-full">
        <TaskGroup tasks={Fake.task(10)} />
      </main>
    </>
  );
};

export default Editor;
