import { INCREMENT, DECREMENT, ADD } from "../actions";

const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case ADD:
      return Object.assign({}, state, {
        count: state.count + action.payload
      });
    default:
      return state;
  }
}
