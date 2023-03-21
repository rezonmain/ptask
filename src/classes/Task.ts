import Strings from "./Strings";

class Task {
  details = "";
  priority: number;
  createdAt: string;
  expanded = false;

  constructor(details: Task["details"], priority: number) {
    this.details = details;
    this.createdAt = new Date(Date.now()).toISOString();
    this.priority = priority;
  }

  get summary() {
    return Strings.truncateAt(this.details, "\n");
  }
}

export default Task;
