// Selector to get the search text from the Redux store
export const searchtextSelector = (state) => state.filter.search;

// Selector to get the filtered todo list based on the search text
export const todoListSelector = (state) => {
  const searchText = searchtextSelector(state);
  // Filter the todo list based on the search text
  const todoRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(searchText);
  });
  return todoRemaining;
};
