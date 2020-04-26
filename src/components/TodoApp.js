import React, {PureComponent} from "react";
import "../index.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import {logOut} from "../state/loginState/actions";
class TodoApp extends PureComponent {
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
    this.state = {
      loading: true,
      redirect: false,
    };
  }
  
  logOutUser(){
    this.props.logOut();
  }
  render() {
    return (
      <div className="container">
        <div id="main" className="row">
          <h1>Todo List...</h1>
          <button
            className="btn btn-danger btnLogin"
            type="submit"
            value="submit"
            onClick={this.logOutUser}
          >
            Đăng xuất
          </button>
          <div className="col-md-6 todoForm">
            <TodoForm />
          </div>
          <div className="col-md-6 todoList">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return { user: state.logIn };
};
export default connect(mapStateToProps, {logOut})(TodoApp);
