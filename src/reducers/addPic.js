export function addPic(state = null, action) {
  switch (action.type) {
    case "ADD_PIC":
      console.log(action.payload.data);
      return { ...state, all: action.payload.data };
  }
  return state;
}
