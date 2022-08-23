import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";

const FormContainer = styled.div`
  width: 450px;
  margin: auto;
  margin-top: 20px;
`;

class BookAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  // Update the state of the first name field
  handleFirstNameFieldChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  // Update the state of the last name field
  handleLastNameFieldChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  // Update the state of the email field
  handleEmailFieldChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  // Update the state of message field
  handleMessageFieldChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  // Method for handling form submission
  handleSubmit = () => {
    const { firstName, lastName, email, message } = this.state;
    console.log({
      firstName,
      lastName,
      email,
      message,
    });
  };

  render() {
    // Force the values to reflect the form state in setting up the controlled form fields
    const { firstName, lastName, email, message } = this.state;

    return (
      <div>
        <h2>Book Appointment</h2>
        <FormContainer>
          <Card>
            <h3>
              Have a question? <br></br>Send us a message!
            </h3>

            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName" className="float-start">
                <b>First Name:</b>
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                placeholder="First name"
                onChange={(event) => this.handleFirstNameFieldChange(event)}
              />
            </div>

            {/* Last Name */}
            <br></br>
            <div className="form-group">
              <label htmlFor="lastName" className="float-start">
                <b>Last Name:</b>
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                placeholder="Last name"
                onChange={(event) => this.handleLastNameFieldChange(event)}
              />
            </div>
            <br></br>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1" className="form-label float-start">
                <b>Email address:</b>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                placeholder="youremail@example.com"
                onChange={(event) => this.handleEmailFieldChange(event)}
              />
            </div>
            <br></br>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="float-start">
                <b>Message:</b>
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                value={message}
                placeholder="Enter your message..."
                onChange={(e) => this.handleMessageFieldChange(e)}
              ></textarea>
            </div>
            <br></br>

            <div className="form-group">
              {/* Button is a styled component that will forward its props automatically */}
              <Button color="green" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
          </Card>
        </FormContainer>
      </div>
    );
  }
}

export default BookAppointment;
