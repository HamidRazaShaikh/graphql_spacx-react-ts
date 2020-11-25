import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MissionsContainer from "./components/Mission/index";

export default function SpacexApp() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MissionsContainer />
        </Col>
      </Row>
    </Container>
  );
}
