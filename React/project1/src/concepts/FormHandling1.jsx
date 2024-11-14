import React, { Component } from "react";

class FormHandling1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Richie",
      lastName: "Arnold",
      contact: "",
    };
  }

  handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
      //   when working on firstName input field name = firstName
      // firstName : value
      //      when working on lastName input filed name = lastName
      //   lastName : value
    });
  };
  render() {
    return (
      <div>
        <form>
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label for="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={this.state.contact}
          />
        </form>
      </div>
    );
  }
}

export default FormHandling1;
