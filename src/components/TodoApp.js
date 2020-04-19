import React from "react";
import "../index.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {logOut} from "../login/state/actions";
class TodoApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
    };
  }
  componentDidMount() {
    let token = JSON.parse(localStorage.getItem("user"));
    try {
      if (
        token.data.data.doc.token !== undefined ||
        token.data.data.doc.token !== null
      ) {
        this.setState({ loading: false });
      } else {
        const error = new Error(token.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      alert("Vui lòng đăng nhập");
      this.setState({ loading: false, redirect: true });
    }
  }
  render() {
    const { loading, redirect } = this.state;
    if (loading) {
      return null;
    }
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div id="main" className="row">
          <h1>Todo List...</h1>
          <button
            className="btn btn-danger btnLogin"
            type="submit"
            value="submit"
            onClick={this.props.logOut}
          >
            Đăng xuất
          </button>
          <div className="col-md-6">
            <TodoForm />
          </div>
          <div className="col-md-6">
            <TodoList />
            <div></div>
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
