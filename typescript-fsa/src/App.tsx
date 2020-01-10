import React from "react";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { CounterView } from "./pages/CounterView";
import { Employees } from "./pages/Employees";

const App: React.FunctionComponent = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
      <Employees />
    </Provider>
  );
};

export default App;
