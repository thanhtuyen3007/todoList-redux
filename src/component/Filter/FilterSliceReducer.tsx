// const initState = {
//   search: "",
//   status: "all",
//   priority: "all",
// };

// const FilterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchText": {
//       return {
//         ...state,
//         search: action.payload,
//       };
//     }
//     case "filters/status": {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     }
//     case "filters/priority": {
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
// export default FilterReducer;
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "all",
    priority: "all",
  },
  reducers: {
    searchText: (state, action) => {
      state.search = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
    priority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
