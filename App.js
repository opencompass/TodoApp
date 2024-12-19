import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), text: task }]);
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Todo App</h1>
      
      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
          type="text"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}