import styles from "./TaskItem.module.css";

function TaskItem({ task }) {
  return (
    <tr className={styles.row}>
      <td>{task.name}</td>
      <td>{task.status}</td>
      <td>{task.dueDate}</td>
    </tr>
  );
}

export default TaskItem;
