import React from "react";

function TaskList({ tasks, onTaskComplete, onTaskRemove }) 
{
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.isHighPriority ? "high-priority" : ""}`}
        >
          <span>{task.name}</span>
          <div>
            {onTaskComplete && (
              <button onClick={() => onTaskComplete(task.id)} className="done-button">
                Done
              </button>
            )}
            <button onClick={() => onTaskRemove(task.id)} className="remove-button">
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
