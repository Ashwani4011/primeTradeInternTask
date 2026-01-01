export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between border p-2"
        >
          <span>{task.title}</span>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
