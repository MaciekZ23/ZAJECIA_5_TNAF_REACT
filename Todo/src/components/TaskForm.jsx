import React, { useState } from "react";

function TaskForm({ addTask }) 
{
  const [taskName, setTaskName] = useState("");
  const [isHighPriority, setIsHighPriority] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName, isHighPriority);
      setTaskName("");
      setIsHighPriority(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <label>
        <input
          type="checkbox"
          checked={isHighPriority}
          onChange={(e) => setIsHighPriority(e.target.checked)}
        />
        High Priority
      </label>
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
