import FilterReducer from "../component/Filter/FilterSliceReducer";
import TodoListReducer from "../component/TodoList/TodoListSliceReducer";

const initialState = {
  filters: {
    search: '',
    completed: '',
    priority: []
  },
  todoList: []
};

const rootReducer = (state = initialState, action) => {
  return {
    filters: FilterReducer(state.filters, action),
    todoList: TodoListReducer(state.todoList, action),
  };
};
export default rootReducer;
