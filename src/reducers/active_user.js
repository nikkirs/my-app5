export default function Active(state = null, action) {
  switch (action.type) {
    case "SELECTED_USER":
      return action.payload;
  }
  return state;
}
