import React, { useEffect, useState } from "react";
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((response) => setBlogs(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    });
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center", background: "#1976D2", color: "#fff", padding: "10px" }}>
        REACT CRUD & MATERIAL UI
      </h2>
      <TextField fullWidth variant="outlined" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => navigate("/add")} style={{ marginTop: "10px"}}>
        ADD BLOG
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Title</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase())).map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => navigate(`/edit/${blog.id}`)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(blog.id)} color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default BlogList;
