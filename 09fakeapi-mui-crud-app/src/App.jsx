import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
