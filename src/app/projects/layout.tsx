"use client";

import getProjectData from "@/utils/getProjectData";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

function ProjectLayout({ children }: Props) {
  const currentPath = usePathname().split("/")[2];
  const project = getProjectData(currentPath);

  return (
    <div>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>

          {project && <li>{project.title}</li>}
        </ul>
      </div>

      {children}
    </div>
  );
}

export default ProjectLayout;
