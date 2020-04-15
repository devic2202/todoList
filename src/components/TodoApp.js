import React from "react";
import "../index.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default class TodoApp extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div id="main" className="row">
          <h1>Todo List...</h1>
          <div className="col-md-6">
            <TodoForm />
          </div>
          <div className="col-md-6">
            <TodoList
            />
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
