import { useEffect, useState } from "react";
import api from "../utils/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (title) => {
    await api.post("/tasks", { title });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className=" max-w-md mx-auto p-6">
      
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
      <button onClick={logout} className="flex justify-end align-bottom font-bold items-end text-red-500 mb-4">
        Logout
      </button>
    </div>
  );
}
