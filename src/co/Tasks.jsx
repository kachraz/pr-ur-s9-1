// Tasks compoenent

import NewTasks from "./NewTa.jsx";

export default function Tasks(onAdd, onDelete) {
  return (
    <selection>
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">TASKS</h2>
      <NewTasks onAdd={onAdd} />
      <p className="text-indigo-800 my-4">No Tasks</p>
      <ul></ul>
    </selection>
  );
}
