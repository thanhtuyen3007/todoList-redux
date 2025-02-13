// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {
//         id: 4,
//         title: "Learn TypeScript",
//         completed: false,
//         priority: "High",
//     }
// }

//action creators => funtion that return action object

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: string;
}


export const addTodoAction = (data: Todo) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
}
export const searchTextAction = (text : string) => {
  return {
    type: "filters/searchText", 
    payload: text
  }
}

