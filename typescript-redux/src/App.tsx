import React from "react";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { CounterView } from "./pages/CounterView";

const App: React.FunctionComponent = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
};

export default App;
