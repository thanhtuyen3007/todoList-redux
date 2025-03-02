// Selector to get the todo list from the Redux store
export const todoListSelector = (state) => state.todoList;

// Selector to get the search text from the Redux store
export const searchTextSelector = (state) => state.filters.search;

// Selector to get the filter status from the Redux store
export const filterStatusSelector = (state) => state.filters.status;

// Selector to get the filter priority from the Redux store
export const filterPrioritySelector = (state) => state.filters.priority;

// Use the reselect library to create a memoized selector
import { createSelector } from "@reduxjs/toolkit";

// Selector to get the filtered todo list based on the search text, status, and priority
export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritySelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === "all" && priority === "all") {
        return todo.title.includes(searchText);
      }
      if (status === "all") {
        return todo.title.includes(searchText) && todo.priority === priority;
      }
      if (priority === "all") {
        return (
          todo.title.includes(searchText) &&
          todo.completed === (status === "completed")
        );
      } else {
        return (
          todo.title.includes(searchText) &&
          todo.completed === (status === "completed") &&
          todo.priority === priority
        );
      }
    });
  }
);
