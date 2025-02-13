const initState = {
  filter: {
    search: "",
    completed: "All",
    priority: [],
  },
  todoList: [],
};
// interface Action {
//   type: string;
//   payload?: {
//     id: number;
//     title: string;
//     completed: boolean;
//     priority: string;
//   };
// }

interface Action {
  type: string;
  payload?: {
    id?: number;
    title?: string;
    completed?: boolean;
    priority?: string;
    search?: string;
  };
}

const rootReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "filter/searchText": {
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
