import React from "react";
import clsx from "clsx";
import styles from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { filterSlice } from "./FilterSliceReducer.tsx";

// List of filter options
const filterCompletedList = ["all", "completed", "todo"];

// Define the Filter component
const Filter = () => {
  const dispatch = useDispatch();
  // State for search text, checkbox, and priority
  const [searchText, setSearchText] = React.useState("");
  const [checked, setChecked] = React.useState("all");
  const [priority, setPriority] = React.useState("all");

  // Function to handle search text change
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // Dispatch an action to update the search text in the Redux store
    dispatch(filterSlice.actions.searchText(e.target.value));
  };

  // Function to handle checkbox change
  const handleFilterStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
    // Dispatch an action to update the filter status in the Redux store
    dispatch(filterSlice.actions.status(e.target.value));
  };

  // Function to handle priority change
  const handleChangePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
    // Dispatch an action to update the filter priority in the Redux store
    dispatch(filterSlice.actions.priority(e.target.value));
  };

  return (
    <div className={clsx(styles.filterContainer)}>
      {/* Input field for search text */}
      <input
        value={searchText}
        onChange={handleSearchText}
        type="text"
        placeholder="Search tasks"
        className={clsx(styles.filterInput)}
      />
      {/* Dropdown for task priority */}
      <select
        value={priority}
        onChange={handleChangePriority}
        className={clsx(styles.filterSelect)}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {/* Checkbox to show completed tasks */}
      <div className={clsx(styles.filterCheckboxContainer)}>
        {filterCompletedList.map((value) => (
          <label key={value} className={clsx(styles.filterCheckboxLabel)}>
            <input
              onChange={handleFilterStatus}
              type="radio"
              name="status"
              value={value}
              checked={value === checked}
              className={clsx(styles.filterCheckbox)}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
