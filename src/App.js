import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { CounterView } from "./pages/CounterView";
import { Employees } from "./pages/Employees";
import { configureStore } from "./store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
      <Employees />
    </Provider>
  );
}

export default App;
