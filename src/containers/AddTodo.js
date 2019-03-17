import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.addTodo(this.state.input);
      this.setState({
        input: ""
      });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            name="input"
            className="form-control"
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: input => dispatch(addTodo(input))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
