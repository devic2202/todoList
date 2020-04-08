import React from "react";
import "./index.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginForm from "./login/loginForm";
import TodoApp from "./components/TodoApp";

let todoItems = [];
todoItems.push({ index: 1, value: "learn React", done: false });
todoItems.push({ index: 2, value: "Study Angular", done: true });
todoItems.push({ index: 3, value: "Study Redux", done: true });

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/list" exact component={() => <TodoApp initItems={todoItems}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}
