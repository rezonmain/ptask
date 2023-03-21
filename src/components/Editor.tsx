import Fake from "../classes/Fake";
import TaskGroup from "./TaskGroup/TaskGroup";

const Editor = () => {
  return (
    <>
      <main className="flex flex-col items-center mx-auto my-0 h-full sm:max-w-screen-sm md:max-w-screen-md">
        <TaskGroup tasks={Fake.task(100)} />
      </main>
    </>
  );
};

export default Editor;
