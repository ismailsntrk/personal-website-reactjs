import React from "react";

import Dashboard from "./Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faInfoCircle,
  faEnvelope,
  faInfo,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { Row, Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Switch, Route } from "react-router-dom";
import Contact from "../contact/Contact";
import Notfound from "../common/Notfound";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faReact,
  faInfoCircle,
  faEnvelope,
  faInfo,
  faCopyright
);

function App() {
  return (
    <Container id="salam">
      <Row>
        <Navi />
      </Row>
      <Row>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route exact component={Notfound}></Route>
        </Switch>
      </Row>
      <Row>
        <div id="footer-div">
          <Footer />
        </div>
      </Row>
    </Container>
  );
}

export default App;
