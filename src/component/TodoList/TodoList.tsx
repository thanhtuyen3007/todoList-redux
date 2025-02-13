import React from "react";
import clsx from "clsx";
import styles from "./TodoList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, Todo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todoListSelector, searchtextSelector } from "../../redux/selector";

// Define the TodoList component
const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  // State for input value and priority
  const [todoName, setTodoName] = React.useState("");
  const [priority, setPriority] = React.useState("Low");
  // Get the todo list and search text from the Redux store
  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchtextSelector);
  console.log(searchText);

  // Function to handle the add button click
  const handleAddButton = () => {
    // Dispatch an action to add a new task
    dispatch(
      addTodoAction({
        id: uuidv4(),
        title: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName(""); // Clear the input field
    setPriority("Low"); // Reset the priority
  };

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  // Function to handle select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  return (
    <div className={clsx(styles.todoListContainer)}>
      <div className={clsx(styles.todoListForm)}>
        {/* Input field for task text */}
        <input
          value={todoName}
          onChange={handleInputChange}
          type="text"
          placeholder="Add a new task"
          className={clsx(styles.todoListInput)}
        />
        {/* Dropdown for task priority */}
        <select
          value={priority}
          onChange={handleSelectChange}
          className={clsx(styles.todoListSelect)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {/* Button to add the task */}
        <button
          onClick={handleAddButton}
          className={clsx(styles.todoListButton)}
        >
          Add
        </button>
      </div>
      {/* List of tasks */}
      <ul className={clsx(styles.todoListTasks)}>
        {todoList.map((task: Todo, index: number) => (
          <li
            key={index}
            className={clsx(styles.todoListTask, styles[task.priority], {
              [styles.completed]: task.completed,
            })}
            // onClick={() => handleToggleComplete(index)}
          >
            {task.title} -{" "}
            <span className={clsx(styles.priority)}>{task.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
