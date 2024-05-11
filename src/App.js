import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from "./hooks/useTasksContext";
import useTasksApi from "./hooks/useTasksApi";

function App() {
  const { tasks, setTasks, createTask, deleteTaskById, editTaskById } =
    useTasksApi();

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        onCreate: createTask,
        onUpdate: editTaskById,
        onDelete: deleteTaskById,
      }}
    >
      <div className="App">
        <TaskCreate />
        <h1>Görevler</h1>
        <TaskList />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
