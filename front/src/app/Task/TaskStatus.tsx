import { Badge } from "antd";

export default function TaskStatus({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "gray";
      case "IN_PROGRESS":
        return "blue";
      case "COMPLETED":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Badge
      color={getStatusColor(status)}
      text={status}
      className="text-xs font-medium"
    />
  );
}
