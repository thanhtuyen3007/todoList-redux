// // Reducer function for the todo list
// const TodoListReducer = (state = [], action: any) => {
//   switch (action.type) {
//     case "todoList/addTodo": {
//       // Add a new todo to the state
//       return [...state, action.payload];
//     }
//     case "todoList/toggleTodo": {
//       // Toggle the completed status of a todo
//       return state.map((todo) =>
//         // If the todo id matches the payload id, toggle the completed status
//         // Otherwise return the todo as is
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     }
//     case "todoList/deleteTask": {
//       // Delete a todo from the state}
//       return state.filter((todo) => todo.id !== action.payload);
//     }
//     default:
//       // Return the current state if no action matches
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

// export default TodoListReducer;
export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      // state.map((todo) =>
      //   todo.id === action.payload
      //     ? { ...todo, completed: !todo.completed }
      //     : todo
      // );
      // console.log("toggleTodo", action.payload);
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});
