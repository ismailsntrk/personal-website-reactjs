/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./Navi.css";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  renderWide() {
    return (
      <div>
        <Container className="themed-container container" id="container-1" fluid={true}>
          <Row>
            <Col xs="8">
              <Link to="/">
                {" "}
                <FontAwesomeIcon id="i-icon" color="black" icon="info" />{" "}
              </Link>
            </Col>

            <Col xs="4">
              <div className="social-navi">
                <Link to="/contact" className="social-icon" id="gmail">
                  <FontAwesomeIcon icon="envelope" />
                </Link>

                <a
                  className="social-icon"
                  id="linkedin"
                  href="https://www.linkedin.com/in/ismail-%C5%9Fent%C3%BCrk-56090b179/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
                </a>
                <a
                  className="social-icon"
                  id="twitter"
                  href="https://twitter.com/ismailsntrk1"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
                </a>
                <a
                  className="social-icon"
                  id="instagram"
                  href="https://www.instagram.com/ismail_senturk/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  renderMobile() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <Link to="/">
                {" "}
                <FontAwesomeIcon id="i-icon" color="black" icon="info" />{" "}
              </Link>
            </Col>
            <Col xs="9">
              <div className="navbar-toggler">
                <Navbar  color="faded" light>
                  <NavbarToggler
                    onClick={() =>
                      this.setState({
                        isOpen: !this.state.isOpen,
                      })
                    }
                    className="mr-2"
                  />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <Row id="row-nav">
                          <Col>
                            <a
                              className="social-icon-mobile"
                              id="instagram"
                              href="http://www.twitter.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
                            </a>
                          </Col>
                          <Col>
                            <Link
                              to="/contact"
                              className="social-icon-mobile"
                              id="gmail"
                            >
                              <FontAwesomeIcon icon="envelope" />
                            </Link>
                          </Col>
                          <Col>
                            <a
                              className="social-icon-mobile"
                              id="instagram"
                              href="http://www.linkedin.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
                            </a>
                          </Col>
                          <Col>
                          <a
                              className="social-icon-mobile"
                              id="instagram"
                              href="http://www.instagram.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
                            </a>
                          </Col>
                        </Row>
                      </NavItem>
                    
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Media query="(min-width: 1025px)">
          {(matches) => {
            return matches ? this.renderWide() : this.renderMobile();
          }}
        </Media>
      </div>
    );
  }
}
