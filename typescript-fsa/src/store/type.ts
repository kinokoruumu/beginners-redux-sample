import { Action } from "redux";
import { ThunkAction as ReduxThunkAction } from "redux-thunk";
import { RootState } from "./";

export type ThunkAction<R, A extends Action> = ReduxThunkAction<
  R,
  RootState,
  undefined,
  A
>;
