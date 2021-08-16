import React, { Component } from "react";
import Entrance from "../entrance/Entrance";
import Stack from "../stack/Stack";
import { Container, Row } from "reactstrap";
import About from "../about/About";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container >
          <Row>
            <Entrance />
          </Row>
          <Row>
            <About />
          </Row>
          <Row>
            <Stack />
          </Row>
        </Container>
      </div>
    );
  }
}
