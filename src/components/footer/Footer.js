import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <Container id="footer-con">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Row>
          <div className="footer-item">
         <Link to="/"><FontAwesomeIcon id="i-icon-little"   icon="info-circle" /></Link>
            </div>
          </Row>
          <Row >
            <div className="footer-item">
            <h3>Living, learning, & leveling up one day at a time.</h3>
            </div>
            
          </Row>
          <Row>
            <div className="footer-item">

           
          <div className="social">
            <Link to="/contact"
              className="social-icon"
              id="gmail"
            >
              <FontAwesomeIcon icon="envelope" />
            </Link>
           
            <a
              className="social-icon"
              id="linkedin"
              href="www.linkedin.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
            </a>
            <a
              className="social-icon"
              id="twitter"
              href="www.twitter.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
            </a>
            <a
              className="social-icon"
              id="instagram"
              href="www.instagram.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
            </a>
          </div>
          </div>
          </Row>
          <Row>
            <div className="footer-item">
            <h5>Handcrafted by me  <FontAwesomeIcon icon='copyright' /> twentytwenty</h5>
            </div>
            
          </Row>
          <Row>
            <div className="footer-item">
          <h5><a>Made With <FontAwesomeIcon icon={["fab", "react"]} /> ReactJs</a></h5>
            </div>
          </Row>
         </Col>
            
    
        </Container>
      
        
      </div>
    );
  }
}
