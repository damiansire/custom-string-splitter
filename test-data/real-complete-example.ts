export interface Project {
  id: string;
  title: string;
  description: string;
  githubRepositories: string[];
  lastModification: Date;
  creationDate: Date;
  stack: Technology[];
  state: ProjectState;
  dependencies: Project[];
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  state: FeatureState;
  dependencies: Feature[];
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  state: ProjectState;
}

interface Technology {
  name: string;
}

enum ProjectState {
  Cancelled = "Cancelled",
  Completed = "Completed",
  InProgress = "In Progress",
  Pending = "Pending",
  Blocked = "Blocked",
}

enum FeatureState {
  Cancelled = "Cancelled",
  Completed = "Completed",
  InProgress = "In Progress",
  Pending = "Pending",
  Blocked = "Blocked",
}

export interface Board {
  id: string;
  project: Project;
}
