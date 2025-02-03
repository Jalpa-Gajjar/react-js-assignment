import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <div className="box">
        <nav className="navbar">
          <span>Navigation</span>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>
        <main className="content">
          {isLoggedIn ? "Private Views" : "Public Views"}
        </main>
        <footer className="footer">Footer</footer>
      </div>
    </div>
  );
};

export default App;

// Add this CSS to style the components
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    }
    .box {
      width: 300px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      text-align: center;
    }
    .navbar {
      background: #4a90e2;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar button {
      background: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    .content {
      padding: 40px;
      font-size: 18px;
    }
    .footer {
      background: #4a90e2;
      color: white;
      padding: 10px;
    }
  </style>`
);



