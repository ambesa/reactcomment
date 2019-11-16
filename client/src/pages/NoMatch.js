import React from "react";
// importing react dom
import { Col, Row, Container } from "../components/Grid";
// importin col raw and container from compents/grid file
import Jumbotron from "../components/Jumbotron";
// importing jumbotron from  from compenets/jumbotron

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
// exporting no match

export default NoMatch;
