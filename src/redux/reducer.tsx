import { combineReducers } from "redux"; // Import combineReducers from redux
import FilterReducer from "../component/Filter/FilterSliceReducer"; // Import FilterReducer from FilterSliceReducer file
import TodoListReducer from "../component/TodoList/TodoListSliceReducer"; // Import TodoListReducer from TodoListSliceReducer file

// Combine the filter and todo list reducers into a root reducer
const rootReducer = combineReducers({
  filters: FilterReducer, // Assign FilterReducer to filters key
  todoList: TodoListReducer, // Assign TodoListReducer to todoList key
});

export default rootReducer; // Export the rootReducer as the default export
