import React from "react";
import { increment, decrement, add } from "../../store/modules/counter/actions";

type Props = {
  count: number;
  increment: typeof increment;
  decrement: typeof decrement;
  add: typeof add;
};
export const CounterView: React.FunctionComponent<Props> = ({
  count,
  increment,
  decrement,
  add
}) => {
  const [num, setNum] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>
        <input
          type="number"
          onChange={e => setNum(parseInt(e.target.value, 10))}
          value={num}
        />
        <button onClick={() => add(num)}>add</button>
      </p>
    </div>
  );
};
