import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoApp = () => {
  const [tasks, setTasks] = useState(["Eggs", "Milk", "Cheese"]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const handleClear = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Grocery Shopping</h2>
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>{task}</span>
            <div>
              <FaEdit className="icon" onClick={() => handleEdit(index)} />
              <FaTrash className="icon" onClick={() => handleDelete(index)} />
            </div>
          </div>
        ))}
        <div className="input-area">
          <input
            type="text"
            placeholder="Add something to your list"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <button className="delete-list" onClick={handleClear}>Delete List</button>
      </div>
    </div>
  );
};

export default TodoApp;

// Add this CSS to style the components
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box {
      background: #1e1e2e;
      padding: 20px;
      border-radius: 10px;
      width: 350px;
      text-align: center;
      color: white;
    }
    h2 {
      margin-bottom: 15px;
    }
    .task {
      background: linear-gradient(90deg, #7b68ee, #9a58ff);
      margin: 10px 0;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
    }
    .icon {
      cursor: pointer;
      margin-left: 10px;
    }
    .input-area {
      display: flex;
      margin-top: 15px;
    }
    input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px 0 0 5px;
    }
    button {
      background: #9a58ff;
      border: none;
      padding: 10px;
      color: white;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }
    .delete-list {
      background: red;
      margin-top: 10px;
      border-radius: 5px;
      padding: 10px;
    }
  </style>`
);
