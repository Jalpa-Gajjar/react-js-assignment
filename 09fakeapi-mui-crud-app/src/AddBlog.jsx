import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    axios.post("http://localhost:5000/blogs", { title, description }).then(() => {
      navigate("/");
    });
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
