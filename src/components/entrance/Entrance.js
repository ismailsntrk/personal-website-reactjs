import "../../images/output-onlinepngtools.png";
import "./Entrance.css";
import { Container, Row, Col } from "reactstrap";
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Entrance() {
  const matches = useMediaQuery('(min-width:1025px)');
if(matches === true){
    return (
        
<div className="background-entrance">
        <Container id="ent-cont">
          <Row>
            <Col xs="6">
              <div id="word-column">
             
                <h2 id="one1"> Make things,</h2>
                <h1 id="two1">Learn Stuff.</h1>
              </div>
              
            </Col>
            <Col xs="6">
            <img
            id="entrance-img"
                
                src={require("../../images/avatar-cuted.png")}
                alt="ismailsenturk"
              />
            </Col>
          </Row>
        </Container>
      </div>
        
    )
}
else{
    return (
        <div>
            <Container>
              <Row>
              <div id="word-column">
              <h2 id="one"> Make things,</h2>
                <h1 id="two">Learn Stuff.</h1>
              </div>
              </Row>
              <Row>
              <img
                id="entrance-img"
                src={require("../../images/avatar-okey.png")}
                alt="ismailsenturk"
              />
              </Row>
            </Container>
        </div>
    )
}
  
}
 
