// Selector to get the search text from the Redux store
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

// // Selector to get the filtered todo list based on the search text
// export const todoListSelector = (state) => {
//   const searchText = searchtextSelector(state);
//   // Filter the todo list based on the search text
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.title.includes(searchText);
//   });
//   return todoRemaining;
// };

// use library reselect
import { createSelector } from "reselect";
export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.title.includes(searchText);
    });
  }
);
