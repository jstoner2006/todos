import TaskList from "../TaskList/TaskList";
import styles from "./ProjectCard.module.css";

import Button from "../../components/Button/Button";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h2>{project.name}</h2>
      <TaskList tasks={project.tasks} />

      <Button fullWidth>+ Add New Task</Button>
    </div>
  );
}

export default ProjectCard;
