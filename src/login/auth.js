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
          const { history } = this.props;
          this.setState({ loading: false });
          history.push("/list");
        } else {
          const error = new Error(token.error);
          throw error;
        }
      } catch (error) {
        console.error(error);
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
