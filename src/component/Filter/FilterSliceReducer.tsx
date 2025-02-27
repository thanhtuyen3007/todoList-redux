const initState = {
  search: "",
  status: "all",
  priority: "all",
};

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchText": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "filters/status": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filters/priority": {
      return {
        ...state,
        priority: action.payload,
      };
    }
    default:
      return state;
  }
};
export default FilterReducer;
