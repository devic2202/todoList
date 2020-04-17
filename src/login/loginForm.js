import React from "react";
import "./login.css";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { userLogin } from "./state/actions";
import { push } from "react-router-redux";
class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // this.requestLogin();
    event.preventDefault();
    this.props.userLogin(this.props.values);
    const { history } = this.props;
    history.push("/list");
  }
  // requestLogin() {
  //   try {
  //     const { history } = this.props;
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         username: this.props.values.username,
  //         password: this.props.values.password,
  //       }),
  //     };
  //     fetch("http://118.69.152.88:5001/api/auth/login", requestOptions).then(
  //       async (response) => {
  //         const data = await response.json();
  //         try {
  //           if (data) {
  //             if (data.status === 200) {
  //               localStorage.setItem("user", JSON.stringify(data));
  //               history.push("/list");
  //             }
  //             if (data.status === 401) {
  //               alert("username or password incorrect");
  //             }
  //           }
  //           if (this.isComponentMounted) {
  //             this.setState({
  //               username: this.props.values.username,
  //               password: this.props.values.password,
  //             });
  //           }
  //         } catch (error) {
  //           console.log(error);
  //           if (!response.ok) {
  //             const error = (data && data.message) || response.status;
  //             return Promise.reject(error);
  //           }
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     this.setState({ errorMessage: error });
  //     console.error("There was an error!", error);
  //   }
  // }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div className="form">
            <h1>Đăng nhập vào Todo Lists</h1>
            <div className="account">
              <p>Tên đăng nhập</p>
              <Field
                name="username"
                value={this.props.values.username}
                render={({ field }) => (
                  <input
                    type="text"
                    className="form-control"
                    {...field}
                    required
                  />
                )}
              />
              <p className="error">
                {this.props.touched.username && this.props.errors.username}
              </p>
            </div>
            <div className="password">
              <p>Mật khẩu</p>
              <Field
                name="password"
                value={this.props.values.password}
                render={({ field }) => (
                  <input
                    type="password"
                    className="form-control"
                    {...field}
                    required
                  />
                )}
              />
              <p className="error">
                {this.props.touched.password && this.props.errors.password}
              </p>
            </div>
            <div className="dnBtn">
              <button
                className="btn btn-success btnLogin"
                type="submit"
                value="submit"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      username: "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    username: Yup.string()
      .required("Username is required")
      .min(5, "Username must have min 5 characters")
      .max(10, "Username have max 10 characters"),
    password: Yup.string().required("Password is required"),
  }),
})(LoginForm);

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userInfo) => {
    dispatch(userLogin(userInfo));
  },
});

export default connect(null, mapDispatchToProps)(FormikForm);
