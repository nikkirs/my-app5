export function isLoggedIn(state = null, action) {
  switch (action.type) {
    case "CREATE_USER":
      console.log(action.payload.data);
      return action.payload.data;
    case "LOG_OUT_USER":
      console.log(action.payload.data.isLoggedIn);
      return action.payload.data.isLoggedIn;
    case "LOGIN_USER":
      return action.payload.data;
  }
  return state;
}
