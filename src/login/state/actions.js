import * as types from "./types";
export const userLogin = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return (dispatch) => {
    return fetch("http://118.69.152.88:5001/api/auth/login", requestOptions)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errorCode === "USER_PASS_INVALID") {
          alert('Mật khẩu không chính xác');
        } else {
          dispatch(loginUser(data));
        }
      });
  };
};

const loginUser = (data = {}) => ({
  type: types.LOG_IN,
  data,
});

export const logOut = (data = {}) => {
  return {
    type: types.LOG_OUT,
    data,
  };
};

export const getUser = (data = {}) => {
  return {
    type: types.GET_USER,
    data,
  };
};
