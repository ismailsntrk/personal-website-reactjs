/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Stack.css";
import { Container, Row, Progress, Col } from "reactstrap";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const stackAbout =
  "For years i tried several different programming language java,phyton,c#,c++ etc. But when i met with the javascript it has become to a passion for me, You can check my knowledge about programming stuff.  ";
const myStack = [
  { name: "JavaScript ", color: "warning", value: 80 },
  { name: "HTML       ", color: "danger", value: 75 },
  { name: "Css        ", color: "", value: 80 },
  { name: "React      ", color: "info", value: 70 },
  { name: "Redux      ", color: "secondary", value: 65 },
  { name: "Angular    ", color: "dark", value: 50 },
  { name: "Bootstrap  ", color: "success", value: 80 },
  { name: "Androidstd.", color: "", value: 50 },
];
export default function Stack() {
  const matches = useMediaQuery("(min-width:1025px)");
  if (matches === true) {
    return (
      <div className="main-div">
        <Container>
          <Row xs="11">
            <Col xs="5">
              <h1 id="web-stack-about">{stackAbout}</h1>
            </Col>
            <Col xs="7">
              {myStack.map((item) => (
                <Row key={item.name}>
                  <Col className="stack-bar" xs="2">
                    <h3  >{item.name}</h3>
                  </Col>
                  <Col xs="10">
                    <Progress
                   
                      className="prog-bars"
                      animated
                      color={item.color}
                      value={item.value}
                    />
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
          <Row xs="1">
            <div id="stack-links">
              <Row>
                <h3>
                  My Github Repository :{" "}
                  <a href="https://www.github.com/">Here</a>
                </h3>
              </Row>
              <Row>
                <h3>
                  My Stack : <a href="https://www.github.com/">Here</a>
                </h3>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="mobile-div">
        <Container>
          <Row>
            <div className="stack-about-mobile">
              <h1>{stackAbout}</h1>
            </div>
          </Row>

          <div id="prog-mobile-div">
            {myStack.map((item) => (
              <Row key={item.name}>
                <Col className="stack-bar-mobile" xs="2">
                  <h3>{item.name}</h3>
                </Col>
                <Col xs="10">
                  <Progress
                    className="prog-bars-mobile"
                    animated
                  
                    color={item.color}
                    value={item.value}
                  />
                </Col>
              </Row>
            ))}

            <Row>
              <div id="stack-links-mobile">
                <Row>
                  <h3>
                    My Github Repository{" "}
                    <a href="https://github.com/ismailsntrk?tab=repositories" target="_blank">
                      Here
                    </a>
                  </h3>
                </Row>
                <Row>
                  <h3>
                    My Stack{" "}
                    <a href="https://stackshare.io/serus2003/my-stack" target="_blank">
                      Here
                    </a>
                  </h3>
                </Row>
              </div>
            </Row>
          </div>

          <Row></Row>
        </Container>
      </div>
    );
  }
}
