export type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export type TaskState = {
  items: Task[];
  isLoading: boolean;
  error: string | null;
};
