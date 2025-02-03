
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ListView = () => {
  const items = [
    { id: 1, text: "Use Array.map" },
    { id: 2, text: "Not a for loop" },
    { id: 3, text: "Give each item a unique key" },
    { id: 4, text: "Avoid using array index as the key" }
  ];

  return (
    <div className="container">
      <h2>The "React Way" to Render a List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <FaCheckCircle className="icon" /> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;

// Add this CSS to style the components
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .container {
      background: #a4d65e;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      max-width: 400px;
      margin: auto;
      font-family: Arial, sans-serif;
    }
    h2 {
      color: #3a5a40;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .list-item {
      background: white;
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .icon {
      color: green;
    }
  </style>`
);
