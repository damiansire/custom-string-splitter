export interface Task {
  title: string;
  description: string;
  state: string;
  stack: { technology: string }[];
}
