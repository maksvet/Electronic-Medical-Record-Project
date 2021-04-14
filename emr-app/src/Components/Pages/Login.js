import React from 'react';
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';

// const submitForm = () => {
  
// }

const Navigation = () => {
  return (
    <Container className="py-5">
      <h1 className="py-5 text-center">Electronic Medical Record System</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="email" placeholder="Enter User ID" />
          <Form.Text className="text-muted">
            Only registered users can access this system.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Admin" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          href="/AdminHome" /*onSubmit={submitForm}*/
        >
          Admin
        </Button>{" "}

      </Form>
    </Container>
  );
};

export default Navigation;
