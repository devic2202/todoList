import React, {PureComponent} from "react";
import { connect } from 'react-redux';
import "./index.css";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginForm from "./login/loginForm";
import TodoApp from "./components/TodoApp";
class App extends PureComponent {
  
  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginForm} />
          {user && <Route path="/list" exact component={() => (<TodoApp />)}/>}
          <Redirect to={user ? "/list" : "/"} /> 
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return { user: state.logIn };
};
export default connect(mapStateToProps, null)(App);
