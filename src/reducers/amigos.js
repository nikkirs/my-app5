var initialState = { all: [] };
export function Amigos(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, all: action.payload.data };
  }
  return state;
}
