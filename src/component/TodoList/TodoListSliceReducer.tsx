const initialState = [
  { id: 1, title: "Learn React", completed: true, priority: "high" },
  { id: 2, title: "Learn Redux", completed: false, priority: "low" },
  { id: 3, title: "Learn React-Redux", completed: false, priority: "medium" },
];
const TodoListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
export default TodoListReducer;
