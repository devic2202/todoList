import React from "react";
import {removeTodo, markTodoDone} from "../state/actions";
import {connect} from "react-redux";

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    const index = parseInt(this.props.index);
    this.props.removeTodo(index);
  }
  onClickDone() {
    const index = parseInt(this.props.item.index);
    let done = this.props.item.done;
    this.props.markTodoDone(index,done);
  }
  render() {
    let todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          ></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}
export default connect(null, {removeTodo, markTodoDone})(TodoItem);
