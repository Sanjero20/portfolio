import CardProject from "@/components/CardProject";
import { COLLAB_PROJECTS, PROJECTS } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="sm:text-center">Solo Projects</h2>

      {/* Solo Project */}
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        ))}
      </div>

      <div className="divider mb-0" />

      <h2 className="sm:text-center">Collab Projects</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {COLLAB_PROJECTS.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
