//Adding new Tasks

import { useState } from "react";

export default function NewTasks() {
  const [enterTask, setEnterTask] = useState();

  function handleChange(event) {
    setEnterTask(event.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-indigo-200"
        onChange={handleChange}
        value={enterTask}
      />
      <button className="text-cyan-200 hover:text-cyan-950">ADD TASK</button>
    </div>
  );
}
