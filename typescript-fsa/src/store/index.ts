import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createRootReducer } from "./reducer";

export function configureStore() {
  const middlewares = [thunk];

  const store = createStore(
    createRootReducer(),
    applyMiddleware(...middlewares)
  );
  return store;
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
