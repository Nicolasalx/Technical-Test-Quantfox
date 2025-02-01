import { Modal, Input, Select } from "antd";

export default function TaskModal({
  task,
  isModalOpen,
  handleClose,
  handleSave,
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newStatus,
  setNewStatus,
}: {
  task: any;
  isModalOpen: boolean;
  handleClose: () => void;
  handleSave: () => void;
  newTitle: string;
  setNewTitle: (title: string) => void;
  newDescription: string;
  setNewDescription: (description: string) => void;
  newStatus: string;
  setNewStatus: (status: string) => void;
}) {
  return (
    <Modal
      title="Edit Task"
      open={isModalOpen}
      onCancel={handleClose}
      onOk={handleSave}
    >
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          autoFocus
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <Input.TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <Select
          value={newStatus}
          onChange={setNewStatus}
          options={[
            { label: "PENDING", value: "PENDING" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "COMPLETED", value: "COMPLETED" },
          ]}
        />
      </div>

      <div className="text-gray-500">
        <strong>Last updated:</strong> {task.updatedAt}
      </div>
    </Modal>
  );
}
