import {
  Form,
  Label,
  Input,
  Container,
  Row,
  Button,
  FormGroup,
} from "reactstrap";
import "./Contact.css";
import Media from "react-media";
import React, { Component } from "react";
import emailjs from 'emailjs-com';
import alertify from 'alertifyjs'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state ={
        feedback: '', name: 'Name', email: 'email@example.com' 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.nameChange = this.nameChange.bind(this);
	this.emailChange = this.emailChange.bind(this)
  }


  handleChange(event) {
    this.setState({feedback: event.target.value})
    console.log(this.state.feedback)
  }
  emailChange(event){
    this.setState({email: event.target.value})
}

nameChange(event){
    this.setState({name: event.target.value})
}
  
handleSubmit(event) {
    const templateId = 'template_uJJcT0vi';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	emailjs.send('gmail', templateId, variables,'user_nsgDwLASrGy6VMN9PRY2d')
    .then(function(response) {
      alertify.success('Your Message Has Been Sent!');
    }, function(error) {
      alertify.error('sending Failed');
    });
}


  renderWide() {
      
    return (
      <Container>
        <div className="form-div">
          <Row className="a-row">
            <h1>
              Thanks for taking the time to reach out. How can I help you today?
            </h1>
          </Row>
          <Row>
            <Form id="mail-form">
              <Row>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.emailChange}
                    id="exampleEmail"
                    placeholder="E-mail"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    type="email"
                    value={this.state.name}
                    onChange={this.nameChange}
                    name="email"
                    id="name"
                    placeholder="name & surname"
                  />
                </FormGroup>
              </Row>

              <FormGroup>
                <Label for="exampleText">Your Message</Label>
                <Input type="textarea" onChange={ this.handleChange} value={this.state.feedback} name="text" id="exampleText" />
              </FormGroup>

              <Button  id='submit-button' onClick={ this.handleSubmit} value="Submit">Submit</Button>
            </Form>
          </Row>
        </div>
      </Container>
    );
  }

  renderMobile() {
    return (
      <div>
        <Container>
          <Form>
            <div id="mail-form-mobile">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  value={this.state.email}
                  name="email"
                  onChange={this.emailChange}
             
                  id="exampleEmail-mobile"
                  placeholder="E-mail"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Name & Surname</Label>
                <Input
                  type="text"
                  name="email"
                  value={this.state.name}
                    onChange={this.nameChange}
                  id="name-mobile"
                  placeholder="asdas"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Your Message</Label>
                <Input
                  type="textarea"
                  onChange={ this.handleChange} value={this.state.feedback} 
                  name="text"
                  id="exampleText-mobile"
                  required
                />
              </FormGroup>

              <Button onClick={ this.handleSubmit} value="Submit"  id='submit-button-mobile'>Submit</Button>
            </div>
          </Form>
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

export default Contact;
