import { ALL_PROJECTS, ProjectType } from "@/data/projects";

function getProjectData(title: string): ProjectType | null {
  if (!title) return null;

  const parsedTitle = title.toLowerCase().replaceAll("-", " ");
  const data = ALL_PROJECTS.filter(
    (project) => project.title.toLowerCase() == parsedTitle,
  );

  return data[0];
}

export default getProjectData;
