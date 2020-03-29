import React from "react";

export default class AuthLogin extends React.Component {
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" })
    };
    fetch("http://118.69.152.88:5001/api/auth/login", requestOptions)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
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
