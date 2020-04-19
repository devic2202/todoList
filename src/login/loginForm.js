import React from "react";
import "./login.css";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { userLogin } from "./state/actions";
class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <Form onSubmit={handleSubmit}>
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
  handleSubmit: async (values, { props }) => {
    const { history } = props;
    props.userLogin(values);
    if(props.user.isAuthenticated === true){
      history.push("/list");
    }
  },
})(LoginForm);

const mapStateToProps = (state, ownprops) => {
  return { user: state.logIn };
};

export default connect(mapStateToProps, {userLogin})(FormikForm);
