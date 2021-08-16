import React from "react";
import "./About.css";
import { Container, Col, Row } from "reactstrap";
import useMediaQuery from '@material-ui/core/useMediaQuery';



export default function About() {
    const matches = useMediaQuery('(min-width:1025px)');
  if(matches === true){
      return (
        <div className="hello">
        <Container className="themed-container container" fluid={true}>
          <Row>
            <Col xs="4">
            <img
                id="about-img"
                src={require("../../images/549.JPG")}
                alt="ismailsenturk"
              />
            </Col>
            <Col xs="8">
              <Row>
                <p id="about-p">
                {" "}
                 
                 Hello, my name is Ismail.<br>
                 </br>
I am a studying at the Celal Bayar University. <br>
</br>My Department is Mechatronics Engineering but i am learning stuff about software development for years. 
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      )
  }
  else{
      return (
          <div>
              <Container className="hello"> 
                <Row>
                <img
                id="about-img-mobile"
                src={require("../../images/549.JPG")}
                alt="ismailsenturk"
              />
                </Row>
                <Row>
                <p id="about-p-mobile">
                  {" "}
                 
                  Hello, my name is Ismail.<br>
                  </br>
I am a student. I am studying right now in the Celal Bayar University. <br>
</br>My Department is Mechatronics Engineering. 
                </p>
                </Row>
              </Container>
          </div>
      )
  }
    
  }