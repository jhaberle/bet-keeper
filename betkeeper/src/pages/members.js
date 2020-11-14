import React from "react";

import { Card, Form } from "react-bootstrap";

const Members = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default Members;
