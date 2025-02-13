import { createStore } from "redux";
import rootReducer from "./reducer.tsx";
const store = createStore(rootReducer);
export default store;
