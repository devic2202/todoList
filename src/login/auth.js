import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      let token = JSON.parse(localStorage.getItem("user"));
      try {
        if (
          token.data.doc.token !== undefined ||
          token.data.doc.token !== null
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
      return <ComponentToProtect {...this.props} />;
    }
  };
}
