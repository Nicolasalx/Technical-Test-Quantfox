import { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import Task from "./Task/Task";

type ListProps = {
  id: string;
  name: string;
  onDelete: (id: string) => void;
};

type TaskType = {
  id: string;
  title: string;
  description: string;
  status: string;
  updatedAt: string;
};

const List = ({ id, name, onDelete }: ListProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lists/${id}/tasks`)
      .then((res) => setTasks(res.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des tâches", error)
      );
  }, [id]);

  const deleteList = async () => {
    try {
      await axios.delete(`http://localhost:8080/lists/${id}`);
      onDelete(id);
    } catch (error) {
      console.error("Erreur lors de la suppression de la liste", error);
    }
  };

  const addTask = async () => {
    if (!taskTitle) return;

    const newTask = { title: taskTitle, description: "", listId: id };
    try {
      const res = await axios.post(
        `http://localhost:8080/lists/${id}/tasks`,
        newTask
      );
      setTasks([...tasks, res.data]);
      setTaskTitle("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche", error);
    }
  };

  const updateListName = async () => {
    if (newName === name) return;

    try {
      await axios.put(`http://localhost:8080/lists/${id}`, { name: newName });
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom", error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await axios.delete(`http://localhost:8080/lists/${id}/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche", error);
    }
  };

  const updateTask = async (
    taskId: string,
    newTitle: string,
    newDescription: string,
    newStatus: string
  ) => {
    try {
      await axios.patch(`http://localhost:8080/lists/${id}/tasks/${taskId}`, {
        title: newTitle,
        description: newDescription,
        status: newStatus,
      });
      setTasks(
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                title: newTitle,
                description: newDescription,
                status: newStatus,
              }
            : task
        )
      );
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={updateListName}
            className="border p-2 rounded-md"
          />
        ) : (
          <h2
            className="font-bold text-lg text-black"
            onDoubleClick={() => setIsEditing(true)}
          >
            {newName}
          </h2>
        )}

        <DeleteOutlined
          className="text-red-500 cursor-pointer"
          onClick={deleteList}
        />
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a task"
          className="p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white p-2 rounded-md border-2 border-green-500 hover:bg-green-600"
        >
          Add
        </button>
      </div>

      <div className="mt-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
