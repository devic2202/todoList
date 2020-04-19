import React from "react";
import "./index.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginForm from "./login/loginForm";
import TodoApp from "./components/TodoApp";
export default class App extends React.PureComponent {
  
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/list" exact component={TodoApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
