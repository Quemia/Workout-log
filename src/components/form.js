import React from "react";
import { FormCotainer, FormLegend, FormStyled } from "./styles";
import { Form, Button, Row, Col } from "react-bootstrap";

const TableForm = ({ onSubmit }) => {
  return (
    <FormCotainer>
      <FormLegend>Insert an item</FormLegend>
      <FormStyled onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col xs={2}>
              <Form.Control type="number" name="time_spent" required />
            </Col>

            <Col xs={4}>
              <Form.Control as="select" name="activity" required>
                <option disabled selected>
                  Choose an actvity
                </option>
                <option value="Run">Run</option>
                <option value="Bike">Bike</option>
                <option value="Swimming">Swimming</option>
              </Form.Control>
            </Col>

            <Col xs={4}>
              <Form.Control type="date" name="date" required />
            </Col>

            <Col xs={1}>
              <Button type="submit">Add</Button>
            </Col>
          </Row>
        </Form.Group>
      </FormStyled>
    </FormCotainer>
  );
};

export default TableForm;
