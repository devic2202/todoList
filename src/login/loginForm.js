import React from "react";
import "./login.css";
import { useHistory, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import TodoApp from "../App";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const {name,value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.requestLogin();
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <h1>Đăng nhập vào Todo Lists</h1>
            <div className="account">
              <p>Tên đăng nhập</p>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <p>Mật khẩu</p>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="dnBtn">
              <button className="btn btn-success btnLogin" type="submit" value="submit">
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
        <Router>
          <Switch>
            <Route path="/" exact Component={LoginForm} />
            <Route path="/list" Component={TodoApp} />
          </Switch>
        </Router>
      </div>
    );
  }
  requestLogin = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    fetch("http://118.69.152.88:5001/api/auth/login", requestOptions)
      .then(async response => {
        const data = await response.json();
        let history = useHistory();
        if(data.status === 200){
          history.push("/list");
        }
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        this.setState({ postId: data.id });
      })
      .catch(error => {
        this.setState({ errorMessage: error });
        console.error("There was an error!", error);
      });
  }
}
