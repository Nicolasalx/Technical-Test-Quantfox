import { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TaskStatus from "./TaskStatus";
import TaskModal from "./TaskModal";

type TaskType = {
  id: string;
  title: string;
  description: string;
  status: string;
  updatedAt: string;
};

type TaskProps = {
  task: TaskType;
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    newTitle: string,
    newDescription: string,
    newStatus: string,
  ) => void;
};

export default function Task({ task, onDelete, onUpdate }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newStatus, setNewStatus] = useState(task.status);

  const handleDoubleClick = () => setIsEditing(true);
  const handleBlur = () => {
    if (
      newTitle !== task.title ||
      newDescription !== task.description ||
      newStatus !== task.status
    ) {
      onUpdate(task.id, newTitle, newDescription, newStatus);
    }
    setIsEditing(false);
  };

  const handleOpenModal = () => {
    setNewTitle(task.title);
    setNewDescription(task.description);
    setNewStatus(task.status);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = () => {
    onUpdate(task.id, newTitle, newDescription, newStatus);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200 mb-2">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
            onBlur={handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p
            onDoubleClick={handleDoubleClick}
            className="font-semibold text-black cursor-pointer"
          >
            {task.title}
          </p>
        )}
        <Button
          icon={<EllipsisOutlined />}
          onClick={handleOpenModal}
          type="text"
        />
      </div>

      <TaskStatus status={task.status} />

      <p className="text-sm text-gray-600">{task.description}</p>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 mt-2"
      >
        Delete
      </button>

      <TaskModal
        task={task}
        isModalOpen={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newStatus={newStatus}
        setNewStatus={setNewStatus}
      />
    </div>
  );
}
