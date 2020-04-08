import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItem = this.refs.itemName.value;
    if (newItem) {
      this.props.addItem({ newItem });
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
