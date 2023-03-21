import Strings from "./Strings";

class Task {
  details = "";
  priority: number;
  #ts: number;
  #uuid: string;
  expanded = false;

  constructor(details: Task["details"], priority: number) {
    this.details = details;
    this.priority = priority;
    this.#ts = Date.now();
    this.#uuid = globalThis.crypto.randomUUID();
  }

  get summary() {
    return Strings.truncateAt(this.details, "\n");
  }

  get id() {
    return this.#uuid;
  }

  get createdAt() {
    return new Date(this.#ts).toISOString();
  }
}

export default Task;
