// import { createStore } from "redux";
// import rootReducer from "./reducer.tsx";
// const store = createStore(rootReducer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../component/Filter/FilterSliceReducer.tsx";
import { todoListSlice } from "../component/TodoList/TodoListSliceReducer.tsx";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
