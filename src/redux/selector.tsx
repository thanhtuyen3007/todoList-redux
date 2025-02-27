// Selector to get the search text from the Redux store
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

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
  filterStatusSelector,
  searchTextSelector,
  filterPrioritySelector,
  (todoList, status, searchText, priority) => {
    console.log(todoList, status, searchText, priority);
    return todoList.filter((todo) => {
        if (status === "all" && priority === "all") {
          return todo.title.includes(searchText);
        }
        if (status === "all") {
          return todo.title.includes(searchText) && todo.priority === priority;
        }
        if (priority === "all") {
          return todo.title.includes(searchText) && todo.completed === (status === "completed");
        } else {
          return todo.title.includes(searchText) && todo.completed === (status === "completed") && todo.priority === priority;}
      // const matchesStatus = status === "all" || (status === "completed" ? todo.completed : !todo.completed);
      // const matchesPriority = priority === "all" || todo.priority === priority;
      // return todo.title.includes(searchText) && matchesStatus && matchesPriority;
    });
  }
);
