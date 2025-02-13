import React from "react";
import clsx from "clsx";
import styles from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { searchTextAction } from "../../redux/actions";

// Define the Filter component
const Filter = () => {
  const dispatch = useDispatch();
  // State for search text
  const [searchText, setSearchText] = React.useState("");

  // Function to handle search text change
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // Dispatch an action to update the search text in the Redux store
    dispatch(searchTextAction(e.target.value));
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
      <select className={clsx(styles.filterSelect)}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {/* Checkbox to show completed tasks */}
      <label className={clsx(styles.filterCheckboxLabel)}>
        <input type="checkbox" className={clsx(styles.filterCheckbox)} />
        Show Completed
      </label>
    </div>
  );
};

export default Filter;
