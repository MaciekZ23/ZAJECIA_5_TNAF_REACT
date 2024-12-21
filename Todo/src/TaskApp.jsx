import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (name, isHighPriority) => {
    const newTask = { id: Date.now(), name, isHighPriority };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const removeTask = (taskId, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
    } else {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <h2>To Do ({tasks.length}):</h2>
      <TaskList
        tasks={tasks}
        onTaskComplete={completeTask}
        onTaskRemove={(taskId) => removeTask(taskId, false)}
      />
      <h2>Done ({completedTasks.length}):</h2>
      <TaskList
        tasks={completedTasks}
        onTaskRemove={(taskId) => removeTask(taskId, true)}
      />
    </div>
  );
}

export default TaskApp;
