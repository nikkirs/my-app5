import Axios from "axios";

const ROOT_URL = "https://arcane-falls-27540.herokuapp.com/api/todos";

export function selectedUser(user) {
  return {
    type: "SELECTED_USER",
    payload: user
  };
}

export function fetchUsers() {
  const request = Axios.get(ROOT_URL, { crossdomain: true });
  return {
    type: "FETCH_USERS",
    payload: request
  };
}

export function createUser(props1, props2) {
  const request = Axios.post(
    "https://arcane-falls-27540.herokuapp.com/register",
    {
      username: props1,
      password: props2
    }
  );
  return {
    type: "CREATE_USER",
    payload: request
  };
}
export function loginUser(props1, props2) {
  const request = Axios.post("https://arcane-falls-27540.herokuapp.com/login", {
    username: props1,
    password: props2
  });
  return {
    type: "LOGIN_USER",
    payload: request
  };
}

export function logoutUser() {
  const request = Axios.get("https://arcane-falls-27540.herokuapp.com/logout");
  return {
    type: "LOG_OUT_USER",
    payload: request
  };
}

export function addPic(props1, props2) {
  const request = Axios.post("https://arcane-falls-27540.herokuapp.com/pic", {
    username: props1,
    pic: props2
  });
  return {
    type: "ADD_PIC",
    payload: request
  };
}
