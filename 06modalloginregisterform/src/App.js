import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthModal = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="container mt-5 text-left">
      <h3>Modal Login Form</h3>
      <Button variant="primary" onClick={() => setShowLogin(true)}>
        Open Login Modal
      </Button>

      <h3 className="mt-3">Modal Registration Form</h3>
      <Button variant="primary" onClick={() => setShowRegister(true)}>
        Open Register Modal
      </Button>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to My Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="rememberMe">
              <Form.Check type="checkbox" label="Remember Me On This Computer" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="border border-warning text-warning" className="w-100">LOGIN</Button>
          <p className="text-center mt-3 col-12">Forgot Your Password?</p>
          <br/>
          <p className="text-center text-primary cursor-pointer col-12">Create A New Account</p>
        </Modal.Footer>
      </Modal>

      {/* Registration Modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="border border-success text-success" className="w-100">REGISTER</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthModal;
