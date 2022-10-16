import React from "react";
import "./ReactSearchBar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function ReactSearchBar() {
  return (
    <>
      <Form className="display">
        <div className="col-md-6 ReactForm">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label >Location</Form.Label>
            <Form.Control  className="mainLoginInput"
              name="location"
              placeholder="&#xf3c5;"/>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Chack In</Form.Label>
            <Form.Control type="date" name="check-in" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Chack Out</Form.Label>
            <Form.Control type="date" name="check-out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn1"
            style={{ width: "50px" }}
          >
            <i className="fa fa-search"></i>
          </Button>
        </div>
      </Form>
    </>
  );
}
