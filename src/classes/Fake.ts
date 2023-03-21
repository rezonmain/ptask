import Ran from "./Ran";
import Task from "./Task";
import { faker } from "@faker-js/faker";

class Fake {
  static task(min: number): Task[];
  static task(min: number, max: number): Task[];
  static task(min = 10, max?: number): Task[] {
    return Array.from(
      { length: max ? Ran.minMaxInclusive(min, max) : min },
      () => new Task(faker.lorem.paragraph())
    );
  }
}

export default Fake;
