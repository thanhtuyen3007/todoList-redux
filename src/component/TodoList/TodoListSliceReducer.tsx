const initState = [
  { id: 1, title: "Task 1", priority: "Low", completed: false },
];

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
export default TodoListReducer;
