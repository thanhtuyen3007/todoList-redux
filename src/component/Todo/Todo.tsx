import React from "react";
import clsx from "clsx";
import styles from "./Todo.module.scss";
import { useDispatch } from "react-redux";
import { deleteTaskAction, toggleTodoAction } from "../../redux/actions";

// Interface for the props that the Todo component will receive
interface TodoProps {
  id: string;
  title: string;
  priority: string;
  status: boolean;
}

// Todo component definition
const Todo: React.FC<TodoProps> = ({ id, title, priority, status }) => {
  const dispatch = useDispatch();
  // State to track the completion status of the task
  const [completed, setCompleted] = React.useState(status);

  // Function to toggle the completed status of the task
  const toggleCompleted = () => {
    setCompleted(!completed);
    dispatch(toggleTodoAction(id));
  };

  return (
    <div
      onClick={toggleCompleted}
      className={clsx(styles.todoListTask, styles[priority], {
        [styles.completed]: status,
      })}
    >
      {title}-{" "}
      <span className={clsx(styles.todoListTaskPriority)}>{priority}</span>
    </div>
  );
};

export default Todo;
