import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Backend Express API URL

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!newTaskTitle.trim()) return;
    await axios.post(`${API_URL}/tasks`, { title: newTaskTitle });
    setNewTaskTitle('');
    fetchTasks();
  };

  const markDone = async (id) => {
    await axios.put(`${API_URL}/tasks/${id}/done`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={createTask}>
          Create Task
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <div>
              {!task.done && (
                <button className="btn btn-success btn-sm me-2" onClick={() => markDone(task.id)}>
                  Mark Done
                </button>
              )}
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
