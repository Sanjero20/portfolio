import Link from "next/link";
import CardProject from "@/components/CardProject";
import { HIGHLIGHTED_PROJECT } from "@/data/projects";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {HIGHLIGHTED_PROJECT.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        ))}
      </div>

      <div className="flex w-full justify-center">
        <Link href={"./projects"}>
          <button className="btn btn-link">View more projects...</button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
