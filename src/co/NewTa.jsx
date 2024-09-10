//Adding new Tasks

import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enterTask, setEnterTask] = useState();

  function handleChange(event) {
    setEnterTask(event.target.value);
  }

  function handleClick() {
    onAdd(enterTask);
    setEnterTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-indigo-200"
        onChange={handleChange}
        value={enterTask}
      />
      <button
        className="text-cyan-200 hover:text-cyan-950"
        onClick={handleClick}
      >
        ADD TASK
      </button>
    </div>
  );
}
