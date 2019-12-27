import { createStore } from "redux";
import { createRootReducer } from "./reducer";

export function configureStore() {
  const store = createStore(createRootReducer());
  return store;
}
