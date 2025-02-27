import React from "react";
import clsx from "clsx";
import styles from "./Todo.module.scss";

interface TodoProps {
  id: string;
  title: string;
  priority: string;
  status: boolean;
}

const Todo: React.FC<TodoProps> = ({ title, priority, status }) => {
  const [completed, setCompleted] = React.useState(status);

  // Function to toggle the completed status of the task
  const toggleCompleted = () => {
    setCompleted(!completed);
  };
  return (
    <button
      onClick={toggleCompleted}
      className={clsx(styles.todoListTask, styles[priority], {
        [styles.completed]: status,
      })}
    >
      {title}-{" "}
      <span className={clsx(styles.todoListTaskPriority)}>{priority}</span>
    </button>
  );
};

export default Todo;
