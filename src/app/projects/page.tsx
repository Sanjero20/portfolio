import CardProject from "@/components/CardProject";
import { PROJECTS } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>Here is a list of my projects that i worked on and took apart on</p>

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

      {/* Collaboration Project */}
    </div>
  );
};

export default ProjectsPage;
