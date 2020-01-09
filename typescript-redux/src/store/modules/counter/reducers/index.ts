import { INCREMENT, DECREMENT, ADD, CounterActions } from "../actions";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export function counterReducer(
  state: CounterState = initialState,
  action: CounterActions
) {
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
