import TodoItem from "./TodoItem";
import React from "react";
import {connect} from "react-redux";

class TodoList extends React.Component {
  render() {
    let items = this.props.todos.todos.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

const mapStateToProps = (state, ownprops) => {
  return { todos: state.todos };
};
export default connect(mapStateToProps, null)(TodoList);
