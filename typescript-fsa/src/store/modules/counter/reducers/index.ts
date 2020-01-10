import { reducerWithInitialState } from "typescript-fsa-reducers";
import { increment, decrement, add } from "../actions";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export const counterReducer = reducerWithInitialState(initialState)
  .case(increment, (state) => ({
    ...state,
    count: state.count + 1
  }))
  .case(decrement, (state) => ({
    ...state,
    count: state.count - 1
  }))
  .case(add, (state, payload) => ({
    ...state,
    count: state.count + payload
  }))
