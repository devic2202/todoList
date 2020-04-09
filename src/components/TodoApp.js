import React from "react";
import "../index.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: props.initItems };
  }
  addItem(todoItem) {
    this.props.initItems.unshift({
      index: this.props.initItems.length + 1,
      value: todoItem.newItem,
      done: false
    });
    this.setState({ todoItems: this.props.initItems });
  }
  removeItem(itemIndex) {
    this.props.initItems.splice(itemIndex, 1);
    this.setState({ todoItems: this.props.initItems });
  }
  markTodoDone(itemIndex) {
    let todo = this.props.initItems[itemIndex];
    this.props.initItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.props.initItems.push(todo) : this.props.initItems.unshift(todo);
    this.setState({ todoItems: this.props.initItems });
  }
  render() {
    return (
      <div className="container">
        <div id="main" className="row">
          <h1>Todo List...</h1>
          <div className="col-md-6">
            <TodoForm addItem={this.props.addTodo} />
          </div>
          <div className="col-md-6">
            <TodoList
              items={this.props.initItems}
              removeItem={this.removeItem}
              markTodoDone={this.markTodoDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownprops) => {
    return state.todos
  };

export default connect(mapStateToProps, null)(TodoApp);