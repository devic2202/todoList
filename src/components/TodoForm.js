import React, {PureComponent} from "react";
import {addTodo} from "../state/todoState/actions";
import {connect} from "react-redux";
class TodoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    let newItem = this.refs.itemName.value;
    if (newItem) {
      this.props.addTodo(newItem);
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="add a new todo..."
          required
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default connect(null, {addTodo})(TodoForm);