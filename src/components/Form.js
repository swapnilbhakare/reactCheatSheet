import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      message: "",
      course: "",
    };
  }

  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  messageHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  courseHandler = (event) => {
    this.setState({
      course: event.target.value,
    });
  };
  submitHandler = (event) => {
    alert(
      `${this.state.userName}   ${this.state.email}  ${this.state.message} ${this.state.course}`
    );
    event.preventDefault();
  };
  render() {
    const { userName, email, message, course } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="userName">
            <lable>User Name : </lable>
            <input
              type="text"
              value={userName}
              onChange={this.userNameHandler}
            />
          </div>
          <div className="email">
            <label>Email : </label>
            <input type="email" value={email} onChange={this.emailHandler} />
          </div>
          <div className="message">
            <label>Message : </label>
            <textarea value={message} onChange={this.messageHandler}></textarea>
          </div>
          <div className="select">
            <lable>Course : </lable>
            <select value={course} onChange={this.courseHandler}>
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
