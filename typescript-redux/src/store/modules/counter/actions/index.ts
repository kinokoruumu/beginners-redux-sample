import { Action } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";

interface IncrementAction extends Action {
  type: typeof INCREMENT;
}
export const increment = (): IncrementAction => {
  return {
    type: INCREMENT
  };
};

interface DecrementAction extends Action {
  type: typeof DECREMENT;
}
export const decrement = (): DecrementAction => {
  return {
    type: DECREMENT
  };
};

interface AddAction extends Action {
  type: typeof ADD;
  payload: number;
}
export const add = (payload: number): AddAction => {
  return {
    type: ADD,
    payload
  };
};

export type CounterActions = IncrementAction | DecrementAction | AddAction;
