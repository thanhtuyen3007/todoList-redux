import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./TodoList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../redux/selector";
import Todo from "../Todo/Todo";
import { todoListSlice } from "./TodoListSliceReducer";

// Define the TodoList component
const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  // Ref for input field
  const inputRef = React.useRef<HTMLInputElement>(null);

  // State for input value and priority
  const [todoName, setTodoName] = React.useState("");
  const [priority, setPriority] = React.useState("low");
  // Get the filtered todo list from the Redux store
  const todoList = useSelector(todoRemainingSelector);
  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("todoList");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      tasks.forEach((task) => {
        dispatch(todoListSlice.actions.addTodo(task));
      });
    }
  }, [dispatch]);

  // Function to handle the add button click
  const handleAddButton = () => {
    const newTask = {
      id: uuidv4(),
      title: todoName,
      completed: false,
      priority: priority,
    };
    // Dispatch an action to add a new task
    dispatch(todoListSlice.actions.addTodo(newTask));
    // Save the updated todo list to localStorage
    localStorage.setItem("todoList", JSON.stringify([...todoList, newTask]));
    setTodoName(""); // Clear the input field
    setPriority("low"); // Reset the priority
    inputRef.current?.focus(); // Focus on the input field
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
          ref={inputRef}
          value={todoName}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddButton();
            }
          }}
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
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
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
      <div className={clsx(styles.todoListTasks)}>
        {todoList.map((task, index: number) => (
          <Todo
            key={index}
            id={task.id}
            title={task.title}
            priority={task.priority}
            status={task.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
