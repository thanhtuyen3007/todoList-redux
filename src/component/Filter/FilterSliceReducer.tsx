const initState = {
  search: "",
  completed: "All",
  priority: [],
};

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchText": {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};
export default FilterReducer;
