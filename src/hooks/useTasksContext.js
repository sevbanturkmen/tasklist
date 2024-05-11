import { createContext, useContext } from "react";

const TasksContext = createContext({
  tasks: [],
  setTasks: () => undefined,
  onCreate: () => undefined,
  onUpdate: () => undefined,
  onDelete: () => undefined,
});

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (context === undefined) {
    throw new Error("tasks context not found");
  }
  return context;
};

export default TasksContext;
