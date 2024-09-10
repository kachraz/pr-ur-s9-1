// Tasks compoenent

import NewTasks from "./NewTa.jsx";

export default function Tasks(tasks, onAdd, onDelete) {
  return (
    <selection>
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">TASKS</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && <p className="text-indigo-800 my-4">No Tasks</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-cyan-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-indigo-700 hover:text-red-500">
                CLEAR
              </button>
            </li>
          ))}
        </ul>
      )}
    </selection>
  );
}
