import { legacy_createStore } from "redux";
import { todoreducer } from "./reducer";

export const store = legacy_createStore(
  todoreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
