import React, { useState, useEffect } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  const handleUpdate = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
    .then(() => navigate("/"))
    .catch((error) => console.error("Error updating blog:", error));
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
