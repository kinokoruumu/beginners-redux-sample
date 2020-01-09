import React from "react";

export const CounterView = ({ count, increment, decrement, add }) => {
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
