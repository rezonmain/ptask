import Strings from "./Strings";

class Task {
  #summary = "";
  #details = "";
  createdAt = "";
  expanded = false;

  constructor(details: Task["details"]) {
    this.#details = details;
    this.#summary = Strings.truncateAt(details, "\n");
    this.createdAt = new Date(Date.now()).toISOString();
  }

  set details(detail: string) {
    this.#details = detail;
    this.#summary = Strings.truncateAt(detail, "\n");
  }

  get details() {
    return this.#details;
  }

  get summary() {
    return this.#summary;
  }
}

export default Task;
