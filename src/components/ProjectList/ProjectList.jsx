import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Project A",
    tasks: [
      {
        id: 1,
        name: "Task 1",
        status: "Not Started",
        description: "task 1 description long",
        dueDate: "2026-12-31",
      },
      {
        id: 2,
        name: "Task 2",
        status: "Not Started",
        description: "task 2 description long",
        dueDate: "2026-12-31",
      },
      {
        id: 3,
        name: "Task 3",
        status: "Not Started",
        description: "task 3 description long",
        dueDate: "2026-12-31",
      },
    ],
  },
  {
    id: 2,
    name: "Project B",
    tasks: [
      {
        id: 1,
        name: "Task 1",
        status: "Not Started",
        description: "task 1 description long",
        dueDate: "2026-12-31",
      },
    ],
  },
];

function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
