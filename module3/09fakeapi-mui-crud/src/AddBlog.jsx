import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
    .then(() => navigate("/"))
    .catch((error) => console.error("Error adding blog:", error));
  };

  return (
    <Container>
      <h2>Add Blog</h2>
      <TextField fullWidth label="Title" onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth label="Description" multiline rows={4} onChange={(e) => setDescription(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleAdd} style={{ marginTop: "10px" }}>
        Add
      </Button>
    </Container>
  );
};

export default AddBlog;
