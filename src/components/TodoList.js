import TodoItem from "./TodoItem";
import React, {PureComponent} from "react";
import {connect} from "react-redux";

class TodoList extends PureComponent {
  render() {
    let items = this.props.todos.todos.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

const mapStateToProps = (state, ownprops) => {
  return { todos: state.todoList };
};
export default connect(mapStateToProps, null)(TodoList);
