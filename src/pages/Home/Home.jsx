import ProjectList from "../../components/ProjectList/ProjectList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Current Projects</h1>
      <ProjectList />
      <button className={styles.addButton}>+ Add a new project</button>
    </div>
  );
}

export default Home;
