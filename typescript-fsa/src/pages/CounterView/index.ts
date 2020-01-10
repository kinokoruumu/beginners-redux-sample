import { connect } from "react-redux";
import { CounterView as Component } from "./CounterView";
import { increment, decrement, add } from "../../store/modules/counter/actions";
import { RootState } from "../../store";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    add: (num: number) => dispatch(add(num))
  };
};

export const CounterView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
