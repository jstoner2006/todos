import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

function TaskList({ tasks }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
