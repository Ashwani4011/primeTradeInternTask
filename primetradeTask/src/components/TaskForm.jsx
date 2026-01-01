import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const submit = () => {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-green-500 text-white px-4"
      >
        Add
      </button>
    </div>
  );
}
