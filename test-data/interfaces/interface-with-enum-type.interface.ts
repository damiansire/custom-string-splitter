export interface Task {
  title: string;
  description: string;
  state: ProjectState;
}

enum ProjectState {
  Cancelled = "Cancelled",
  Completed = "Completed",
  InProgress = "In Progress",
  Pending = "Pending",
  Blocked = "Blocked",
}
