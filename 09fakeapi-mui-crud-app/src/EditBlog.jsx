import React, { useState, useEffect } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
    });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/blogs/${id}`, { title, description }).then(() => {
      navigate("/");
    });
  };

  return (
    <Container>
      <h2>Edit Blog</h2>
      <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth label="Description" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: "10px" }}>
        Update
      </Button>
    </Container>
  );
};

export default EditBlog;
